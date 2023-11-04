import { Dispatch, ReactNode, SetStateAction, MutableRefObject } from 'react'

export type CursorVariant = 'default' | 'hover'

export type CursorData = {
  cursorVariant: CursorVariant
  setCursorVariant: Dispatch<SetStateAction<CursorVariant>>
  variants: any
  cursorRef: MutableRefObject<null>
}

export type CursorProps = {
  children: ReactNode
}
