import { tv, type VariantProps } from 'tailwind-variants'

const containerCard = tv({
  base: 'min-w-screen min-h-screen w-full h-full animation-panel',
  variants: {
    type: {
      tlou: '',
      pokedex: '',
      nooven: '',
      talklink: '',
      marolla: '',
    }
  }
})

type ContainerCardVariants = VariantProps<typeof containerCard>

interface ShowcaseItemProps extends ContainerCardVariants {
  title: JSX.Element,
  imageSrc: string,
}

export const ShowcaseItem: React.FC<ShowcaseItemProps> = ({ imageSrc, title, type }) => {
  return (
    <section className={containerCard({ type })}>
      
    </section>
  )
}
