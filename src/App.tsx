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

  //背景图片，添加上来在最底层
  const addBackgroundImage = React.useCallback(() => {
    if (editor) {
      editor.objects.add({
        type: "BackgroundImage",
        src: "https://img.redocn.com/sheji/20221114/lantianbaiyunchengshijianyuefengshipinanquanzhouxuanchuanzhanban_12754281.jpg",
        cropX:10,
        cropY:10
      });
    }
  }, [editor]);


  //没有效果
  const addBackground = React.useCallback(() => {
    if (editor) {
      editor.objects.add({
        type: "Background",
        fill:"#000000"
        
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

  //暂时没搞明白是什么
  const addStaticPath = React.useCallback(()=>{
    //需要在nginx里配置一下跨域
    if(editor){
      editor.objects.add({
        type:'StaticPath',
        fill:'#000000',//https://tstatic.redocn.com/react/images/001-hug.svg  https://ik.imagekit.io/scenify/005-date.svg
        //path:[[ 60, 0]]
      });
    }

  },[editor]);

  //StaticGroup，DynamicGroup，DynamicPath，DynamicImage， 不知道怎么操作，在 react-design-editor  搜不到相关代码

/*   {
    id: "E2mcHFkwGA-MTJcfl3Abs",
    name: "StaticPath",
    angle: 0,
    stroke: null,
    strokeWidth: 0,
    left: 328,
    top: 574.22,
    width: 60,
    height: 60,
    opacity: 1,
    originX: "left",
    originY: "top",
    scaleX: 9.19,
    scaleY: 2,
    type: "StaticPath",
    flipX: false,
    flipY: false,
    skewX: 0,
    skewY: 0,
    visible: true,
    shadow: null,
    path: [["M", 60, 0], ["L", 0, 0], ["L", 0, 60], ["L", 60, 60], ["L", 60, 0], ["Z"]],
    fill: "#ff4040",
    metadata: {},
  } */


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
        <button onClick={addBackgroundImage}>ADD BackgroundImage</button>
        <button onClick={addBackground}>ADD Background</button>
        <button onClick={addStaticVector}>ADD StaticVector</button>
        <button onClick={addStaticPath}>ADD StaticPath</button>
      </div>
      <div style={{ flex: 1, display:"flex" }}>
        <Canvas />
      </div>
    </div>
  );
}

export default App;