import { createContext, useContext, useState, useRef } from 'react'
import { CursorData, CursorProps, CursorVariant } from './types'
import useMouse from '@react-hook/mouse-position'

const CursorContext = createContext({} as CursorData)

export const CursorProvider: React.FC<CursorProps> = ({ children }) => {
  const [cursorVariant, setCursorVariant] = useState<CursorVariant>('default')
  const [cursorText, setCursorText] = useState<null | string>(null)
  const cursorRef = useRef(null)

  const mouse = useMouse(cursorRef, {
    enterDelay: 100,
    leaveDelay: 100
  })

  let mouseXPosition = 0
  let mouseYPosition = 0

  if (mouse.clientX) {
    mouseXPosition = mouse.clientX
  }

  if (mouse.clientY) {
    mouseYPosition = mouse.clientY
  }

  const variants = {
    default: {
      height: 20,
      width: 20,
      x: mouseXPosition - 10,
      y: mouseYPosition - 10,
      backgroundColor: '#EAEBEB',
      mixBlendMode: 'exclusion'
    },
    sm: {
      height: 40,
      width: 40,
      x: mouseXPosition - 20,
      y: mouseYPosition - 20,
      backgroundColor: '#EAEBEB',
      mixBlendMode: 'exclusion'
    },
    md: {
      height: 80,
      width: 80,
      x: mouseXPosition - 40,
      y: mouseYPosition - 40,
      backgroundColor: '#EAEBEB',
      mixBlendMode: 'exclusion'
    },
    lg: {
      height: 150,
      width: 150,
      x: mouseXPosition - 75,
      y: mouseYPosition - 75,
      backgroundColor: '#EAEBEB',
      mixBlendMode: 'exclusion'
    },
  }

  return (
    <CursorContext.Provider value={{
      cursorVariant,
      setCursorVariant,
      variants,
      cursorRef,
      cursorText,
      setCursorText
    }}>
      {children}
    </CursorContext.Provider>
  )
}

export const useCursor = () => useContext(CursorContext)
