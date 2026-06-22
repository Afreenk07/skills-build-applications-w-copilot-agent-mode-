export const VITE_CODESPACE_NAME = import.meta.env.VITE_CODESPACE_NAME || "";

export const apiBase = VITE_CODESPACE_NAME
  ? `https://${VITE_CODESPACE_NAME}-8000.app.github.dev/api`
  : "http://localhost:8000/api";

// Set VITE_CODESPACE_NAME in .env.local for Codespaces preview access.
// Example: VITE_CODESPACE_NAME=potential-goldfish-p7jv4wwxxrwqh7xpp
