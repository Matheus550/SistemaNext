import { useState } from 'react';

const CadPessoa = () => {
  const [activeTab, setActiveTab] = useState('cadastro-pessoa');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const [nomeFantasia, setNomeFantasia] = useState('');
  const [tipoPessoa, setTipoPessoa] = useState('fisica');
  const [documento, setDocumento] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');

  const [desconto, setDesconto] = useState('');
  const [vale, setVale] = useState('');
  const [credito, setCredito] = useState('');

  const [tipoPessoaVendas, setTipoPessoaVendas] = useState('cliente');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados ao backend ou salvar no banco de dados.
    console.log('Dados enviados:', {
      nomeFantasia,
      tipoPessoa,
      documento,
      endereco,
      telefone,
      email,
      dataNascimento,
      desconto,
      vale,
      credito,
      tipoPessoaVendas,
    });
  };

  return (
    <div>
      <h1>Sistema de Cadastro</h1>
      <div className="tabs">
        <button
          className={activeTab === 'cadastro-pessoa' ? 'active' : ''}
          onClick={() => handleTabClick('cadastro-pessoa')}
        >
          Cadastro de Pessoa
        </button>
        <button
          className={activeTab === 'menu-financeiro' ? 'active' : ''}
          onClick={() => handleTabClick('menu-financeiro')}
        >
          Menu Financeiro
        </button>
        <button
          className={activeTab === 'menu-vendas' ? 'active' : ''}
          onClick={() => handleTabClick('menu-vendas')}
        >
          Menu Vendas
        </button>
      </div>

      {activeTab === 'cadastro-pessoa' && (
        <div>
          <h2>Cadastro de Pessoa</h2>
          <form onSubmit={handleFormSubmit}>
            <label>Nome Fantasia:</label>
            <input
              type="text"
              value={nomeFantasia}
              onChange={(e) => setNomeFantasia(e.target.value)}
            />

            <label>Tipo de Pessoa:</label>
            <select value={tipoPessoa} onChange={(e) => setTipoPessoa(e.target.value)}>
              <option value="fisica">Física</option>
              <option value="juridica">Jurídica</option>
            </select>

            {tipoPessoa === 'juridica' ? (
              <div>
                <label>CNPJ:</label>
                <input
                  type="text"
                  value={documento}
                  onChange={(e) => setDocumento(e.target.value)}
                />

                <label>Inscrição Estadual:</label>
                <input type="text" />
              </div>
            ) : (
              <div>
                <label>CPF:</label>
                <input
                  type="text"
                  value={documento}
                  onChange={(e) => setDocumento(e.target.value)}
                />

                <label>Data de Nascimento:</label>
                <input
                  type="date"
                  value={dataNascimento}
                  onChange={(e) => setDataNascimento(e.target.value)}
                />
              </div>
            )}

            <label>Endereço:</label>
            <input
              type="text"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
            />

            <label>Telefone:</label>
            <input
              type="text"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />

            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

            <button type="submit">Salvar</button>
          </form>
        </div>
      )}

      {activeTab === 'menu-financeiro' && (
        <div>
          <h2>Menu Financeiro</h2>
          <form onSubmit={handleFormSubmit}>
            <label>Desconto:</label>
            <input
              type="text"
              value={desconto}
              onChange={(e) => setDesconto(e.target.value)}
            />

            <label>Vale:</label>
            <input type="text" value={vale} onChange={(e) => setVale(e.target.value)} />

            <label>Crédito:</label>
            <input
              type="text"
              value={credito}
              onChange={(e) => setCredito(e.target.value)}
            />

            <button type="submit">Salvar</button>
          </form>
        </div>
      )}

      {activeTab === 'menu-vendas' && (
        <div>
          <h2>Menu Vendas</h2>
          <label>Selecione o tipo de pessoa:</label>
          <select value={tipoPessoaVendas} onChange={(e) => setTipoPessoaVendas(e.target.value)}>
            <option value="cliente">Cliente</option>
            <option value="transportadora">Transportadora</option>
            <option value="tecnico">Técnico</option>
            <option value="fornecedor">Fornecedor</option>
            <option value="colaborador">Colaborador</option>
            <option value="representante">Representante</option>
            <option value="vendedor">Vendedor</option>
            <option value="fabricante">Fabricante</option>
          </select>
        </div>
      )}

      <style jsx>{`
        .tabs {
          display: flex;
          justify-content: space-between;
        }
        .tabs button {
          padding: 10px 20px;
          background-color: #f0f0f0;
          border: none;
          cursor: pointer;
        }
        .tabs button.active {
          background-color: #ccc;
        }
      `}</style>
    </div>
  );
};

export default CadPessoa;

