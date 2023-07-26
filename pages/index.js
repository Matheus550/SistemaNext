import Link from 'next/link';
import style from './style.module.css';

const IndexPage = () => {

    return (
        <>
            <div className={style.drawer}>
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

