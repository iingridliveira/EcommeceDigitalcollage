import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);
