import ReactDOM from "react-dom/client"
import { Provider as LayerhubProvider } from "@layerhub-io/react"
import App from "./App"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <LayerhubProvider>
    
      <App />

  </LayerhubProvider>
)

