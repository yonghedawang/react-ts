// import Navbar from "./components/Navbar"
// import Panels from "./components/Panels"
import Canvas from "./components/Canvas"
import { useEditor } from "@layerhub-io/react";
import React from 'react'
// import Footer from "./components/Footer"
// import Toolbox from "./components/Toolbox"
//import EditorContainer from "./components/EditorContainer"


const GraphicEditor = () => {
  const editor = useEditor();
  //¾²Ì¬ÎÄ×Ö
  const addText = React.useCallback(() => {
    if (editor) {
      editor.objects.add({
        type: "StaticText",
        text: "Hello Layerhub",
        textAlign: "center"
      });
    }
  }, [editor]);
 
  return (
    <>
      <div>
        <button onClick={addText}>ADD TEXT</button>
      </div>
      
      <div>
      {/*  <Navbar />
        <div style={{ display: "flex", flex: 1 }}>
          <Panels />
          <div style={{ flex: 1, display: "flex", flexDirection: "column", position: "relative" }}>
            <Toolbox /> */}
            <Canvas />
      {/*      <Footer />
          </div>
        </div> */}
      </div>
    </>
  )
}

export default GraphicEditor
