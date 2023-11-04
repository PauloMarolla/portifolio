'use client'

import { CursorProvider } from '@/contexts/cursor'

export default function Template({ children }: {
  children: React.ReactNode
}) {

  return (
    <CursorProvider>
      {children}
    </CursorProvider>
  )
}
