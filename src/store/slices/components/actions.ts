import { createAsyncThunk, createAction } from "@reduxjs/toolkit"
import { IComponent } from "../../../interfaces/DesignEditor"


export const setPublicComponents = createAction<IComponent[]>("components/setPublicComponents")

