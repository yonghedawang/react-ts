import React from "react";
import { Canvas, useEditor, useActiveObject,useFrame } from "@layerhub-io/react";

function App() {
  const editor = useEditor();
  const frame = useFrame()
  const activeObject = useActiveObject() as any
  const [opacity, setOpacity] = React.useState(30)
  const [frameWidth, setFrameWidth] = React.useState(1000)
  const [frameHeight, setFrameHeight] = React.useState(1000)

  //第一次加载
  React.useEffect(() => {
    if(frame){
      console.log("frame=>",frame);
      setFrameWidth(frame.width)
      setFrameHeight(frame.height)
    }
    

  }, [editor]);

  //静态文字
  const addText = React.useCallback(() => {
    if (editor) {
      editor.objects.add({
        type: "StaticText",
        text: "Hello Layerhub",
        textAlign: "center"
      });
    }
  }, [editor]);

  //静态图片
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
    //需要在nginx里配置一下跨域
    if (editor) {
      editor.objects.add({
        type: 'StaticVector',
        src: 'https://tstatic.redocn.com/react/images/001-hug.svg'//https://tstatic.redocn.com/react/images/001-hug.svg  https://ik.imagekit.io/scenify/005-date.svg
        //colorMap:
      });
    }

  }, [editor]);

  /*   //暂时没搞明白是什么
    const addStaticPath = React.useCallback(()=>{
      //需要在nginx里配置一下跨域
      if(editor){
        editor.objects.add({
          type:'StaticPath',
          fill:'#000000',//https://tstatic.redocn.com/react/images/001-hug.svg  https://ik.imagekit.io/scenify/005-date.svg
          //path:[[ 60, 0]]
        });
      }
  
    },[editor]); */

  /* 
  
   [ 
          ["M",0,129],
          ["L",125,129],
          ["L",125,0],
            ["L",0,0],
              ["L",0,129],
                ["Z"],
                ]
  
  */
  //设计好后，可以存成svg ,数据从里提取
  const addElements = React.useCallback(() => {
    //需要在nginx里配置一下跨域
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

  //设置透明度
  const changeOpacity = (event: any) => {
    console.log('event=', event);
    setOpacity( event.target.value )
    // if(editor){
    //   editor.objects.update({opacity:event.target.value/100});
    // }
  }

  React.useEffect(() => {
    console.log("@");
    if (editor) {
      editor.objects.update({ opacity: opacity / 100 });
    }

  }, [opacity, activeObject]);

  const handleChangeSize = () => {
    //console.log("frameWidth=",frameWidth);

    if (editor) {
      
      editor.frame.resize({width:parseInt(frameWidth),height:parseInt(frameHeight)});
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

  //复制当前层
  const handleClone = React.useCallback(() => {
    if (editor) {
      editor.objects.clone();
    }
  }, [editor]);

  //锁定当前层
  const handleLock = React.useCallback(() => {
    if (editor) {
      editor.objects.lock();
    }
  }, [editor]);

  //解除当前图层的锁定
  const handlelock = React.useCallback(() => {
    if (editor) {
      editor.objects.unlock();
    }
  }, [editor]);



  //重置,重置后不能撤销和不能取消撤销了。从当前开始记录历史
  const handleReset = React.useCallback(() => {
    if (editor) {
      console.log('editor.history', editor.history);
      editor.history.reset();
    }
  }, [editor]);

  //更新尺寸
  // const applyResize = () => {

  //   if (editor) {
  //     editor.frame.resize({
  //       width: parseInt(width),
  //       height: parseInt(height),
  //     })

  //   }

  // }


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
        画布尺寸：宽<input onChange={(event) => { setFrameWidth(event.target.value) }} style={{ width: '150px' }} value={frameWidth} type="text" />
        高<input onChange={(event) => { setFrameHeight(  event.target.value ) }} style={{ width: '150px' }} value={frameHeight} type="text" />
        <button onClick={handleChangeSize}>resize</button>
      </div>
      <div
        style={{
          height: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        透明度：<input type="text" style={{ width: '50px' }} value={opacity} onChange={changeOpacity} />
        <button onClick={handleClone}>clone</button>
        <button onClick={handleDelete}>delete</button>
        <button onClick={handleLock}>lock</button>
        <button onClick={handlelock}>unlock</button>
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
      <div style={{ flex: 1, display: "flex" }}>
        <Canvas />
      </div>
    </div>
  );
}

export default App;