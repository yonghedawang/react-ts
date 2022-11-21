import React from "react"
import useAppContext from "~/hooks/useAppContext"
import panelItems from "./panelItems"
import useIsSidebarOpen from "~/hooks/useIsSidebarOpen"
import { Block } from "baseui/block"
/* 中间列表栏，点击最左侧，内容在这里展示 */
console.log("/src/views/DesignEditor/components/Panerls/PanelItem file start");
interface State {
  panel: string
}
const PanelsList = () => {
  const [state, setState] = React.useState<State>({ panel: "Text" })
  const isSidebarOpen = useIsSidebarOpen()
  const { activePanel, activeSubMenu } = useAppContext()

  React.useEffect(() => {
    setState({ panel: activePanel })
  }, [activePanel])

  React.useEffect(() => {
    if (activeSubMenu) {
      setState({ panel: activeSubMenu })
    } else {
      setState({ panel: activePanel })
    }
  }, [activeSubMenu])
  
  // @ts-ignore
  const Component = panelItems[state.panel]
  console.log("/src/views/DesignEditor/components/Panerls/PanelItem PanelsList component ");
  console.log("panel=",state.panel);
  return (
    <Block
      id="EditorPanelItem"
      $style={{
        background: "#ffffff",
        width: isSidebarOpen ? "306px" : 0,
        flex: "none",
        borderRight: "1px solid #d7d8e3",
        display: "flex",
        transition: "ease width 0.1s",
        overflow: "hidden",
      }}
    >
      {Component && <Component />}
    </Block>
  )
}

export default PanelsList
console.log("/src/views/DesignEditor/components/Panerls/PanelItem file start");