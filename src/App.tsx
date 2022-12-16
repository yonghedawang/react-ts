import React from "react";
import { Canvas, useEditor, useActiveObject, useFrame } from "@layerhub-io/react";
import { IFrame, IScene , ILayerOptions} from "@layerhub-io/types"
import { nanoid } from 'nanoid'
import { groupBy } from "lodash"
import { editorFonts as fonts ,TEXT_EFFECTS } from "./constants/fonts";
import { loadFonts } from "./utils/fonts";

function App() {

  interface IDesign {
    id: string
    name: string
    frame: IFrame
    type: string
    scenes: any[]
    previews: { id: string; src: string }[]
    metadata: {}
    published: boolean
  }

  //console.log(fonts);

  const editor = useEditor();
  const frame = useFrame()
  const activeObject = useActiveObject() as any
  const [opacity, setOpacity] = React.useState(100)
  const [frameWidth, setFrameWidth] = React.useState(1000)
  const [frameHeight, setFrameHeight] = React.useState(1000)
  const [backgroundColor, setBackgroundColor] = React.useState('#ffffff')
  const [activeObjectColor, setActiveObjectColor ] = React.useState('#000000') 
  const [activeObjectFontSize, setActiveObjectFontSize] = React.useState(0)
  const [activeObjectStrokeWidth, setActiveObjectStrokeWidth] = React.useState(0)
  const [activeObjectStroke, setActiveObjectStroke] = React.useState('#000000')
  const [activeObjectShadowBlur, setActiveObjectShadowBlur] = React.useState(0)
  const [activeObjectShadowColor, setActiveObjectShadowColor] = React.useState('#000000')
  const [activeObjectShadowOffsetX, setActiveObjectShadowOffsetX] = React.useState(0)
  const [activeObjectShadowOffsetY, setActiveObjectShadowOffsetY] = React.useState(0)
  /* const [activeObjectShadowAffectStroke, setActiveObjectShadowAffectStroke] = React.useState(true)
  const [activeObjectShadowNonScaling, setActiveObjectShadowNonScaling] = React.useState(true) */
  const [activeObjectShadowEnabled, setActiveObjectShadowEnabled] = React.useState(true)
  
  const [activeObjectShadow, setActiveObjectShadow] = React.useState({blur:0,color:'#000000',offsetX:0,offsetY:0,enabled:true})
  
  const [scenes, setScenes] = React.useState<IScene[]>([]);
  const [currentScene, setCurrentScene] = React.useState<IScene>();
  const [currentDesign, setCurrentDesign] = React.useState<IDesign>();
  const [currentPreview, setCurrentPreview] = React.useState<string>()
  //const [updateObject,setUpdateObject] = React.useState<ILayerOptions>();


  const loadGraphicTemplate = async (payload: IDesign) => {
    const scenes: IScene[] = []
    const { scenes: scns, ...design } = payload
    console.log('loadGraphicTemplate');
    for (const scn of scns) {
      const scene: IScene = {
        name: scn.name,
        frame: payload.frame,
        id: scn.id || nanoid(),
        layers: scn.layers,
        metadata: {},
      }


      const preview = (await editor.renderer.render(scene)) as string
      // console.log(preview);
      scenes.push({ ...scene, preview })
      // console.log(scenes[0].layers);
      setScenes(scenes)
      setCurrentScene(scenes[0])
      //setCurrentDesign(design)
    }

    //return { scenes, design: design as IDesign }
  }








  //第一次加
  React.useEffect(() => {
    if (frame) {
      //console.log("background=>",editor.canvas.backgroundColor);
      console.log('第一次加 json');
      setFrameWidth(frame.width)
      setFrameHeight(frame.height)
      setBackgroundColor('#ffffff');
      //{"id":"98PZEYOW0oR-TbmSEQ-MI","type":"GRAPHIC","name":"Untitled Design","frame":{"width":1200,"height":1200},"scenes":[{"id":"U1S5-P_wQQMyVceKnNCz4","layers":[{"id":"background","name":"Initial Frame","angle":0,"stroke":null,"strokeWidth":0,"left":0,"top":0,"width":1200,"height":1200,"opacity":1,"originX":"left","originY":"top","scaleX":1,"scaleY":1,"type":"Background","flipX":false,"flipY":false,"skewX":0,"skewY":0,"visible":true,"shadow":{"color":"#fcfcfc","blur":4,"offsetX":0,"offsetY":0,"affectStroke":false,"nonScaling":false},"fill":"#ffffff","metadata":{}},{"id":"9VWsxoB_O8LSAkCIRjNFY","name":"StaticPath","angle":0,"stroke":null,"strokeWidth":0,"left":103.25999999999999,"top":54.72999999999999,"width":498.84,"height":436.27,"opacity":1,"originX":"left","originY":"top","scaleX":0.48,"scaleY":0.48,"type":"StaticPath","flipX":false,"flipY":false,"skewX":0,"skewY":0,"visible":true,"shadow":null,"preview":"https://ik.imagekit.io/scenify/1635014101144_519480.png","path":[["M",497.434,243.764],["L",377.754,36.403999999999996],["C",376.05600000000004,33.37,372.90700000000004,31.432999999999996,369.434,31.283999999999995],["L",130.71400000000003,31.283999999999995],["C",127.02300000000002,31.250999999999994,123.59900000000003,33.206999999999994,121.75400000000002,36.403999999999996],["L",1.434000000000026,244.404],["C",-0.477999999999974,247.626,-0.477999999999974,251.635,1.434000000000026,254.857],["L",121.75400000000002,463.07],["C",123.65600000000002,465.803,126.74500000000002,467.467,130.074,467.55],["L",369.434,467.55],["C",372.77200000000005,467.502,375.877,465.83,377.754,463.07],["L",497.434,254.21699999999998],["C",499.302,250.983,499.302,246.999,497.434,243.764],["z"]],"fill":"#CBCBCB","metadata":{}},{"id":"WZLRN4LYlahg798kLogBm","name":"StaticImage","angle":0,"stroke":null,"strokeWidth":0,"left":401.28999999999996,"top":275,"width":650,"height":650,"opacity":1,"originX":"left","originY":"top","scaleX":1,"scaleY":1,"type":"StaticImage","flipX":false,"flipY":false,"skewX":0,"skewY":0,"visible":true,"shadow":null,"src":"https://images.pexels.com/photos/670741/pexels-photo-670741.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","cropX":0,"cropY":0,"metadata":{}},{"id":"A6rI0zdsoHWc0Jaht2vDG","name":"StaticText","angle":0,"stroke":null,"strokeWidth":0,"left":415.79999999999995,"top":75.13,"width":577.32,"height":103.96,"opacity":1,"originX":"left","originY":"top","scaleX":1,"scaleY":1,"type":"StaticText","flipX":false,"flipY":false,"skewX":0,"skewY":0,"visible":true,"shadow":null,"charSpacing":0,"fill":"#333333","fontFamily":"OpenSans-Regular","fontSize":92,"lineHeight":1.16,"text":"simple text","textAlign":"center","fontURL":"https://fonts.gstatic.com/s/opensans/v27/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0C4nY1M2xLER.ttf","metadata":{}},{"id":"Kv__-PW6UJAh9S6lDcg_l","name":"StaticVector","angle":0,"stroke":null,"strokeWidth":0,"left":111.48000000000002,"top":396.73,"width":512,"height":512,"opacity":1,"originX":"left","originY":"top","scaleX":0.45,"scaleY":0.45,"type":"StaticVector","flipX":false,"flipY":false,"skewX":0,"skewY":0,"visible":true,"shadow":null,"src":"https://ik.imagekit.io/scenify/007-hug.svg","colorMap":{"#231f20":"#231f20","#007dc4":"#007dc4","rgb(0,0,0)":"rgb(0,0,0)","#fff":"#fff","#ffc10e":"#ffc10e"},"metadata":{}}],"name":"Untitled design"}],"metadata":{},"preview":""}

      //导入json,一个画�?
      // const design: IScene = { "id": "98PZEYOW0oR-TbmSEQ-MI", "name": "test import", "frame": { "width": 1200, "height": 1200 }, "layers": [{ "id": "background", "name": "Initial Frame", "angle": 0, "stroke": null, "strokeWidth": 0, "left": 0, "top": 0, "width": 1200, "height": 1200, "opacity": 1, "originX": "left", "originY": "top", "scaleX": 1, "scaleY": 1, "type": "Background", "flipX": false, "flipY": false, "skewX": 0, "skewY": 0, "visible": true, "shadow": { "color": "#fcfcfc", "blur": 4, "offsetX": 0, "offsetY": 0, "affectStroke": false, "nonScaling": false }, "fill": "#ffffff", "metadata": {} }, { "id": "9VWsxoB_O8LSAkCIRjNFY", "name": "StaticPath", "angle": 0, "stroke": null, "strokeWidth": 0, "left": 103.25999999999999, "top": 54.72999999999999, "width": 498.84, "height": 436.27, "opacity": 1, "originX": "left", "originY": "top", "scaleX": 0.48, "scaleY": 0.48, "type": "StaticPath", "flipX": false, "flipY": false, "skewX": 0, "skewY": 0, "visible": true, "shadow": null, "preview": "https://ik.imagekit.io/scenify/1635014101144_519480.png", "path": [["M", 497.434, 243.764], ["L", 377.754, 36.403999999999996], ["C", 376.05600000000004, 33.37, 372.90700000000004, 31.432999999999996, 369.434, 31.283999999999995], ["L", 130.71400000000003, 31.283999999999995], ["C", 127.02300000000002, 31.250999999999994, 123.59900000000003, 33.206999999999994, 121.75400000000002, 36.403999999999996], ["L", 1.434000000000026, 244.404], ["C", -0.477999999999974, 247.626, -0.477999999999974, 251.635, 1.434000000000026, 254.857], ["L", 121.75400000000002, 463.07], ["C", 123.65600000000002, 465.803, 126.74500000000002, 467.467, 130.074, 467.55], ["L", 369.434, 467.55], ["C", 372.77200000000005, 467.502, 375.877, 465.83, 377.754, 463.07], ["L", 497.434, 254.21699999999998], ["C", 499.302, 250.983, 499.302, 246.999, 497.434, 243.764], ["z"]], "fill": "#CBCBCB", "metadata": {} }, { "id": "WZLRN4LYlahg798kLogBm", "name": "StaticImage", "angle": 0, "stroke": null, "strokeWidth": 0, "left": 401.28999999999996, "top": 275, "width": 650, "height": 650, "opacity": 1, "originX": "left", "originY": "top", "scaleX": 1, "scaleY": 1, "type": "StaticImage", "flipX": false, "flipY": false, "skewX": 0, "skewY": 0, "visible": true, "shadow": null, "src": "https://images.pexels.com/photos/670741/pexels-photo-670741.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "cropX": 0, "cropY": 0, "metadata": {} }, { "id": "A6rI0zdsoHWc0Jaht2vDG", "name": "StaticText", "angle": 0, "stroke": null, "strokeWidth": 0, "left": 415.79999999999995, "top": 75.13, "width": 577.32, "height": 103.96, "opacity": 1, "originX": "left", "originY": "top", "scaleX": 1, "scaleY": 1, "type": "StaticText", "flipX": false, "flipY": false, "skewX": 0, "skewY": 0, "visible": true, "shadow": null, "charSpacing": 0, "fill": "#333333", "fontFamily": "OpenSans-Regular", "fontSize": 92, "lineHeight": 1.16, "text": "simple text", "textAlign": "center", "fontURL": "https://fonts.gstatic.com/s/opensans/v27/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0C4nY1M2xLER.ttf", "metadata": {} }, { "id": "Kv__-PW6UJAh9S6lDcg_l", "name": "StaticVector", "angle": 0, "stroke": null, "strokeWidth": 0, "left": 111.48000000000002, "top": 396.73, "width": 512, "height": 512, "opacity": 1, "originX": "left", "originY": "top", "scaleX": 0.45, "scaleY": 0.45, "type": "StaticVector", "flipX": false, "flipY": false, "skewX": 0, "skewY": 0, "visible": true, "shadow": null, "src": "https://ik.imagekit.io/scenify/007-hug.svg", "colorMap": { "#231f20": "#231f20", "#007dc4": "#007dc4", "rgb(0,0,0)": "rgb(0,0,0)", "#fff": "#fff", "#ffc10e": "#ffc10e" }, "metadata": {} }], "metadata": {}, "preview": "" }
      // editor.scene.importFromJSON(design);
      // console.log(design);
      const template = { previews: [], "published": true, "id": "N1zgp3tfX77pFGRhVAJne", "type": "GRAPHIC", "name": "Untitled Design", "frame": { "width": 1200, "height": 1200 }, "scenes": [{ "id": "qKDtWwlWgZsUQ6tvRIaWX", "layers": [{ "id": "background", "name": "Initial Frame", "angle": 0, "stroke": null, "strokeWidth": 0, "left": 0, "top": 0, "width": 1200, "height": 1200, "opacity": 1, "originX": "left", "originY": "top", "scaleX": 1, "scaleY": 1, "type": "Background", "flipX": false, "flipY": false, "skewX": 0, "skewY": 0, "visible": true, "shadow": { "color": "#fcfcfc", "blur": 4, "offsetX": 0, "offsetY": 0, "affectStroke": false, "nonScaling": false }, "fill": "#ffffff", "metadata": {} }, { "id": "geF55nXZonGCHE7qz_CC1", "name": "StaticText", "angle": 0, "stroke": null, "strokeWidth": 0, "left": 409.13, "top": 489.81, "width": 420, "height": 103.96, "opacity": 1, "originX": "left", "originY": "top", "scaleX": 1, "scaleY": 1, "type": "StaticText", "flipX": false, "flipY": false, "skewX": 0, "skewY": 0, "visible": true, "shadow": null, "charSpacing": 0, "fill": "#333333", "fontFamily": "OpenSans-Regular", "fontSize": 92, "lineHeight": 1.16, "text": "scene1", "textAlign": "center", "fontURL": "https://fonts.gstatic.com/s/opensans/v27/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0C4nY1M2xLER.ttf", "metadata": {} }], "name": "Untitled design" }, { "id": "9SAW3VwN-Wf47aDgQb3Ml", "layers": [{ "id": "background", "name": "Initial Frame", "angle": 0, "stroke": null, "strokeWidth": 0, "left": 0, "top": 0, "width": 1200, "height": 1200, "opacity": 1, "originX": "left", "originY": "top", "scaleX": 1, "scaleY": 1, "type": "Background", "flipX": false, "flipY": false, "skewX": 0, "skewY": 0, "visible": true, "shadow": { "color": "#fcfcfc", "blur": 4, "offsetX": 0, "offsetY": 0, "affectStroke": false, "nonScaling": false }, "fill": "#ffffff", "metadata": {} }, { "id": "TuUsMXh-7BX2LpdZs3Cq2", "name": "StaticText", "angle": 0, "stroke": null, "strokeWidth": 0, "left": 419.13, "top": 499.81, "width": 420, "height": 103.96, "opacity": 1, "originX": "left", "originY": "top", "scaleX": 1, "scaleY": 1, "type": "StaticText", "flipX": false, "flipY": false, "skewX": 0, "skewY": 0, "visible": true, "shadow": null, "charSpacing": 0, "fill": "#333333", "fontFamily": "OpenSans-Regular", "fontSize": 92, "lineHeight": 1.16, "text": "scene2", "textAlign": "center", "fontURL": "https://fonts.gstatic.com/s/opensans/v27/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0C4nY1M2xLER.ttf" }], "name": "Untitled design" }, { "id": "BlZ2k3NWrDJIOlGleOvnA", "layers": [{ "id": "background", "name": "Initial Frame", "angle": 0, "stroke": null, "strokeWidth": 0, "left": 0, "top": 0, "width": 1200, "height": 1200, "opacity": 1, "originX": "left", "originY": "top", "scaleX": 1, "scaleY": 1, "type": "Background", "flipX": false, "flipY": false, "skewX": 0, "skewY": 0, "visible": true, "shadow": { "color": "#fcfcfc", "blur": 4, "offsetX": 0, "offsetY": 0, "affectStroke": false, "nonScaling": false }, "fill": "#ffffff", "metadata": {} }, { "id": "1y4hHIZFAA12vI13d8Xgj", "name": "StaticText", "angle": 0, "stroke": null, "strokeWidth": 0, "left": 429.13, "top": 509.81, "width": 420, "height": 103.96, "opacity": 1, "originX": "left", "originY": "top", "scaleX": 1, "scaleY": 1, "type": "StaticText", "flipX": false, "flipY": false, "skewX": 0, "skewY": 0, "visible": true, "shadow": null, "charSpacing": 0, "fill": "#333333", "fontFamily": "OpenSans-Regular", "fontSize": 92, "lineHeight": 1.16, "text": "scene3", "textAlign": "center", "fontURL": "https://fonts.gstatic.com/s/opensans/v27/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0C4nY1M2xLER.ttf" }], "name": "Untitled design" }], "metadata": {}, "preview": "" };
      const loadedDesign = loadGraphicTemplate(template);

      console.log("useEffect editor changed init json");
    }

    let watcher = async () => {
      const updatedTemplate = editor.scene.exportToJSON()
      const updatedPreview = (await editor.renderer.render(updatedTemplate)) as string
      setCurrentPreview(updatedPreview)
      console.log("useEffect editor watcher", updatedTemplate.layers);


     

      

    }

    if (editor) {
      editor.on("history:changed", watcher)
    }
    console.log("useEffect editor");
    return () => {
      if (editor) {
        editor.off("history:changed", watcher)
      }
    }


  }, [editor]);

 

  React.useEffect(() => {
    if (editor && scenes && currentScene) {
      console.log("useEffect editor, scenes, currentScene");
      const isCurrentSceneLoaded = scenes.find((s) => s.id === currentScene?.id)
      if (!isCurrentSceneLoaded) {
        setCurrentScene(scenes[0])
      }
    }
  }, [editor, scenes, currentScene])



  //点击画图的预览图
  const changePage = React.useCallback(
    async (page: any) => {
      //setCurrentPreview("")
      if (editor) {

        console.log("changePage",page);
        const updatedTemplate = editor.scene.exportToJSON()
        const updatedPreview = await editor.renderer.render(updatedTemplate)
        console.log("changePage 140");
        const updatedPages = scenes.map((p) => {
          if (p.id === updatedTemplate.id) {
            return { ...updatedTemplate, preview: updatedPreview }
          }
          return p
        }) as any[]
        console.log('changePage updatedPages',updatedPages);
        setScenes(updatedPages)
        setCurrentScene(page)
        console.log("changePage end");
      }
    },
    [editor, scenes, currentScene]
  )

    //增加画布
  const addScene = React.useCallback(async () => {
    setCurrentPreview("")
    const updatedTemplate = editor.scene.exportToJSON()
    const updatedPreview = await editor.renderer.render(updatedTemplate)

    const updatedPages = scenes.map((p) => {
      if (p.id === updatedTemplate.id) {
        return { ...updatedTemplate, preview: updatedPreview }
      }
      return p
    })

    const defaultTemplate = getDefaultTemplate(currentDesign.frame)
    const newPreview = await editor.renderer.render(defaultTemplate)
    const newPage = { ...defaultTemplate, id: nanoid(), preview: newPreview } as any
    const newPages = [...updatedPages, newPage] as any[]
    setScenes(newPages)
    setCurrentScene(newPage)
  }, [scenes, currentDesign])

  const updateCurrentScene = React.useCallback(
    async (design: IScene) => {
      console.log('updateCurrentScene 1');
      console.log(design);
      await editor.scene.importFromJSON(design)
      const updatedPreview = (await editor.renderer.render(design)) as string
      setCurrentPreview(updatedPreview)
      console.log('updateCurrentScene 2');
    },
    [editor, currentScene]
  )

  const getDefaultTemplate = ({ width, height }: IFrame) => {
    return {
      id: nanoid(),
      frame: {
        width:frameWidth,
        height:frameHeight,
      },
      layers: [
        {
          id: "background",
          name: "Initial Frame",
          left: 0,
          top: 0,
          width:frameWidth,
          height:frameHeight,
          type: "Background",
          fill: "#ffffff",
          metadata: {},
        },
      ],
      metadata: {},
    }
  }

  React.useEffect(() => {
    if (editor) {
      if (currentScene) {
        console.log("before updateCurrentScene",currentScene);

        updateCurrentScene(currentScene)
        console.log("after updateCurrentScene");
      } else {
        console.log("before getDefaultTemplate");
        const defaultTemplate = getDefaultTemplate({
          width: 1200,
          height: 1200,
        })
        setCurrentDesign({
          id: nanoid(),
          frame: defaultTemplate.frame,
          metadata: {},
          name: "Untitled Design",
          preview: "",
          scenes: [],
          type: "PRESENTATION",
        })
        editor.scene
          .importFromJSON(defaultTemplate)
          .then(() => {
            const initialDesign = editor.scene.exportToJSON() as any
            editor.renderer.render(initialDesign).then((data) => {
              setCurrentScene({ ...initialDesign, preview: data })
              setScenes([{ ...initialDesign, preview: data }])
            })
          })
          .catch(console.log)
      }
    }
  }, [editor, currentScene])

  //静态文
  const addText = React.useCallback(() => {
    if (editor) {
      editor.objects.add({
        type: "StaticText",
        text: "Hello Layerhub",
        textAlign: "center"
      });
    }
  }, [editor]);

  //静态图
  const addImage = React.useCallback(() => {
    if (editor) {
      editor.objects.add({
        type: "StaticImage",
        src: "https://tstatic.redocn.com/react/images/logo.jpg",
        cropX: 10,
        cropY: 10
      });
    }
  }, [editor]);

  //背景图片，添加上来在最底层
  const addBackgroundImage = React.useCallback(() => {
    if (editor) {
      editor.objects.add({
        type: "BackgroundImage",
        src: "https://tstatic.redocn.com/react/images/logo.jpg",
        cropX: 10,
        cropY: 10
      });
    }
  }, [editor]);


  //没有效果
  const addBackground = React.useCallback(() => {
    if (editor) {
      editor.objects.add({
        type: "Background",
        fill: "#000000"

      });
    }
  }, [editor]);


  //静态矢量图
  const addStaticVector = React.useCallback(() => {
    //需要在nginx里配置一下跨�?
    if (editor) {
      editor.objects.add({
        type: 'StaticVector',
        src: 'https://tstatic.redocn.com/react/images/001-hug.svg'//https://tstatic.redocn.com/react/images/001-hug.svg  https://ik.imagekit.io/scenify/005-date.svg
        //colorMap:
      });
    }

  }, [editor]);

 
  //设计好后，可以存成svg ,数据从里提取
  const addElements = React.useCallback(() => {
    //需要在nginx里配置一下跨�?
    if (editor) {
      const item: any = {
        left: 0,
        top: 0,
        width: 458.41,
        height: 512,
        originX: "left",
        originY: "top",
        scaleX: 0.52,
        scaleY: 0.52,
        type: "StaticPath",
        path: [
          ["M", 410.941406, 189.394531],
          ["L", 295.08593799999994, 174.847656],
          ["C", 304.82031199999994, 151.589844, 316.10156199999994, 114.679688, 316.10156199999994, 68.546875],
          ["C", 316.10156199999994, 42.683594, 307.8007809999999, 23.617188, 291.42968799999994, 11.882812000000001],
          [
            "C",
            280.42968799999994,
            4.000000000000001,
            266.28906199999994,
            1.7763568394002505e-15,
            249.40624999999994,
            1.7763568394002505e-15,
          ],
          ["L", 248.57031199999994, 1.7763568394002505e-15],
          ["L", 247.74218799999994, 0.09375000000000178],
          ["C", 220.00390599999994, 3.1875000000000018, 211.65234399999994, 29.113281, 212.77343799999994, 46.003906],
          ["C", 212.91406199999994, 50.355469, 212.45312499999994, 54.621094, 211.40624999999994, 58.679688],
          ["C", 208.31249999999994, 70.648438, 203.19531199999994, 80.625, 190.83203099999994, 104.730469],
          ["L", 190.25390599999994, 105.851562],
          ["C", 181.99609399999994, 121.976562, 172.50781199999994, 127.769531, 159.37890599999994, 135.789062],
          ["C", 148.19531199999994, 142.621094, 135.51953099999994, 150.359375, 121.84374999999994, 165.320312],
          ["C", 115.65624999999994, 172.074219, 108.53124999999994, 181.949219, 102.20312499999994, 192.539062],
          ["C", 101.05468799999994, 194.070312, 100.08203099999994, 195.800781, 99.26171899999994, 197.746094],
          ["C", 99.16015599999994, 197.945312, 99.05078099999994, 198.125, 98.94531199999994, 198.304688],
          ["C", 98.64453099999994, 198.832031, 98.24218799999994, 199.53125, 97.81640599999994, 200.375],
          ["C", 97.18359399999994, 201.542969, 96.48046899999994, 202.847656, 95.75781199999994, 204.230469],
          ["C", 83.88281199999994, 214.539062, 65.52734399999994, 214.34375, 54.37109399999994, 214.21875],
          ["C", 53.222655999999944, 214.207031, 52.164061999999944, 214.195312, 51.207030999999944, 214.195312],
          ["C", 31.648437999999945, 214.195312, 20.078124999999943, 221.867188, 13.820311999999944, 228.304688],
          ["C", 5.109374999999945, 237.253906, 0.5078119999999444, 249.90625, 0.5078119999999444, 264.890625],
          ["L", 0.49999999999994443, 428.101562],
          ["C", 0.49999999999994443, 438.851562, 1.8671879999999446, 454.375, 13.699218999999944, 465.08203100000003],
          [
            "C",
            24.746093999999943,
            475.08203100000003,
            40.39843799999994,
            476.23828100000003,
            51.207030999999944,
            476.23828100000003,
          ],
          ["L", 86.90624999999994, 476.23828100000003],
          [
            "C",
            95.66796899999994,
            476.23828100000003,
            104.11328099999994,
            480.00000000000006,
            114.81249999999994,
            484.765625,
          ],
          ["C", 120.85546899999994, 487.457031, 127.70703099999994, 490.507812, 135.54687499999994, 493.26171899999997],
          [
            "C",
            172.34765599999994,
            506.01171899999997,
            221.32421899999994,
            511.94921899999997,
            289.67187499999994,
            511.94921899999997,
          ],
          [
            "C",
            302.91796899999997,
            511.94921899999997,
            344.0039059999999,
            511.99999999999994,
            344.02343799999994,
            511.99999999999994,
          ],
          [
            "C",
            358.83984399999997,
            511.99999999999994,
            372.7851559999999,
            506.18359399999997,
            384.34374999999994,
            495.18359399999997,
          ],
          [
            "C",
            390.46874999999994,
            489.363281,
            394.1914059999999,
            482.04296899999997,
            395.71874999999994,
            472.80859399999997,
          ],
          ["C", 396.05468799999994, 470.76562499999994, 396.27734399999997, 466.460938, 396.3007809999999, 464.128906],
          ["C", 396.5351559999999, 458.27734399999997, 395.6757809999999, 452.710938, 393.8320309999999, 447.597656],
          [
            "C",
            405.7031249999999,
            446.25781199999994,
            416.9023439999999,
            441.13281199999994,
            425.4648439999999,
            432.953125,
          ],
          ["C", 435.9687499999999, 422.914062, 441.7539059999999, 408.96875, 441.7539059999999, 393.679688],
          ["C", 441.7539059999999, 382.472656, 438.20312499999994, 371.88671899999997, 431.6289059999999, 363.191406],
          ["C", 435.5117189999999, 361.27734399999997, 439.1914059999999, 358.800781, 442.4726559999999, 355.609375],
          ["C", 450.9804689999999, 347.335938, 455.3789059999999, 335.867188, 455.5585939999999, 321.515625],
          ["C", 456.1054689999999, 307.19921899999997, 451.1210939999999, 294.75, 441.7460939999999, 285.55078100000003],
          ["C", 451.6640619999999, 275.65625, 458.17968799999994, 261.484375, 458.8554689999999, 245.76953100000003],
          [
            "C",
            460.1328119999999,
            216.13281200000003,
            438.6953119999999,
            190.99609400000003,
            410.9414059999999,
            189.39453100000003,
          ],
          ["z"],
          ["M", 410.941406, 189.394531],
        ]


        ,
        fill: "#CBCBCB",
        metadata: {},
        preview: "https://ik.imagekit.io/scenify/1635014340531_452464.png",
        id: "vAE3f8-4M0-2j5PF04cVY",
      };



      /* {
        left: 0,
        top: 0,
        width: 60,
        height: 60,
        originX: "left",
        originY: "top",
        scaleX: 4,
        scaleY: 4,
        type: "StaticPath",
        path: [["M", 60, 0], ["L", 0, 0], ["L", 0, 60], ["L", 60, 60], ["L", 60, 0], ["Z"]],
        fill: "#CBCBCB",
        metadata: {},
        preview: "https://ik.imagekit.io/scenify/1635011325399_603749.png",
        id: "E2mcHFkwGA-MTJcfl3Abs",
      }; */
      editor.objects.add(item);
    }

  }, [editor]);

  //加载对象的颜
  React.useEffect(() => {
    if(activeObject && activeObject.type === 'StaticText' ){
      console.log(activeObject.fontFamily);
      setActiveObjectFontSize(activeObject.fontSize);
    }
    
    if (activeObject && activeObject.type === "StaticVector") {
      const objects = activeObject._objects[0]._objects
      const objectColors = groupBy(objects, "fill")
      vectorPaths.current = objectColors
      setState({ ...state, colors: Object.keys(objectColors), colorMap: activeObject.colorMap })
    }
    if(activeObject && activeObject.type){
      
      console.log("activeObject",activeObject.type,activeObject);
      if(activeObject.type === 'StaticPath'){
        
        (activeObject.fill);
      }

      //这个暂时先不研究，这个是svg 里面有多个颜�?
      if(activeObject.type === 'StaticVector'){
        //console.log(activeObject.fill);
        const objects = activeObject._objects[0]._objects
        //const objectColors = groupBy(objects, "fill")
        //console.log(objectColors);
      }
    }
    
  }, [activeObject])

  //设置图层颜色
  const handleChangeActiveObjectColor  = (color:any) => {
    //console.log("frameWidth=",frameWidth);
    setActiveObjectColor(color);
    editor.objects.update({ fill: color })
  }

  const handleChangeActiveObjectFontSize  = (fontSize:any) => {
    
    setActiveObjectFontSize(fontSize);
    editor.objects.update({ fontSize: fontSize })
    
  }

  const handleChangeActiveObjectStrokeWidth  = (strokeWidth:any) => {
    
    setActiveObjectStrokeWidth(strokeWidth);
    editor.objects.update({ strokeWidth: Number(strokeWidth) })
    
  }

  const handleChangeActiveObjectStroke  = (stroke:any) => {
    
    setActiveObjectStroke(stroke);
    editor.objects.update({ stroke: stroke })
    
  }

  

  //设置图层blur ,应该是模糊
  const handleChangeActiveObjectShadowBlur  = (blur:number) => {
    
    setActiveObjectShadowBlur(Number(blur));
    setActiveObjectShadow({ ...activeObjectShadow, blur:Number(blur) });
       
  }
  const handleChangeActiveObjectShadowColor  = (color:string) => {
    
    setActiveObjectShadowColor(color);
    setActiveObjectShadow({ ...activeObjectShadow, color });
    
  }
  const handleChangeActiveObjectShadowOffsetX  = (offsetX:number) => {
    
    setActiveObjectShadowOffsetX(Number(offsetX));
    setActiveObjectShadow({ ...activeObjectShadow, offsetX:Number(offsetX) });
  }
  const handleChangeActiveObjectShadowOffsetY  = (offsetY:number) => {
    
    setActiveObjectShadowOffsetY(Number(offsetY));
    setActiveObjectShadow({ ...activeObjectShadow, offsetY:Number(offsetY) });
  }
  
  const handleChangeActiveObjectShadowEnabled  = (enabled:number) => {
    
    setActiveObjectShadowEnabled(Number(enabled)===1?true:false);
    setActiveObjectShadow({ ...activeObjectShadow, enabled:Number(enabled)===1?true:false });
    
  }
  

  React.useEffect(() => {
    // console.log("@");
    if (editor) {
      console.log(activeObject.shadow);
      editor.objects.update({shadow:activeObjectShadow})
    }
    console.log("useEffect activeObjectShadow",activeObjectShadow);
  }, [opacity, activeObjectShadow]);

  //设置字体效果
  const handleChangeFontEffect =  (effectid:any) =>{
    if(effectid !==0 && effectid !=="0")
    {
      if(editor){
       console.log(activeObject.strokeWidth);
        const _effect = TEXT_EFFECTS.filter(item=>item.id===effectid)[0].effect;
        //console.log(_effect.shadow);
        setActiveObjectShadow(_effect.shadow);
        setActiveObjectShadowBlur(_effect.shadow.blur);
        setActiveObjectShadowColor(_effect.shadow.color?_effect.shadow.color:'');
        setActiveObjectShadowOffsetX(_effect.shadow.offsetX);
        setActiveObjectShadowOffsetY(_effect.shadow.offsetY);
        setActiveObjectShadowEnabled(_effect.shadow.enabled);
        
        
        setActiveObjectColor(_effect.fill?_effect.fill:'');
        
        //console.log(typeof(_effect.strokeWidth));
        if(_effect.strokeWidth){
          setActiveObjectStrokeWidth(_effect.strokeWidth);
        }

        if(_effect.stroke){
          setActiveObjectStroke(_effect.stroke);
        }
        
        editor.objects.update(_effect)
       // console.log(_effect);
      }
    }
  }

  //设置字体  async
  const handleChangeFont = async (fontid:any) =>{
    //console.log(fontid);
    if(fontid !==0 && fontid !=="0")
    {
      if(editor){
        const _font = fonts.filter(item=>item.id===fontid)[0];
   

        const font = {
          name: _font.name,
          url: _font.url,
        }
        await loadFonts([font])
        //console.log(font.name);
        editor.objects.update({
          fontFamily: font.name,
          fontURL: font.url,
        })
      }
      
    }
    
    
  }
  
  

  //设置透明�?
  const changeOpacity = (event: any) => {
    console.log('event=', event);
    setOpacity(event.target.value)
    // if(editor){
    //   editor.objects.update({opacity:event.target.value/100});
    // }
  }

  React.useEffect(() => {
    // console.log("@");
    if (editor) {
      editor.objects.update({ opacity: opacity / 100 });
    }
    console.log("useEffect opacity activeObject changed");
  }, [opacity, activeObject]);

  //更新尺寸
  const handleChangeSize = () => {
    //console.log("frameWidth=",frameWidth);

    if (editor) {

      editor.frame.resize({ width: parseInt(frameWidth), height: parseInt(frameHeight) });
    }
  }

  const handleChangeBackgroundColor = (color) => {
    //console.log("frameWidth=",frameWidth);
    setBackgroundColor(color);
    if (frame) {
      editor.frame.setBackgroundColor(color);
    }
  }



  //撤销
  const handleUndo = React.useCallback(() => {
    if (editor) {
      editor.history.undo();
    }
  }, [editor]);

  //取消撤销
  const handleRedo = React.useCallback(() => {
    if (editor) {
      editor.history.redo();
    }
  }, [editor]);

  //删除
  const handleDelete = React.useCallback(() => {
    if (editor) {
      editor.objects.remove();
    }
  }, [editor]);

  //复制当前
  const handleClone = React.useCallback(() => {
    if (editor) {
      editor.objects.clone();
    }
  }, [editor]);

  //锁定当前
  const handleLock = React.useCallback(() => {
    if (editor) {
      editor.objects.lock();
    }
  }, [editor]);

  //解除当前图层的锁
  const handleUnlock = React.useCallback(() => {
    if (editor) {
      editor.objects.unlock();
    }
  }, [editor]);



  //重置,重置后不能撤销和不能取消撤销了。从当前开始记录历
  const handleReset = React.useCallback(() => {
    if (editor) {
      console.log('editor.history', editor.history);
      editor.history.reset();
    }
  }, [editor]);




  //StaticGroup，DynamicGroup，DynamicPath，DynamicImage�? 不知道怎么操作，在 react-design-editor  搜不到相关代�?

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
        对画布的操作
        画布尺寸：宽<input onChange={(event) => { setFrameWidth(event.target.value) }} style={{ width: '150px' }} value={frameWidth} type="text" />
        <input onChange={(event) => { setFrameHeight(event.target.value) }} style={{ width: '150px' }} value={frameHeight} type="text" />
        <button onClick={handleChangeSize}>resize</button>

        背景色：<input

          value={backgroundColor}
          onChange={(e) => handleChangeBackgroundColor((e.target as any).value)}
          placeholder="#000000"

        />
          <button onClick={handleUndo}>undo</button>
          <button onClick={handleRedo}>redo</button>
          <button onClick={handleReset}>reset</button>
          <button onClick={addText}>ADD TEXT</button>
          <button onClick={addImage}>ADD IMAGE</button>
          <button onClick={addBackgroundImage}>ADD BackgroundImage</button>
          <button onClick={addBackground}>ADD Background</button>
          <button onClick={addStaticVector}>ADD StaticVector</button>
          {/*  <button onClick={addStaticPath}>ADD StaticPath</button> */}
          <button onClick={addElements}>ADD Elements</button>
      </div>
      <div
        style={{
          height: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        对当前图层的操作:
        <select onChange={(e) => handleChangeFont((e.target as any).value)}>
        <option value={0}>选择字体</option>
        {
          fonts.map((font)=>{
            return (
              <option key={font.id} value={font.id}>{font.name}</option>
            )
          })
        }
        </select> 

        <select onChange={(e) => handleChangeFontEffect((e.target as any).value)}>
        <option value={0}>选择字体效果</option>
        {
          TEXT_EFFECTS.map((fontsEffect)=>{
            return (
              <option key={fontsEffect.id} value={fontsEffect.id}>{fontsEffect.name}</option>
            )
          })
        }
        </select> 
        字体大小:<input value={activeObjectFontSize} onChange={(e) => handleChangeActiveObjectFontSize((e.target as any).value)} placeholder="0" />
        透明度：<input type="text" style={{ width: '50px' }} value={opacity} onChange={changeOpacity} />
         颜色:<input value={activeObjectColor} onChange={(e) => handleChangeActiveObjectColor((e.target as any).value)} placeholder="#000000" /> 
        <button onClick={handleClone}>clone</button>
        <button onClick={handleDelete}>delete</button>
        <button onClick={handleLock}>lock</button>
        <button onClick={handleUnlock}>unlock</button>
        <button onClick={()=>{editor.objects.bringForward()}}>上移</button>
        <button onClick={()=>{editor.objects.sendBackwards()}}>下移</button>
        
      </div>
      <div
        style={{
          height: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        效果参数：
        stroke:<input value={activeObjectStroke} onChange={(e) => handleChangeActiveObjectStroke((e.target as any).value)} placeholder="#000000 rgba(0,0,0,0.45)" />
        strokeWidth:<input value={activeObjectStrokeWidth} onChange={(e) => handleChangeActiveObjectStrokeWidth((e.target as any).value)} placeholder="0" />
      </div>
      
      <div
        style={{
          height: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Shadow效果参数：
        blur:<input value={activeObjectShadowBlur} onChange={(e) => handleChangeActiveObjectShadowBlur((e.target as any).value)} placeholder="0" /> 
        color:<input value={activeObjectShadowColor} onChange={(e) => handleChangeActiveObjectShadowColor((e.target as any).value)} placeholder="#000000" /> 
        offsetX:<input value={activeObjectShadowOffsetX} onChange={(e) => handleChangeActiveObjectShadowOffsetX((e.target as any).value)} placeholder="0" /> 
        offsetY:<input value={activeObjectShadowOffsetY} onChange={(e) => handleChangeActiveObjectShadowOffsetY((e.target as any).value)} placeholder="0" />
        Enabled:<select onChange={(e) => handleChangeActiveObjectShadowEnabled((e.target as any).value)}>
      
        <option key={1} value={1}>true</option>
        <option  key={0} value={0}>false</option>
        </select> 

      
      </div>
      {/* 画布缩略�? */}
      <div style={{ height: "102px", margin: "10px", display: "flex" }}>
        {scenes.map((page, index) => (
          <div key={index} onClick={() => changePage(page)} style={page.id === currentScene.id ? { "width": "100px", "height": "100px", border: "solid 1px" } : { "width": "100px", "height": "100px" }}  >
            <img style={{ "width": "100px", "height": "100px" }}  src={page.id === currentScene.id ? currentPreview : page.preview} />
          </div>
        ))}
        <div onClick={addScene} style={{"width": "100px", "height": "100px",textAlign:'center',verticalAlign:'middle'}}>增加画布</div>
      </div>
      <div style={{ flex: 1, display: "flex" }}>
        <Canvas />
      </div>

    </div>
  );
}

export default App;