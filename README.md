# react-ts
学习react-ts
ui组件 baseui 
https://baseweb.design/

#编辑器sdk
@layerhub-io/react

#样式组件
styletron-engine-atomic
styletron-react



#layerhub sdk 的api
const editor = useEditor()  //编辑对象
editor.objects.delete ,lock 等操作都是对当前图层进行操作
editor.history  //历史记录操作


#react-editor 的hook 后 常量
const editorType = useEditorType() //编辑类型  NONE，PRESENTATION，VIDEO，GRAPHIC   这个是react-editor 的hook,不是layerhub sdk 的api


左侧操作按钮常量配置
/src/constants/app-options  Templates,Customize ....

左侧Elements 和 Graphics 原理实际上一样的，前者是存path
实际上我觉得存在svg 和 Graphics 一样使用更方便