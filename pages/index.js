import Link from 'next/link';
import Head from 'next/head';
const IndexPage = () => {

    return (
        <>
            <Head>
                <link rel="stylesheet" href="/style/style.css" />
            </Head>
            <div className='drawer'>
                <h1>Sistema de Cadastro</h1>
                <ul>
                    <li>
                        <Link href="/cadastro/pessoa"> Cadastro de Pessoa </Link>
                    </li>
                    <li>
                        <Link href="/cadastro/colaborador"> Cadastro de Colaborador </Link>
                    </li>
                    {/* ... e assim por diante para os outros itens do menu */}
                </ul>
            </div>
        </>
    );
};

export default IndexPage;

