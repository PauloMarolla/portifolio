import { Dispatch, ReactNode, SetStateAction, MutableRefObject } from 'react'

export type CursorVariant = 'default' | 'sm' | 'md' | 'lg'

export type CursorData = {
  cursorVariant: CursorVariant
  setCursorVariant: Dispatch<SetStateAction<CursorVariant>>
  variants: any
  cursorRef: MutableRefObject<null>
  cursorText: string | null
  setCursorText: Dispatch<SetStateAction<string | null>>
}

export type CursorProps = {
  children: ReactNode
}
