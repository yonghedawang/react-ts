import { createAsyncThunk, createAction } from "@reduxjs/toolkit"

import { IDesign } from "../../../interfaces/DesignEditor"


export const setDesign = createAction<IDesign>("designs/setDesign")
export const setPublicDesigns = createAction<IDesign[]>("designs/setPublicDesigns")
export const unsetDesign = createAction<{ id: string }>("designs/unsetDesign")


