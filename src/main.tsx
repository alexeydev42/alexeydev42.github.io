import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { initCloudflareAnalytics } from './utils/cloudflareAnalytics'
import './styles/global.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

initCloudflareAnalytics()
