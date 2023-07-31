import { useState } from 'react';
import style from '../style/cadastro.module.css';

const CadProduto = () => {
    const [nomeProduto, setNomeProduto] = useState('');
    const [descProduto, setdescProduto] = useState('');
    const [codProduto, setcodProduto] = useState('');
    const [catProduto, setcatProduto] = useState('');
    const [marcaProduto, setmarcaProduto] = useState('');
    const [unidadeProduto, setunidadeProduto] = useState('');
    const [preçoProduto, setpreçoProduto] = useState('');
    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode adicionar a lógica para enviar os dados ao backend ou salvar no banco de dados.
        console.log('Dados enviados:', {});
    };
    return (
        <div className={style.tabs}>
            <h2>Cadastro Produto</h2>
            <form onSubmit={handleFormSubmit}>
                <label>Nome Produto:</label>
                <input type="text" value={nomeProduto} onChange={(e) => setNomeProduto(e.target.value)} />
                <label>Descrição do produto</label>
                <input type="text" value={descProduto} onChange={(e) => setdescProduto(e.target.value)} />
                <label>Código do produto (opcional)</label>
                <input type="text" value={codProduto} onChange={(e) => setcodProduto(e.target.value)} />
                <label>Categoria do produto (por exemplo, eletrônicos, roupas, alimentos etc.)</label>
                <input type="text" value={catProduto} onChange={(e) => setcatProduto(e.target.value)} />
                <label>Marca do produto (opção de selecionar de uma lista)</label>
                <input type="text" value={marcaProduto} onChange={(e) => setmarcaProduto(e.target.value)} />
                <label>Unidade de medida (por exemplo, peça, kg, litro etc.)</label>
                <input type="text" value={unidadeProduto} onChange={(e) => setunidadeProduto(e.target.value)} />
                <label>Preço unitário (opcional)</label>
                <input type="text" value={preçoProduto} onChange={(e) => setpreçoProduto(e.target.value)} />
                <button type="submit">Salvar</button>
            </form>
        </div>
    );
};
export default CadProduto;
