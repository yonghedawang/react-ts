import React from 'react'
import { Canvas,useEditor  } from '@layerhub-io/react'

function Sidebar() {
  const editor = useEditor()

  const addObject = () => {
    if (editor) {
      editor.objects.add(options)
    }
  }
  return <Box></Box>
}

const  Provider =  function ({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ height: '600px', width: '600px', display: 'flex' }}>
      <Canvas />
    </div>
  )
}

export default Provider