import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faCircleDown } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import variables from './variables.module.scss'
import '../app/scss/Button.scss'
import Button from './components/button'





export default function Home() {
  return (

    <div className='bg-auto bg-gradient-to-r from-gray-700 via-gray-900 to-black'>

      <div className="bg-indigo-900 text-center py-4 lg:px-4">
        <a href='https://felipeholanda.vercel.app/'>
          <div className="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
            <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">Novo</span>
            <span className="font-semibold mr-2 text-left flex-auto">Saiba mais sobre mim no meu portfólio</span>
            <svg className="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" /></svg>
          </div>
        </a>
      </div>

      <main className="flex min-h-screen flex-col items-center justify-between p-10">

        <Image
          src="/images/Eu.jpeg"
          alt="Felipe Holanda"
          width={250}
          height={250}
          border-radius={50}
          className="border-2 border-radius-50 rounded-full mb-4 imag"
        />

        <h1 className="sub-titulo text-white text-4xl font-bold text-center">
          Seja Bem-vindo(a) <br></br>Me chamo{' '}
          <a
            className="text-blue-600"

            target="_blank"
            rel="noopener noreferrer"
          >
            Felipe Holanda
          </a>
        </h1>

        <p className="mt-6 text-white text-1 text-center">
          Sou desenvolvedor Front-end e Back-end
        </p>

        <p className="links-top text-white text-1xl text-center">
          Alguns links sobre mim:
        </p>


        <ul className="flex flex-row grid grid-rows-3 grid-flow-col">
          <li>
            <a href="https://www.linkedin.com/in/felipe-holandadev/" target="_blank" rel="noopener noreferrer">
              <div className="buttons">
                <button className="blob-btn">
                  <FontAwesomeIcon icon={faLinkedin} size="xl" /> Linkedin
                  <span className="blob-btn__inner">
                    <span className="blob-btn__blobs">
                      <span className="blob-btn__blob"></span>
                      <span className="blob-btn__blob"></span>
                      <span className="blob-btn__blob"></span>
                      <span className="blob-btn__blob"></span>
                    </span>
                  </span>
                </button>
                <br />

                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                  <defs>
                    <filter id="goo">
                      <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
                      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
                      <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
                    </filter>
                  </defs>
                </svg>
              </div>
            </a>
          </li>
          <li>
            <a href="https://github.com/felipeholanda2077" target="_blank" rel="noopener noreferrer">
              <div className="buttons">
                <button className="blob-btn">
                  <FontAwesomeIcon icon={faGithub} size="xl" /> Git Hub
                  <span className="blob-btn__inner">
                    <span className="blob-btn__blobs">
                      <span className="blob-btn__blob"></span>
                      <span className="blob-btn__blob"></span>
                      <span className="blob-btn__blob"></span>
                      <span className="blob-btn__blob"></span>
                    </span>
                  </span>
                </button>
                <br />

                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                  <defs>
                    <filter id="goo">
                      <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
                      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
                      <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
                    </filter>
                  </defs>
                </svg>
              </div>
            </a>
          </li>
          <li>
            <a href="" target="_blank" rel="noopener noreferrer">
              <div className="buttons">
                <button className="blob-btn">
                  <FontAwesomeIcon icon={faEnvelope} size="xl" /> E-Mail
                  <span className="blob-btn__inner">
                    <span className="blob-btn__blobs">
                      <span className="blob-btn__blob"></span>
                      <span className="blob-btn__blob"></span>
                      <span className="blob-btn__blob"></span>
                      <span className="blob-btn__blob"></span>
                    </span>
                  </span>
                </button>
                <br />

                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                  <defs>
                    <filter id="goo">
                      <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
                      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
                      <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
                    </filter>
                  </defs>
                </svg>
              </div>
            </a>
          </li>
        </ul>

        <a href="#">
          <svg className="animate-bounce w-10 h-10 ...">
            <FontAwesomeIcon icon={faCircleDown} size="xl" style={{ color: "#2563eb", }} />
          </svg>
        </a>


        <div className="bg-white p-8 mt-5 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-2xl font-semibold mb-4">Formulário De Contato</h1>
          <form>
            <div className="mb-4">
              <label htmlFor="nome" className="block text-gray-600 font-medium">Nome</label>
              <input type="text" id="nome" name="nome" className="border border-gray-300 p-2 w-full rounded"></input>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600 font-medium">Email</label>
              <input type="email" id="email" name="email" className="border border-gray-300 p-2 w-full rounded"></input>
            </div>
            <div className="mb-4">
              <label htmlFor="mensagem" className="block text-gray-600 font-medium">Mensagem</label>
              <textarea id="mensagem" name="mensagem" className="border border-gray-300 p-2 w-full rounded"></textarea>
            </div>
            <div className="flex justify-end">
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Enviar</button>
            </div>
          </form>
        </div>



        <a href="#final"></a>
        <div className="flex flex-col items-center mt-5 py-2" id="final">
          <footer className=" bottom-3 text-1xl text-center">
            <a
              className="text-white"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              Todos os direitos reservados ® – Felipe Holanda – 2023
            </a>
          </footer>
        </div>

      </main>
    </div>

  )
}
