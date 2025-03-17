import { Dispatch, SetStateAction } from 'react'
import { tv } from 'tailwind-variants'
import { ProjectTypes } from '@/components/ShowcaseItem'
import { useCursor } from '@/contexts'

type ModalShowcaseProps = {
  isVisible: boolean
  setIsVisible: Dispatch<SetStateAction<boolean>>
  selectProjectType: ProjectTypes
}

type OperationType = 'Desenvolvedor' | 'Designer'

type ProjectRenderProps = {
  title: string
  description: JSX.Element
  skills: string[]
  operation: OperationType[]
  link?: string
  buttons?: {
    type?: OperationType
    text: string
    link: string
  }[]
}

export const ModalShowcase: React.FC<ModalShowcaseProps> = ({ isVisible, setIsVisible, selectProjectType }) => {
  const { setCursorVariant } = useCursor()

  if (typeof window !== 'undefined') {
    document.onkeydown = function (evt) {
      if (evt.keyCode == 27) {
        setIsVisible(false)
      }
    }
  }

  const projects: { [x in ProjectTypes]: ProjectRenderProps } = {
    marolla: {
      title: 'Marolla',
      description: <>
        <p className='font-roboto'>
          Eu precisava de um portfólio novo, e queria algo que fosse único e que mostrasse minhas habilidades de desenvolvimento e design. Então, decidi fazer um portfólio interativo e animado, que fosse diferente de tudo que já tinha feito antes. O projeto foi feito com NextJS, TailwindCSS & GSAP.
        </p>
        <p className='font-roboto'>
          Foi uma evolução muito grande para mim, pois nunca tinha feito algo do tipo antes. Aprendi muito sobre animações e transições de página, e como elas podem ser importantes para a experiência do usuário e dá uma dinâmica muito única para a página.
        </p>
      </>,
      skills: ['NextJS', 'TypeScript', 'Figma', 'TailwindCSS', 'Grid', 'Tailwind Variants', 'GSAP', 'Framer Motion', 'UI Design', 'UX Design'],
      operation: ['Desenvolvedor', 'Designer'],
      buttons: [
        {
          type: 'Desenvolvedor',
          text: 'acessar',
          link: 'https://marolla.vercel.app/'
        }
      ]
    },
    tlou: {
      title: 'The last of us',
      description: <>
        <p className='font-roboto'>
          Eu há anos sou fã do jogo the last of us, e sempre quis fazer um projeto relacionado a ele. Desde então, eu sempre quis fazer um site sobre o jogo, e decidi fazer uma página de compra de produto relacionado ao próprio jogo, com uma interface bem clean e atual.
        </p>
        <p className='font-roboto'>
          Acabei por não fazer o site, porém, criei toda a interface no figma, e fiz a prototipação do site. Foi um projeto muito divertido de fazer, e me ajudou a melhorar minhas habilidades de design e prototipação.
        </p>
      </>,
      skills: ['Figma', 'Grid', 'UI Design', 'UX Design'],
      operation: ['Designer'],
    },
    nooven: {
      title: 'Nooven',
      description: <>
        <p className='font-roboto'>
          Este projeto eu fiz na minha primeira empresa onde eu trabalhei como desenvolvedor & UI Designer. Eu trabalhei em um time de 3 pessoas: um Back-end e um Dev-ops, e fui responsável por toda a parte de design e desenvolvimento do front-end. 
        </p>
        <p className='font-roboto'>
          Este projeto foi bem diferente do convencional, nós precisavamos fazer um front-end que integrasse com a API, e a API se comunicasse com o sistema operacional através de scripts powershell. No front, eu fiz a autenticação, e depois que o usuário fosse logado, ele poderia controlar scripts powershell no sistema operacional, e ver o resultado no front-end em tempo real.
        </p>
        <p className='font-roboto'>
          Foi um desafio muito grande para o time todo, e todos participantes aprenderam muito com o projeto.
        </p>
      </>,
      skills: ['ReactJS', 'styled-components', 'TypeScript', 'UI Design', 'UX Design', 'axios', 'Design System', 'Figma'],
      operation: ['Desenvolvedor', 'Designer'],
    },
    pokedex: {
      title: 'Pokedex',
      description: <>
        <p className='font-roboto'>
          Este projeto foi feito para uma entrevista de emprego em 2019. Eu precisava fazer um site que consumisse a API da pokeapi, e mostrasse todos os pokemons, e suas informações.
        </p>
        <p className='font-roboto'>
          Eu não só criei o site, como também criei o design do site, e fiz toda a parte de desenvolvimento. Foi um projeto muito desafiador para mim na época, pois eu não tinha muita experiência em utilizar API`s públicas.
        </p>
        <p className='font-roboto'>
          Apesar da dificuldade que encontrei, eu consegui fazer a listagem de pokemons, e a página de detalhes de cada pokemon, além de poder pesquisar um pokemon específico por nome ou ID, além claro, de uma animação muito foda que fiz para as páginas. Única coisa que faltou nesse projeto foi paginação, pois a API não tinha um suporte muito bom para paginação na época.
        </p>
      </>,
      skills: ['NextJS', 'TypeScript', 'Figma', 'TailwindCSS', 'Grid', 'Tailwind Variants', 'GSAP', 'Framer Motion', 'UI Design', 'UX Design'],
      operation: ['Desenvolvedor', 'Designer'],
      link: 'https://pokedex-mu-orcin.vercel.app/'
    },
    talklink: {
      title: 'Talklink',
      description: <></>,
      skills: ['ViteJS', 'ReactJS', 'TailwindCSS', 'TypeScript'],
      operation: ['Designer'],
    },
  }

  const selectedProject = projects[selectProjectType]

  const modalShowcaseStyle = tv({
    base: 'bg-gray-900 bg-opacity-90 fixed top-0 left-0 w-screen h-screen pl-4',
    defaultVariants: {
      type: 'visible'
    },
    slots: {
      container: 'bg-gray-100 w-full max-w-[700px] h-fit p-8 fixed left-0 right-0 top-0 bottom-0 my-auto mx-auto border-gray-900 border-2 shadow-lg',
      header: 'flex align-center gap-6 justify-between',
      headerTitle: 'font-semibold text-2xl tracking-wide uppercase',
      closeButton: 'border-gray-900 border-2 w-[22px] h-[22px] flex items-center justify-center',
      descriptionContainer: 'flex flex-col gap-4 text-base text-gray-900 text-150% pt-10 pb-8 font-roboto',
      subTitle: 'font-semibold text-xl tracking-wider uppercase',
      skillsContainer: 'flex gap-y-3 gap-x-6 flex-wrap pt-[24px] pb-[32px]',
      skillsItem: 'text-sm text-gray-900 border-gray-900 border-2 py-[4px] px-[16px] font-semibold uppercase tracking-wider',
      operationList: 'flex flex-col gap-1 pt-[24px] pb-[32px]',
      operationContainer: 'flex items-center gap-2',
      operationContent: 'w-[3px] h-[12px]',
      operationText: 'font-gothic',
      containerButton: 'flex justify-end',
      button: 'flex items-center justify-center gap-2 bg-gray-900 text-white w-full md:max-w-[190px] h-[42px] uppercase tracking-wider font-medium text-xl mt-8 hover:bg-primary-600 transition-all hover:shadow-lg',
    },
    variants: {
      operationColor: {
        Desenvolvedor: {
          operationContent: 'bg-[#26A19B]'
        },
        Designer: {
          operationContent: 'bg-[#B620A2]'
        }
      },
      type: {
        visible: {
          base: 'bg-gray-900 bg-opacity-90 fixed top-0 left-0 w-screen h-screen',
          container: 'bg-gray-100 w-full max-w-[700px] h-fit p-8 fixed left-0 right-0 top-0 bottom-0 my-auto mx-auto border-gray-900 border-2 shadow-lg'
        },
        hidden: {
          base: 'hidden',
          container: 'hidden'
        },
      }
    }
  })

  const { 
    base, 
    container, 
    header, 
    headerTitle, 
    closeButton, 
    descriptionContainer, 
    subTitle, 
    skillsContainer, 
    skillsItem, 
    operationList, 
    operationContainer, 
    operationContent,
    containerButton,
    button
  } = modalShowcaseStyle()

  return (
    <div className={base({ type: isVisible ? 'visible' : 'hidden' })}>
      <div className={container({ type: isVisible ? 'visible' : 'hidden' })}>

        <div className={header()}>
          <h1 className={headerTitle()}>{selectedProject.title}</h1>
          <button
            onMouseLeave={() => setCursorVariant('default')}
            onMouseEnter={() => setCursorVariant('md')}
            className={closeButton()} 
            onClick={() => setIsVisible(false)}
          >
            <svg className='cursor-pointer' xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' fill='none'>
              <path className='cursor-pointer' d='M9.899 0L5.656 4.242L1.414 0L0 1.414L4.242 5.656L0 9.898L1.414 11.312L5.656 7.07L9.899 11.312L11.313 9.898L7.071 5.656L11.313 1.414L9.899 0Z' fill='black'/>
            </svg>
          </button>
        </div>

        <div className={descriptionContainer()}>
          {selectedProject.description}
        </div>

        <div>
          <strong className={subTitle()}>Habilidades</strong>
          <ul className={skillsContainer()}>
            {selectedProject.skills.map((item) => {
              return (
                <li className={skillsItem()} key={item}>{item}</li>
              )
            })}
          </ul>
        </div>

        <div>
          <strong className={subTitle()}>Atuação</strong>
          <ul className={operationList()}>
            {selectedProject.operation.map((item) => {
              return (
                <div className={operationContainer()} key={item}>
                  <div className={operationContent({ operationColor: item })} />
                  <li>{item}</li>
                </div>
              )
            })}
          </ul>
        </div>

        {selectedProject.link && (
          <div className={containerButton()}>
            <button
              onClick={() => window.open(selectedProject.link, '_blank')}
              onMouseLeave={() => setCursorVariant('default')}
              onMouseEnter={() => setCursorVariant('md')}
              className={button()}
            >
              acessar
              <svg className='cursor-pointer' xmlns='http://www.w3.org/2000/svg' width='17' height='14' viewBox='0 0 17 14' fill='none'>
                <path className='cursor-pointer' d='M1.37479e-06 7.90827L13.4659 7.90827L8.5794 12.7157L9.88482 14L17 7L9.88482 -1.28532e-06L8.5794 1.28429L13.4659 6.09173L1.21599e-06 6.09174L1.37479e-06 7.90827Z' fill='white'/>
              </svg>
            </button>
          </div>
        )}

      </div>
    </div>
  )
}
