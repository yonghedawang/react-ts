//import { useStyletron, styled } from "baseui"
import { BASE_ITEMS, VIDEO_PANEL_ITEMS } from "../../../../constants/app-options"
import useAppContext from "../../../../hooks/useAppContext"
import Icons from "../../../../components/Icons"
import { useTranslation } from "react-i18next"
import useSetIsSidebarOpen from "../../../../hooks/useSetIsSidebarOpen"
import useEditorType from "../../../../hooks/useEditorType"
import Scrollable from "../../../../components/Scrollable"
//import { Block } from "baseui/block"

const Container = styled("div", (props) => ({
  width: "80px",
  backgroundColor: props.$theme.colors.primary100,
  display: "flex",
}))

const PanelsList = () => {
 
  const { activePanel } = useAppContext()
  const { t } = useTranslation("editor")
  const editorType = useEditorType()
  const PANEL_ITEMS = editorType === "VIDEO" ? VIDEO_PANEL_ITEMS : BASE_ITEMS
  return (
    <Container>
      <Scrollable autoHide={true}>
        {PANEL_ITEMS.map((panelListItem) => (
          <PanelListItem
            label={t(`panels.panelsList.${panelListItem.id}`)}
            name={panelListItem.name}
            key={panelListItem.name}
            icon={panelListItem.name}
            activePanel={activePanel}
          />
        ))}
      </Scrollable>
    </Container>
  )
}

const PanelListItem = ({ label, icon, activePanel, name }: any) => {
  
  const { setActivePanel } = useAppContext()
  const setIsSidebarOpen = useSetIsSidebarOpen() //中间“列表栏”显�?

  // @ts-ignore
  const Icon = Icons[icon]
  return (
    <div
      id="EditorPanelList"
      onClick={() => {
        setIsSidebarOpen(true)
        setActivePanel(name)
      }}
      
    >
      <Icon size={24} />
      <div>{label}</div>
    </div>
  )
}

export default PanelsList
