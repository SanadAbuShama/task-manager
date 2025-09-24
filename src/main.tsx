import { createRoot } from 'react-dom/client'
import './index.css'
import './i18n'
import App from './App.tsx'

const container = document.getElementById('root');
if (container) {
  createRoot(container).render(<App />);
}