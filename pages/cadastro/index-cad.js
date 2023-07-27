import Link from 'next/link';
const CadIndex = () => {

    return (
        <>
            <div>
                <h1>Sistema de Cadastro</h1>
                <Link href="/cadastro/pessoa">
                    Cadastrar Pessoa
                </Link>

            </div>
        </>
    );
};

export default CadIndex;
