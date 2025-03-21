import { Dispatch, SetStateAction, useEffect } from 'react'
import { tv } from 'tailwind-variants'
import { ProjectTypes } from '@/components/ShowcaseItem'
import { useCursor } from '@/contexts'
import { projects } from './data'

type ModalShowcaseProps = {
  isVisible: boolean
  setIsVisible: Dispatch<SetStateAction<boolean>>
  selectProjectType: ProjectTypes
}

type OperationType = 'Desenvolvedor' | 'Designer'

export type ProjectRenderProps = {
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

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (isVisible) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'unset'
      }
    }
  }, [isVisible])

  const selectedProject = projects[selectProjectType]

  const modalShowcaseStyle = tv({
    base: 'bg-gray-900 bg-opacity-90 fixed top-0 left-0 w-screen h-screen',
    defaultVariants: {
      type: 'visible'    
    },
    slots: {
      container: 'bg-gray-100 w-full max-w-[700px] h-fit p-8 fixed left-0 right-0 top-0 bottom-0 my-auto mx-auto border-gray-900 border-2 shadow-lg max-h-[100vh] overflow-x-hidden',
      header: 'flex align-center gap-6 justify-between pt-8 sm:pt-0',
      headerTitle: 'font-semibold text-2xl tracking-wide uppercase',
      closeButton: 'border-gray-900 border-2 w-[22px] h-[22px] flex items-center justify-center',
      descriptionContainer: 'flex flex-col gap-4 text-base text-gray-900 text-150% pt-10 pb-8 font-roboto',
      subTitle: 'font-semibold text-xl tracking-wider uppercase',
      skillsContainer: 'flex gap-y-3 gap-x-6 flex-wrap pt-[24px] pb-[32px]',
      skillsItem: 'text-xs sm:text-sm text-gray-900 border-gray-900 border-2 sm:py-[4px] sm:px-[16px] py-[2px] px-[10px] font-semibold uppercase tracking-wider',
      operationList: 'flex flex-col gap-1 pt-[24px] pb-[32px]',
      operationContainer: 'flex items-center gap-2',
      operationContent: 'w-[3px] h-[12px]',
      operationText: 'font-gothic',
      containerButton: 'flex justify-end pb-8 sm:pb-0',
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
