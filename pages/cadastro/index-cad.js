import Link from 'next/link';
const CadIndex = () => {

    return (
        <>
            <div>
                <h1>Aba Cadastro</h1>
                <Link href="/cadastro/cad_pessoa">Cadastro de Pessoa</Link>
                <br />
                <Link href="/cadastro/cad_produto">Cadastro de Produto</Link>
            </div>
        </>
    );
};

export default CadIndex;
