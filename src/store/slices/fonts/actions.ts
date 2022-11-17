import { IFontFamily } from "../../../interfaces/editor"
import { createAsyncThunk, createAction } from "@reduxjs/toolkit"



interface QueryFont {
  take: number
  skip: number
  query: string
}

export const setFonts = createAction<IFontFamily[]>("fonts/setFonts")

export const queryFonts = createAction<QueryFont>("fonts/queryFonts")


