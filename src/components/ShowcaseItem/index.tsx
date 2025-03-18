import { Dispatch, SetStateAction, useCallback } from 'react'
import { useCursor } from '@/contexts'
import Image from 'next/image'
import { tv } from 'tailwind-variants'
import { AnimatedText } from '..'

const showcaseItemStyles = tv({
  base: 'animation-panel w-screen min-h-screen h-min z-[289]',
  defaultVariants: {
    type: 'tlou'
  },
  slots: {
    content: 'grid grid-cols-1 lg:grid-cols-12 grid-rows-2 lg:grid-rows-1 gap-8 container mx-auto h-screen items-center px-6',
    contentDescription: 'col-span-1 lg:col-span-4 row-start-2 self-start lg:row-start-1 lg:self-auto',
    contentImage: 'col-span-1 row-span-1 row-start-1 lg:row-start-1 lg:col-span-8 self-end h-full w-full max-h-96 lg:max-h-full aspect-w-16 aspect-h-9 relative [filter: drop-shadow(0 12px 30px rgba(0,0,0,0.15))]',
    button: 'block bg-gray-900 text-white w-full md:max-w-sm h-20 uppercase tracking-wide font-medium text-4xl mt-8 hover:bg-primary-600 transition-all hover:shadow-lg',
    h1: 'text-[90px] whitespace-pre lg:text-[120px] font-semibold font-roboto uppercase text-gray-900 leading-none'
  },
  variants: {
    type: {
      tlou: {
        base: 'bg-showcase-tlou pt-16 pb-32 md:pt-0 md:pt-0',
        button: 'text-showcase-tlou'
      },
      pokedex: {
        base: 'bg-showcase-pokedex pt-16 pb-12 md:pt-0 md:pt-0',
        button: 'text-showcase-pokedex'
      },
      nooven: {
        base: 'bg-showcase-nooven pt-16 pb-12 md:pt-0 md:pt-0',
        button: 'text-showcase-nooven'
      },
      talklink: {
        base: 'bg-showcase-talklink pt-16 pb-12 md:pt-0 md:pt-0',
        button: 'text-showcase-talklink'
      },
      marolla: {
        base: 'bg-gray-100 pt-16 pb-18 md:pt-0 md:pt-0',
        button: 'text-gray-100'
      },
    }
  }
})

export type ProjectTypes = 'tlou' | 'pokedex' | 'nooven' | 'talklink' | 'marolla'

export type ShowcaseItemProps = {
  title: JSX.Element | string,
  originalTitle: string,
  imageSrc: string,
  animatedText: string[]
  type: ProjectTypes
}

type ShowcaseItemProps2 = {
  item: ShowcaseItemProps
  setIsVisible: Dispatch<SetStateAction<boolean>>
  setSelectProjectType: Dispatch<SetStateAction<ProjectTypes>>
}

const { button, base, content, h1, contentDescription, contentImage } = showcaseItemStyles()

export const ShowcaseItem: React.FC<ShowcaseItemProps2> = ({ item, setIsVisible, setSelectProjectType }) => {
  const { type, animatedText, title, imageSrc } = item

  const { setCursorVariant } = useCursor()

  const onOpenModal = useCallback(() => {
    setSelectProjectType(type as any)
    setIsVisible(true)
  }, [setSelectProjectType, type, setIsVisible])

  return (
    <section className={base({ type })}>
      <div className={content()}>

        <div className={contentDescription()}>
          {/* <h1 className={h1({ className: 'inline-block lg:hidden' })}>{originalTitle}</h1> */}
          <h1>
            <AnimatedText
              onMouseLeave={() => setCursorVariant('default')}
              onMouseEnter={() => setCursorVariant('md')}
              text={animatedText}
              className={h1()}
              animation={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } }
              }}
            />
          </h1>
          <button 
            type='button' 
            onMouseLeave={() => setCursorVariant('default')} 
            onMouseEnter={() => setCursorVariant('lg')} 
            onClick={() => onOpenModal()} 
            className={button({ type })}
          >
            Detalhes
          </button> 
        </div>
        <div className={contentImage()}>
          <Image onMouseLeave={() => setCursorVariant('default')} onMouseEnter={() => setCursorVariant('md')} className='object-cover lg:object-contain' fill src={imageSrc} alt={`Imagem representando o projeto ${title}`} />
        </div>
      </div>
    </section>
  )
}
