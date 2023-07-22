// pages/cadastro.tsx

import CadastroPessoa from '../components/Cadastro/CadastroPessoa';

const CadastroPage: React.FC = () => {
  const handleSavePessoa = (data: PessoaFormData) => {
    // Aqui você pode fazer a lógica para salvar os dados no banco de dados ou enviar para o servidor
    console.log('Dados de pessoa salvos:', data);
  };

  return (
    <div>
      <h1>Cadastro de Pessoa</h1>
      <CadastroPessoa onSave={handleSavePessoa} />
    </div>
  );
};

export default CadastroPage;
