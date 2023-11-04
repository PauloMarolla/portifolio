import { createContext, useContext, useState, useRef } from 'react'
import { CursorData, CursorProps, CursorVariant } from './types'
import useMouse from '@react-hook/mouse-position'

const CursorContext = createContext({} as CursorData)

export const CursorProvider: React.FC<CursorProps> = ({ children }) => {
  const [cursorVariant, setCursorVariant] = useState<CursorVariant>('default')
  const cursorRef = useRef(null)

  const mouse = useMouse(cursorRef, {
    enterDelay: 200,
    leaveDelay: 200
  })

  let mouseXPosition = 0
  let mouseYPosition = 0

  if (mouse.x) {
    mouseXPosition = mouse.clientX as number
  }

  if (mouse.y) {
    mouseYPosition = mouse.clientY as number
  }

  const variants = {
    default: {
      x: mouseXPosition - 16,
      y: mouseYPosition - 16,
    },
    hover: {
      height: 150,
      width: 150,
      x: mouseXPosition - 75,
      y: mouseYPosition - 75,
      backgroundColor: 'yellow',
      mixBlendMode: 'difference'
    }
  }

  return (
    <CursorContext.Provider value={{
      cursorVariant,
      setCursorVariant,
      variants,
      cursorRef
    }}>
      {children}
    </CursorContext.Provider>
  )
}

export const useCursor = () => useContext(CursorContext)
