import { BrowserRouter, Routes, Route } from "react-router-dom"
import GraphicEditor from "./views/DesignEditor/GraphicEditor"

console.log("/src/Router file start");
const Router = () => {
  console.log("/src/Router component start");
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<GraphicEditor />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
console.log("/src/Router file end");