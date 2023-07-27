import Link from 'next/link';
import style from './style.module.css';

const IndexPage = () => {

    return (
        <>
            <div className={style.drawer}>
                <h1>Sistema de Cadastro</h1>
                <ul>
                    <li>
                        <Link href="/cadastro/index-cad"> Cadastro </Link>
                    </li>


                </ul>
            </div>
        </>
    );
};

export default IndexPage;

