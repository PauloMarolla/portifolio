import { tv, type VariantProps } from 'tailwind-variants'

const container = tv({
  base: 'animation-panel w-screen h-screen',
  defaultVariants: {
    type: 'tlou'
  },
  slots: {
    button: 'bg-primary-600 text-white'
  },
  variants: {
    type: {
      tlou: 'bg-blue-100',
      pokedex: 'bg-blue-300',
      nooven: 'bg-red-100',
      talklink: 'bg-red-300',
      marolla: 'bg-red-600',
    }
  }
})

type ContainerCardVariants = VariantProps<typeof container>

export interface ShowcaseItemProps extends ContainerCardVariants {
  title: JSX.Element,
  imageSrc: string,
}

const { button, base } = container()

export const ShowcaseItem: React.FC<ShowcaseItemProps> = ({ type, title }) => {
  return (
    <section className={base({ type })}>
      <div>

        <div>
          <h1>{title}</h1>
          <button className={button()}>Visualizar</button> 
        </div>
        <div>

        </div>
      </div>
    </section>
  )
}
