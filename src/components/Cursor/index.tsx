/* eslint-disable */
'use client';
import { useRef, useEffect } from 'react';
import { tv } from 'tailwind-variants';

const cursorStyle = tv({
  base: 'z-40 rounded-full w-20 h-20 bg-gray-100 mix-blend-exclusion top-0 left-0 pointer-events-none overflow-hidden fixed',
  slots: {
    a: ''
  },
})

type CursorProps = {
  className?: any
}

const { base } = cursorStyle()

export const Cursor: React.FC<CursorProps> = ({ className }) => {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.addEventListener('mousemove', (event: any) => {

      console.log(event)
      const { clientX, clientY, toElement } = event
      if(!toElement?.className?.includes('animation-panel')) {
        if (cursorRef.current) {
          const mouseX = clientX - (cursorRef?.current.clientWidth || 0) / 2
          const mouseY = clientY - cursorRef?.current.clientHeight / 2
          cursorRef.current.style.display = 'block'
          cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
        }
      } else {
        if(cursorRef.current) {
          cursorRef.current.style.display = 'none'
        }
      }
    })
  }, [])
  
  return (
    <div ref={cursorRef} className={base({ className })}></div>
  );
};
