import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

serviceWorkerRegistration.register({
  onUpdate: (registration) => {
    const waitingServiceWorker = registration.waiting;
    
    if (waitingServiceWorker) {
      console.log('New service worker waiting to activate');
      
      waitingServiceWorker.postMessage({ type: 'SKIP_WAITING' });
      waitingServiceWorker.addEventListener('statechange', (e) => {
        if (e.target.state === 'activated') {
          window.location.reload();
        }
      });

    }
  },
  onSuccess: (registration) => {
    console.log('Service worker registered successfully');
  },
  onError: (error) => {
    console.error('Service worker registration failed:', error);
  }
});
