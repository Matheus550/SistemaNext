import { useState } from 'react';
import style from '../style/cadastro.module.css';

const CadPessoa = () => {

  const [nomeFantasia, setNomeFantasia] = useState('');
  const [tipoPessoa, setTipoPessoa] = useState('fisica');
  const [documento, setDocumento] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');


  const [tipoPessoaVendas, setTipoPessoaVendas] = useState('cliente');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados ao backend ou salvar no banco de dados.
    console.log('Dados enviados:', {
      nomeFantasia, tipoPessoa, documento, endereco, telefone, email, dataNascimento, desconto, vale, credito, tipoPessoaVendas
    });
  };

  return (
    <div className={style.body}>
      <div className={style.tabs}>
        <h2>Cadastro de Pessoa</h2>
        <form onSubmit={handleFormSubmit}>
          <label>Nome Fantasia:</label>
          <input type="text" value={nomeFantasia} onChange={(e) => setNomeFantasia(e.target.value)} />
          <label>Tipo de Pessoa:</label>
          <select value={tipoPessoa} onChange={(e) => setTipoPessoa(e.target.value)}>
            <option value="fisica">Física</option>
            <option value="juridica">Jurídica</option>
          </select>
          {tipoPessoa === 'juridica' ? (
            <div className={style.tabs}>
              <label>CNPJ:</label>
              <input type="text" value={documento} onChange={(e) => setDocumento(e.target.value)} />
              <label>Inscrição Estadual:</label>
              <input type="text" />
              <label>Razão Social</label>
              <input type='text' />
            </div>) : (
            <div>
              <label>CPF:</label>
              <input type="text" value={documento} onChange={(e) => setDocumento(e.target.value)} />
              <label>Data de Nascimento:</label>
              <input type="date" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} />
            </div>
          )}
          <label>Endereço:</label>
          <input type="text" value={endereco} onChange={(e) => setEndereco(e.target.value)} />
          <label>Telefone:</label>
          <input type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
          <label>Email:</label> <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

          <label>Rótulo (Relação que esta pessoa terá com a empresa)</label>
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
          <button type="submit">Salvar</button>
        </form>
      </div>
    </div>
  );
};

export default CadPessoa;

