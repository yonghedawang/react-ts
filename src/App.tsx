import React from "react";
import { Canvas, useEditor } from "@layerhub-io/react";

function App() {
  const editor = useEditor();

  //静态文字
  const addText = React.useCallback(() => {
    if (editor) {
      editor.objects.add({
        type: "StaticText",
        text: "Hello Layerhub",
        textAlign:"center"
      });
    }
  }, [editor]);

  //静态图片
  const addImage = React.useCallback(() => {
    if (editor) {
      editor.objects.add({
        type: "StaticImage",
        src: "https://img.redocn.com/sheji/20221111/hongseshengdanjieyaoqinghanhaibao_12751095.jpg",
        cropX:10,
        cropY:10
      });
    }
  }, [editor]);

  
  //静态矢量图
  const addStaticVector = React.useCallback(()=>{
    //需要在nginx里配置一下跨域
    if(editor){
      editor.objects.add({
        type:'StaticVector',
        src:'https://tstatic.redocn.com/react/images/001-hug.svg'//https://tstatic.redocn.com/react/images/001-hug.svg  https://ik.imagekit.io/scenify/005-date.svg
        //colorMap:
      });
    }

  },[editor]);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          height: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button onClick={addText}>ADD TEXT</button>
        <button onClick={addImage}>ADD IMAGE</button>
        <button onClick={addStaticVector}>ADD StaticVector</button>
      </div>
      <div style={{ flex: 1, display:"flex" }}>
        <Canvas />
      </div>
    </div>
  );
}

export default App;