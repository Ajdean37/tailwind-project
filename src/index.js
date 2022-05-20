import { createRoot } from "react-dom/client";
import './index.css';
import App from './App/App.js';

const root = createRoot( document.getElementById('root') );
root.render(<App tab="home" />);


