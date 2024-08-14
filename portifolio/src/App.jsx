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

      <div className="bg-gray-700 bg-opacity-40 p-4 rounded-md w-full flex flex-col justify-between items-center space-y-3 h-svh">
        <img
          src="./assets/logo.svg"
          alt="Logo Wentz.dev"
          srcSet="./assets/logo.svg"
        />
        <h1 className="text-2xl font-bold text-gray-50 w-full text-center">
          Wentz.dev Transformando seus sonhos em códigos, e os código em realidade!
        </h1>
        <div className="flex flex-col md:flex-row justify-between w-full gap-1">
          <div className="w-full md:w-1/2 bg-gray-700 rounded-md p-10">
            teste
          </div>
          <div className="w-full md:w-1/2 bg-gray-700 rounded-md p-2">
            teste
          </div>
        </div>
      </div>

      <div id="Projetos" className="bg-gray-700 bg-opacity-40 p4- rounded-md w-full flex-flex-col justify-between items-center space-y-3 p-2 md:p10">Projetos</div>

      <div id="Sobre" className="bg-gray-700 bg-opacity-40 p4- rounded-md w-full flex-flex-col justify-between items-center space-y-3 p-2 md:p10">Sobre</div>
    </main>
  );
}

export default App;
