
import ReactDOM from "react-dom/client"
import { DesignEditorProvider } from "./contexts/DesignEditor"
import { AppProvider } from "./contexts/AppContext"
import { Provider as ReduxProvier } from "react-redux"
import { store } from "./store/store"
import { Provider as LayerhubProvider } from "@layerhub-io/react";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ReduxProvier store={store}>
    <DesignEditorProvider>
      <AppProvider>
        <LayerhubProvider>
          <App />
          </LayerhubProvider>
      </AppProvider>
    </DesignEditorProvider>
  </ReduxProvier>
)