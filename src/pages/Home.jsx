import { useNavigate } from 'react-router-dom';
export const Home = () => {

    const navigate = useNavigate();
    const onClickHandler = (e) => {

        if (e.target.id === 'comenzar') {
            navigate('/comenzar')
        } else if (e.target.id === 'cursos') {
            navigate('/cursos')
        }
    }

    return (
        <>
        <main className={"background"}>
            <section>
                <div className={"flex flex-col items-center justify-center h-screen"}>
                    <h1 className={"text-[3rem] font-bold text-[#ed5757] flex md:flex-row flex-col justify-center items-center"}>
                        Bienvenido a CNJ
                        <img src='../../public/logo.png' className={'w-[5rem]'} /></h1>
                    <h2 className={"text-[2.5rem] md:text-start text-center font-bold text-white md:stroke-0"}>Aprende didacticamente!!</h2>
                    <div className={'flex md:flex md:flex-row flex-col gap-3 mt-[3rem]'}>
                        <button id='comenzar' onClick={onClickHandler} className={"bg-blue-600 text-white rounded px-3 py-3 text-[1.5rem] font-bold"}>Comenzar</button>
                        <button id='cursos' onClick={onClickHandler} className={"bg-[#ed5757] text-white rounded px-3 py-3 text-[1.5rem] font-bold"}>Ver Cursos</button>
                    </div>
                </div>
            </section>
        </main>
        <main className={'bg-[#2f2c3d]'}>
            <section className={'w-full flex md:flex-row md:flex-col md:gap-[25%]'}>
                <div>Cursos</div>
                <div>Cursos</div>
            </section>
        </main>
        </>
    )
}