import express from 'express';

const app = express();
const PORT = 8000;

// Use the CODESPACE_NAME environment variable to construct the URL
const codespaceName = process.env.CODESPACE_NAME;
const baseUrl = codespaceName 
  ? `https://${codespaceName}-8000.app.github.dev`
  : `http://localhost:${PORT}`;

app.get('/', (req, res) => {
  res.json({ message: 'OctoFit Tracker API', url: baseUrl });
});

app.listen(PORT, () => {
  console.log(`Server running at ${baseUrl}`);
});

export default app;