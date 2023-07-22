// pages/index.tsx

import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Bem-vindo à Página Inicial</h1>
      <p>Aqui você encontrará algumas informações sobre o projeto.</p>

      {/* Link para a página de cadastro */}
      <Link href="/">
        <a>Acessar Cadastro de Pessoa</a>
      </Link>
    </div>
  );
};

export default HomePage;
