import { useCursor } from '@/contexts'
import Image from 'next/image'
import { tv, type VariantProps } from 'tailwind-variants'

const showcaseItemStyles = tv({
  base: 'animation-panel w-screen min-h-screen h-full',
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
        base: 'bg-showcase-tlou',
        button: 'text-showcase-tlou'
      },
      pokedex: {
        base: 'bg-showcase-pokedex',
        button: 'text-showcase-pokedex'
      },
      nooven: {
        base: 'bg-showcase-nooven',
        button: 'text-showcase-nooven'
      },
      talklink: {
        base: 'bg-showcase-talklink',
        button: 'text-showcase-talklink'
      },
      marolla: {
        base: 'bg-gray-100',
        button: 'text-gray-100'
      },
    }
  }
})

type ContainerCardVariants = VariantProps<typeof showcaseItemStyles>

export interface ShowcaseItemProps extends ContainerCardVariants {
  title: JSX.Element | string,
  originalTitle: string,
  imageSrc: string,
}

const { button, base, content, h1, contentDescription, contentImage } = showcaseItemStyles()

export const ShowcaseItem: React.FC<ShowcaseItemProps> = ({ type, title, imageSrc, originalTitle }) => {

  const { setCursorVariant } = useCursor()

  return (
    <section className={base({ type })}>
      <div className={content()}>

        <div className={contentDescription()}>
          <h1 className={h1({ className: 'inline-block lg:hidden' })}>{originalTitle}</h1>
          <h1 onMouseLeave={() => setCursorVariant('default')} onMouseEnter={() => setCursorVariant('md')} className={h1({ className: 'hidden lg:inline-block' })}>{title}</h1>
          <button onMouseLeave={() => setCursorVariant('default')} onMouseEnter={() => setCursorVariant('lg')} onClick={() => console.log(title)} className={button({ type })}>Visualizar</button> 
        </div>
        <div className={contentImage()}>
          <Image onMouseLeave={() => setCursorVariant('default')} onMouseEnter={() => setCursorVariant('md')} className='object-cover lg:object-contain' fill src={imageSrc} alt={`Imagem representando o projeto ${title}`} />
        </div>
      </div>
    </section>
  )
}
