import { combineReducers } from "@reduxjs/toolkit"
import { designEditorReducer } from "./slices/design-editor/reducer"
import { fontsReducer } from "./slices/fonts/reducer"

import { resourcesReducer } from "./slices/resources/reducer"
import { designsReducer } from "./slices/designs/reducer"
import { componentsReducer } from "./slices/components/reducer"

const rootReducer = combineReducers({
  designEditor: designEditorReducer,
  fonts: fontsReducer,

  resources: resourcesReducer,
  designs: designsReducer,
  components: componentsReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
