import express from 'express';
import path from 'path';
import fs from 'fs';
import { createServer as createViteServer } from 'vite';

const app = express();
const PORT = 3000;

app.use(express.json());

// Path to file-based databases
const DATA_DIR = path.join(process.cwd(), 'data');
const RATES_FILE = path.join(DATA_DIR, 'rates.json');
const MESSAGES_FILE = path.join(DATA_DIR, 'messages.json');

// Ensure data directory and databases exist
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

const DEFAULT_RATES = {
  gold22kPer10g: 72450,
  gold24kPer10g: 79050,
  gold18kPer10g: 59280,
  silverPerKg: 89500,
  lastUpdated: new Date('2026-07-02T10:46:47-07:00').toISOString()
};

if (!fs.existsSync(RATES_FILE)) {
  fs.writeFileSync(RATES_FILE, JSON.stringify(DEFAULT_RATES, null, 2));
}

if (!fs.existsSync(MESSAGES_FILE)) {
  fs.writeFileSync(MESSAGES_FILE, JSON.stringify([], null, 2));
}

// Read and Write Helpers
function getRates() {
  try {
    const data = fs.readFileSync(RATES_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return DEFAULT_RATES;
  }
}

function saveRates(rates: typeof DEFAULT_RATES) {
  fs.writeFileSync(RATES_FILE, JSON.stringify(rates, null, 2));
}

function getMessages() {
  try {
    const data = fs.readFileSync(MESSAGES_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

function saveMessage(message: any) {
  const messages = getMessages();
  messages.unshift({
    id: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    ...message,
    createdAt: new Date().toISOString()
  });
  fs.writeFileSync(MESSAGES_FILE, JSON.stringify(messages, null, 2));
  return messages[0];
}

// API Routes
app.get('/api/rates', (req, res) => {
  const rates = getRates();
  res.json(rates);
});

app.post('/api/rates', (req, res) => {
  const { gold22kPer10g, gold24kPer10g, gold18kPer10g, silverPerKg, token } = req.body;
  
  // Simple session/token validation
  if (token !== 'satyam-session-token-avinash123') {
    return res.status(401).json({ error: 'Unauthorized admin access' });
  }

  if (!gold22kPer10g || !gold24kPer10g || !gold18kPer10g || !silverPerKg) {
    return res.status(400).json({ error: 'Missing price fields' });
  }

  const updatedRates = {
    gold22kPer10g: Number(gold22kPer10g),
    gold24kPer10g: Number(gold24kPer10g),
    gold18kPer10g: Number(gold18kPer10g),
    silverPerKg: Number(silverPerKg),
    lastUpdated: new Date().toISOString()
  };

  saveRates(updatedRates);
  res.json({ success: true, rates: updatedRates });
});

app.post('/api/admin/login', (req, res) => {
  const { username, password } = req.body;
  
  if (username === 'satyam' && password === 'avinash123') {
    res.json({
      success: true,
      token: 'satyam-session-token-avinash123',
      user: { id: 'satyam', name: 'Avinash Nandam' }
    });
  } else {
    res.status(401).json({ error: 'Invalid ID or Password' });
  }
});

app.post('/api/contact', (req, res) => {
  const { name, email, phone, message } = req.body;
  if (!name || !phone || !message) {
    return res.status(400).json({ error: 'Name, phone, and message are required fields' });
  }

  const saved = saveMessage({ name, email: email || '', phone, message });
  res.json({ success: true, message: saved });
});

app.get('/api/contact/messages', (req, res) => {
  const token = req.query.token;
  if (token !== 'satyam-session-token-avinash123') {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  res.json(getMessages());
});

// Configure Vite or Static Files
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
