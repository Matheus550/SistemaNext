// pages/index.tsx

import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <>
      <div>
        <h1>Bem-vindo à Página Inicial</h1>
        <p>Aqui você encontrará algumas informações sobre o projeto.</p>

        {/* Link para a página de cadastro */}
        <Link href="/cadastro">Acessar Cadastro de Pessoa</Link>
      </div>
      <div className="menu">
        <div className="menu-item">
          Item 1
          <div className="submenu">
            Opção 1
            Opção 2
            Opção 3
          </div>
        </div>
        <div className="menu-item">
          Item 2
          <div className="submenu">
            Opção 1
            Opção 2
            Opção 3
          </div>
        </div>
        <div className="menu-item">
          Item 3
          <div className="submenu">
            Opção 1
            Opção 2
            Opção 3
          </div>
        </div>
      </div>
    </>


  );
};

export default HomePage;
