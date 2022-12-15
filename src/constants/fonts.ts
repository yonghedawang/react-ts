export const editorFonts = [
  {
    id:"1",
    name: "Nunito",
    url: "https://fonts.gstatic.com/s/nunito/v20/XRXI3I6Li01BKofiOc5wtlZ2di8HDOUhRTM9jo7eTWk.ttf",
    options: { style: "normal", weight: 900 },
  },
  {
    id:"2",
    name: "Uber Move Text",
    url: "https://d3q7mfli5umxdg.cloudfront.net/UberMoveTextRegular.otf",
    options: { style: "normal", weight: 400 },
  },
  {
    id:"3",
    name: "Uber Move Text",
    url: "https://d3q7mfli5umxdg.cloudfront.net/UberMoveTextMedium.otf",
    options: { style: "normal", weight: 500 },
  },
  {
    id:"4",
    name: "Uber Move Text",
    url: "https://d3q7mfli5umxdg.cloudfront.net/UberMoveTextBold.otf",
    options: { style: "normal", weight: 700 },
  },
  {
    id:"5",
    name: "芫荽",
    url: "https://tstatic.redocn.com/react/fonts/Iansui.ttf",
    options: { style: "normal", weight: 700 },
  },
  {
    id:"6",
    name: "花中",
    url: "https://tstatic.redocn.com/react/fonts/huazhong.ttf",
    options: { style: "normal", weight: 700 },
  },
  {
    id:"7",
    name: "无界",
    url: "https://tstatic.redocn.com/react/fonts/wujie.otf",
    options: { style: "normal", weight: 700 },
  },
 
]

export const fontStyleLabels = {
  "100": {
    id: 0,
    label: "Thin",
  },
  "100italic": {
    id: 1,
    label: "Thin Italic",
  },
  "200": {
    id: 2,
    label: "ExtraLight",
  },
  "200italic": {
    id: 3,
    label: "ExtraLight Italic",
  },
  "300": {
    id: 4,
    label: "Light",
  },
  "300italic": {
    id: 5,
    label: "Light Italic",
  },
  regular: {
    id: 6,
    label: "Regular",
  },
  italic: {
    id: 7,
    label: "Regular Italic",
  },
  "500": {
    id: 8,
    label: "Medium",
  },
  "500italic": {
    id: 9,
    label: "Medium Italic",
  },
  "600": {
    id: 10,
    label: "SemiBold",
  },
  "600italic": {
    id: 11,
    label: "SemiBold Italic",
  },
  "700": {
    id: 12,
    label: "Bold",
  },
  "700italic": {
    id: 13,
    label: "Bold Italic",
  },
  "800": {
    id: 14,
    label: "ExtraBold",
  },
  "800italic": {
    id: 15,
    label: "ExtraBold Italic",
  },
  "900": {
    id: 16,
    label: "Black",
  },
  "900italic": {
    id: 17,
    label: "Black Italic",
  },
}




export const TEXT_EFFECTS = [
  {
    id: '1',
    name: "None",
    preview: "https://i.ibb.co/Wyx2Ftf/none.webp",
    effect: {
      fill: "#333333",
      strokeWidth: 0,
      shadow: {
        blur: 2,
        color: "#afafaf",
        offsetX: 10,
        offsetY: 10,
        enabled: false,
      },
    }
  },
  {
    id: '2',
    name: "Shadow",
    preview: "https://i.ibb.co/HBQc95J/shadow.webp",
    effect: {
      fill: "#333333",
      shadow: {
        blur: 2,
        color: "#afafaf",
        offsetX: 10,
        offsetY: 10,
        enabled: true,
      },
    }
  },
  {
    id: '3',
    name: "Lift",
    preview: "https://i.ibb.co/M7zpk5f/lift.webp",
    effect: {
      fill: "#333333",
      shadow: {
        blur: 25,
        color: "rgba(0,0,0,0.45)",
        offsetX: 0,
        offsetY: 0,
        enabled: true,
      },
    }
  },
  {
    id: '4',
    name: "Hollow",
    preview: "https://i.ibb.co/vhjCd4w/hollow.webp",
    effect: {
      stroke: "#000000",
      fill: null,
      strokeWidth: 2,
      shadow: {
        blur: 25,
        color: "rgba(0,0,0,0.45)",
        offsetX: 0,
        offsetY: 0,
        enabled: false,
      },
    }
  },
  {
    id: '5',
    name: "Splice",
    preview: "https://i.ibb.co/B2JPTfq/splice.webp",
    effect: {
      stroke: "#000000",
      fill: null,
      strokeWidth: 2,
      shadow: {
        blur: 0,
        color: "#afafaf",
        offsetX: 10,
        offsetY: 10,
        enabled: true,
      },
    }
  },
  {
    id: '6',
    name: "Neon",
    preview: "https://i.ibb.co/fHdD2mx/neon.webp",
    effect: {
      stroke: "#e84393",
      fill: "#fd79a8",
      strokeWidth: 2,
      shadow: {
        blur: 25,
        color: "#fd79a8",
        offsetX: 0,
        offsetY: 0,
        enabled: true,
      },
    }
  },
  {
    id: '7',
    name: "Test",
    preview: "https://i.ibb.co/fHdD2mx/neon.webp",
    effect: {
      stroke: "#000000",
      fill: "#fd79af",
      strokeWidth: 1,
      shadow: {
        blur: 0,
        color: "#fd79af",
        offsetX: 50,
        offsetY: 50,
        enabled: true,
      },
    }
  },
  {
    id: '8',
    name: "miaobian",
    preview: "https://i.ibb.co/B2JPTfq/splice.webp",
    effect: {
      stroke: "#0000FF",
      fill: null,
      strokeWidth: 5,
      shadow: {
        blur: 1,
        color: null,
        offsetX: 0,
        offsetY: 0,
        enabled: true,
      },
    }
  }

  ,
  {
    id: '9',
    name: "miaobian2",
    preview: "https://i.ibb.co/B2JPTfq/splice.webp",
    effect: {
      stroke: "#0000FF",
      fill: "#FF0000",
      strokeWidth: 15,
      shadow: {
        blur: 1,
        color: null,
        offsetX: 0,
        offsetY: 0,
        enabled: true,
      },
    }
  }
  
]