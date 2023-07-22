// pages/pessoas.tsx

import { useState } from 'react';

type Pessoa = {
  id: number;
  nome: string;
  cpf: string;
  rg: string;
  endereco: string;
  telefone: string;
  email: string;
};

const PessoasPage: React.FC = () => {
  const [pessoas, setPessoas] = useState<Pessoa[]>([]);

  const handleSavePessoa = (data: Pessoa) => {
    // Simulando o salvamento da pessoa na lista
    setPessoas((prevPessoas) => [...prevPessoas, data]);
  };

  return (
    <div>
      <h1>Pessoas Cadastradas</h1>
      {pessoas.length === 0 ? (
        <p>Nenhuma pessoa cadastrada ainda.</p>
      ) : (
        <ul>
          {pessoas.map((pessoa) => (
            <li key={pessoa.id}>
              <strong>Nome:</strong> {pessoa.nome}
              <br />
              <strong>CPF:</strong> {pessoa.cpf}
              <br />
              <strong>RG:</strong> {pessoa.rg}
              <br />
              <strong>Endereço:</strong> {pessoa.endereco}
              <br />
              <strong>Telefone:</strong> {pessoa.telefone}
              <br />
              <strong>Email:</strong> {pessoa.email}
              <br />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PessoasPage;
