// components/Cadastro/CadastroPessoa.tsx

import { useState } from 'react';

type CadastroPessoaProps = {
  onSave: (data: PessoaFormData) => void;
};

type PessoaFormData = {
  nome: string;
  cpf: string;
  rg: string;
  endereco: string;
  telefone: string;
  email: string;
  // Outros campos relevantes podem ser adicionados aqui
};

const CadastroPessoa: React.FC<CadastroPessoaProps> = ({ onSave }) => {
  const [formData, setFormData] = useState<PessoaFormData>({
    nome: '',
    cpf: '',
    rg: '',
    endereco: '',
    telefone: '',
    email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSave(formData);
    // Aqui você pode fazer a lógica de envio dos dados para o servidor ou fazer outras ações necessárias
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome:</label>
        <input type="text" name="nome" value={formData.nome} onChange={handleChange} />
      </div>
      <div>
        <label>CPF:</label>
        <input type="text" name="cpf" value={formData.cpf} onChange={handleChange} />
      </div>
      <div>
        <label>RG:</label>
        <input type="text" name="rg" value={formData.rg} onChange={handleChange} />
      </div>
      <div>
        <label>Endereço:</label>
        <input type="text" name="endereco" value={formData.endereco} onChange={handleChange} />
      </div>
      <div>
        <label>Telefone:</label>
        <input type="text" name="telefone" value={formData.telefone} onChange={handleChange} />
      </div>
      <div>
        <label>Email:</label>
        <input type="text" name="email" value={formData.email} onChange={handleChange} />
      </div>
      <button type="submit">Salvar</button>
    </form>
  );
};

export default CadastroPessoa;
