import { ProjectTypes } from '@/components/ShowcaseItem'
import { ProjectRenderProps } from './'

export const projects: { [x in ProjectTypes]: ProjectRenderProps } = {
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
    skills: ['Figma', 'Grid', 'UI Design', 'UX Design', 'cores', 'tipografia', 'usabilidade', 'Espaçamento'],
    operation: ['Designer'],
    link: 'https://www.behance.net/gallery/221645223/The-last-of-us'
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
    skills: ['ViteJS', 'TypeScript', 'styled-components', 'axios', 'yup', 'Figma', 'TailwindCSS', 'Grid', 'UI Design', 'UX Design'],
    operation: ['Desenvolvedor', 'Designer'],
    link: 'https://pokedex-mu-orcin.vercel.app/'
  },
  talklink: {
    title: 'Talklink',
    description: <>
      <p className='font-roboto'>
        Este design foi desenvolvido para uma empresa de internet da minha cidade. Eles queriam um site que fosse moderno, e que mostrasse todos os serviços que eles ofereciam.
      </p>
      <p className='font-roboto'>
        Eu fiz esse protótipo no figma, eu pude explorar muitas ideias e conceitos que eu tinha em mente. O projeto foi feito em 2019, e até hoje é um dos meus designs favoritos.
      </p>
      <p className='font-roboto'>
        Apesar de não ter sido codificado, eu tenho um carinho muito grande, pois foi um projeto com todas as telas feitas, e com uma experiência de usuário muito boa para a época.
      </p>
    </>,
    skills: ['Figma', 'Grid', 'UI Design', 'UX Design', 'Prototipação', 'Design System', 'cores', 'tipografia', 'usabilidade'],
    operation: ['Designer'],
    link: 'https://www.figma.com/proto/XdUzlD9InWcumBdGZeWoaN/Talklink?node-id=1-2&t=I823XNzDJckq3AUe-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1'
  },
}
