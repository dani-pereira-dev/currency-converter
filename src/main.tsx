import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { ConverterProvider } from './store/converter.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConverterProvider>
      <App />
    </ConverterProvider>
  </React.StrictMode>,
)
