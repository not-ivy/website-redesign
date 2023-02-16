import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <main className='max-w-screen-md mx-auto h-screen p-4'>
      <App />
    </main>
  </React.StrictMode>,
)
