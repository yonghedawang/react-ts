import React from "react"
import { Provider as ScenifyProvider } from "@layerhub-io/react"

import { store } from "./store/store"
import { Provider as ReduxProvier } from "react-redux"
import { AppProvider } from "./contexts/AppContext"
import { DesignEditorProvider } from "./contexts/DesignEditor"
import { I18nextProvider } from "react-i18next"
import { TimerProvider } from "@layerhub-io/use-timer"
import i18next from "i18next"
import "./translations"

/*这里去掉了 styletron baseui ,以后要用antd的话，应该是这里引入provider*/

const Provider = ({ children }: { children: React.ReactNode }) => {
  
  return (
    <ReduxProvier store={store}>
      <DesignEditorProvider>
        <TimerProvider>
          <AppProvider>
            <ScenifyProvider> 
              <I18nextProvider i18n={i18next}>{children}</I18nextProvider>   
            </ScenifyProvider>
          </AppProvider>
        </TimerProvider>
      </DesignEditorProvider>
    </ReduxProvier>
  )
}

export default Provider
