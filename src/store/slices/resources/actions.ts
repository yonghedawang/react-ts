import { Resource } from "../../..//interfaces/editor"
import { createAsyncThunk, createAction } from "@reduxjs/toolkit"

export const setPixabayResources = createAction<Resource[]>("resources/setPixabayResources")


