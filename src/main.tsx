import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider as StyletronProvider} from 'styletron-react'
import { Client as Styletron } from "styletron-engine-atomic"
import App from './App'
import './index.css'
const engine = new Styletron()
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StyletronProvider value={engine}>
 
    <App />
  
  </StyletronProvider>
)


