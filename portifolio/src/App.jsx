import HoverGrow from "./components/HoverGrow";

function App() {
  return (
    <main className="container mx-auto p-2 md:p-6 w-full text-gray-50 flex flex-col items-center space-y-2">
      <div className="bg-gray-700 p-4 sticky top-0 rounded-md w-full flex flex-row justify-between items-center uppercase">
        <span>
          <img
            src="./assets/logo.svg"
            alt="Logo Wentz Dev"
            srcSet="./assets/logo.svg"
            className="size-8"
          />
        </span>
        <nav>
          <ul className="flex flex-row justify-between gap-2 items-center">
            <li>
              <a href="#" className="hover:text-secondary hover:font-bold">
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#Projetos"
                className="hover:text-secondary hover:font-bold"
              >
                Projetos
              </a>
            </li>
            <li>
              <a href="#Sobre" className="hover:text-secondary hover:font-bold">
                Sobre
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="bg-gray-700 bg-opacity-40 p-4 rounded-md w-full flex flex-col justify-around items-center space-y-3 min-h-[calc(100vh-100px)]">
        <HoverGrow />
        <h1 className="text-5xl font-bold text-gray-50 w-full h-full text-center animate-pulse">
          Wentz.dev Transformando seus sonhos em códigos, e os código em
          realidade!
        </h1>
      </div>

      <div
        id="Projetos"
        className="bg-gray-700 bg-opacity-40 p4- rounded-md w-full flex flex-col justify-between items-center space-y-3 p-2 md:p10"
      ></div>

      <section
        id="Sobre"
        className="bg-gray-700 bg-opacity-40 p4- rounded-md w-full flex flex-col justify-between items-center space-y-3 p-2 md:p10"
      >
        <h1 className="w-full text-center bg-gradient-to-r from-secondary to-primary text-white text-xl font-bold rounded-lg py-4">
          Transforme Suas Ideias em Realidade Digital
        </h1>
        <p>
          Desenvolvimento Web, Aplicações Mobile e Desktop Eu crio soluções sob
          medida para transformar suas ideias em experiências digitais
          incríveis. Com uma abordagem centrada no usuário, ofereço serviços
          completos de desenvolvimento de sites, landing pages, portfólios,
          aplicações web, mobile e desktop.
        </p>
      </section>

      <section className="bg-gray-700 bg-opacity-40 p4- rounded-md w-full flex flex-col justify-between items-center space-y-3 p-2 md:p10">
        <h1 className="w-full text-center bg-gradient-to-r from-secondary to-primary text-white text-xl font-bold rounded-lg py-4">
          Nossos Serviços
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-700 rounded-md p-2">
            <h2>Desenvolvimento web</h2>
            <p>
              Criação de sites e portais modernos, funcionais e responsivos.
              Desde sites institucionais até plataformas complexas, garantimos
              que seu negócio esteja sempre online e otimizado para todos os
              dispositivos.
            </p>
          </div>

          <div className="bg-gray-700 rounded-md p-2">
            <h2>Landing Pages</h2>
            <p>
              Projetos focados em conversão, com design atrativo e
              funcionalidade simplificada. Ideal para campanhas de marketing e
              capturas de leads, nossas landing pages são feitas para gerar
              resultados.
            </p>
          </div>

          <div className="bg-gray-700 rounded-md p-2">
            <h2>Portfólios</h2>
            <p>
              Mostre o seu trabalho de forma profissional com um portfólio
              impactante. Crio portfólios personalizados que destacam suas
              habilidades e realizam suas ideias em um design que impressiona.
            </p>
          </div>

          <div className="bg-gray-700 rounded-md p-2">
            <h2>Aplicações Web</h2>
            <p>
              Desenvolvimento de sistemas e aplicativos web robustos e
              escaláveis, que automatizam processos e aumentam a eficiência do
              seu negócio. A maneira mais moderna de gerenciar o seu negócio!
            </p>
          </div>

          <div className="bg-gray-700 rounded-md p-2">
            <h2>Aplicações Mobile</h2>
            <p>
              Transforme sua ideia em um aplicativo móvel inovador, com uma
              interface intuitiva e performance excelente para dispositivos
              móveis. Crie um aplicativo que atenda às necessidades dos seus
              clientes.
            </p>
          </div>

          <div className="bg-gray-700 rounded-md p-2">
            <h2>Aplicações Desktop</h2>
            <p>
              Soluções completas para quem precisa de softwares para desktop.
              Criação de aplicativos personalizados para Windows e Mac, com foco
              em funcionalidade e usabilidade. O que você precisa para seu
              negócio.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-700 bg-opacity-40 p4- rounded-md w-full flex flex-col justify-between items-center space-y-3 p-2 md:p10">
        <div className="bg-gray-700 rounded-md p-2">
          <h1 className="w-full text-center bg-gradient-to-r from-secondary to-primary text-white text-xl font-bold rounded-lg py-4">
            Por que Escolher Nossos Serviços?
          </h1>
          <p>
            O meu foco é na criação de soluções inovadoras e impactantes para o
            seu negócio. Estou sempre disponível para ajudar e responder às suas
            necessidades. Ofereço soluções personalizadas para atender às suas
            necessidades e objetivos. Além de qualidade, inovação e suporte
            completo.
          </p>
        </div>
      </section>

      <section className="bg-gray-700 bg-opacity-40 rounded-md w-full flex flex-col justify-between p-2">
        <div className="bg-gray-700 rounded-md p-2">
          <h1 className="w-full text-center bg-gradient-to-r from-secondary to-primary text-white text-xl font-bold rounded-lg py-4">
            Vamos Conversar?
          </h1>
          <p>
            Quer discutir uma ideia ou começar seu projeto? Entre em contato e
            transforme suas ideias em realidade digital.
          </p>
        </div>
      </section>
    </main>
  );
}

export default App;
