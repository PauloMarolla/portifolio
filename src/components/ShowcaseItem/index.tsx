import Image from 'next/image'
import { tv, type VariantProps } from 'tailwind-variants'

const container = tv({
  base: 'animation-panel w-screen h-screen',
  defaultVariants: {
    type: 'tlou'
  },
  slots: {
    button: 'bg-gray-900 text-white w-full max-w-sm h-20 uppercase tracking-wide font-medium text-4xl mt-8',
    content: 'grid grid-cols-12 gap-4 container mx-auto h-screen items-center',
    h1: 'text-[120px] font-semibold font-roboto uppercase text-gray-900 leading-none'
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

type ContainerCardVariants = VariantProps<typeof container>

export interface ShowcaseItemProps extends ContainerCardVariants {
  title: JSX.Element,
  imageSrc: string,
}

const { button, base, content, h1 } = container()

export const ShowcaseItem: React.FC<ShowcaseItemProps> = ({ type, title, imageSrc }) => {
  return (
    <section className={base({ type })}>
      <div className={content()}>

        <div className='col-span-4'>
          <h1 className={h1()}>{title}</h1>
          <button className={button({ type })}>Visualizar</button> 
        </div>
        <div className='col-span-8 h-full w-full aspect-w-16 aspect-h-9 relative'>
          <Image fill objectFit='contain' src={imageSrc} alt={`Imagem representando o projeto ${title}`} />
        </div>
      </div>
    </section>
  )
}
