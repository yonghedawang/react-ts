import React from "react"
import { Canvas as LayerhubCanvas,useEditor } from "@layerhub-io/react"
// import Playback from "../Playback"
//import useDesignEditorContext from "../../../../hooks/useDesignEditorContext"
//import ContextMenu from "../ContextMenu"

const Canvas = () => {
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
  // const { displayPlayback } = useDesignEditorContext()
  
  return (
    <div style={{ flex: 1, display: "flex" }}>
      {/* {displayPlayback && <Playback />} */}
      {/* <ContextMenu /> */}
      <div>
        <button onClick={addText}>ADD TEXT2</button>
      </div>
      <LayerhubCanvas />
    </div>
  )
}

export default Canvas
