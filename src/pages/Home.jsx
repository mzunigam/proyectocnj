import { useNavigate } from 'react-router-dom';
import {Paralax} from "../helpers/paralax.js";
import './Home.css'
export const Home = () => {

    const navigate = useNavigate();
    Paralax();
    const onClickHandler = (e) => {
        if (e.target.id === 'comenzar') {
            navigate('/comenzar')
        } else if (e.target.id === 'cursos') {
            navigate('/cursos')
        }
    }

    return (
        <>
        <main className={"bg-[#2f2c3d]"}>
            <section className={'background'}>
                <div className={"flex flex-col items-center justify-center gap-[5rem] h-screen"}>
                    <h1 className={"text-[3rem] font-bold text-[#ed5757] flex md:flex-row flex-col justify-center items-center"}>
                        Bienvenido a CNJ
                        <img src='../../public/logo.png' className={'w-[5rem]'} /></h1>
                    <h2 className={"text-[2.5rem] md:text-start text-center font-bold text-white md:stroke-0"}>Aprende didacticamente!!</h2>
                    {/*<div className={'md:mt-[10rem]'}>*/}
                    {/*    <img src='../../public/titulo.png' className={'w-[60rem]'} />*/}
                    {/*</div>*/}
                    <div className={'flex md:flex md:flex-row flex-col gap-3 mt-[3rem]'}>
                        <button id='comenzar' onClick={onClickHandler} className={"bg-blue-600 text-white rounded px-3 py-3 text-[1.5rem] font-bold"}>Comenzar</button>
                        <button id='cursos' onClick={onClickHandler} className={"bg-[#ed5757] text-white rounded px-3 py-3 text-[1.5rem] font-bold"}>Ver Cursos</button>
                    </div>
                </div>
            </section>
        </main>
        <main className={'bg-[#2f2c3d]'}>
            <section className={'w-full flex md:flex-row md:flex-col md:gap-[25%]'}>
                <div className={'w-[65%] mx-auto my-[5rem] h-[20rem] bg-blue-900 rounded-xl text-white flex flex-row school-animated'}>
                    <div className={'p-4 w-full flex flex-col gap-[5rem]'}>
                        <div className={'text-2xl'}>Visión y Misión</div>
                        <div className={'text-2xl'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, animi aut consequuntur deleniti et eum harum hic modi nobis
                            nostrum odit officia qui quis reiciendis repellat sapiente, sint velit vitae?</div>
                    </div>
                    <div className={'w-full flex justify-center bg-blue-800 rounded-br-xl rounded-tr-xl image-animated relative z-[1]'}>
                        <div className={'top-[-10rem] animate-text'}>Hola Dick</div>
                        <div className={'bg-[#152557] absolute w-full h-full z-20 background-animated'}></div>
                        <img className={'image-animated absolute z-10'} src='../../public/school.png'/>
                    </div>
                </div>
            </section>
            <section className={'w-full flex md:flex-row md:flex-col md:gap-[25%]'}>
                <div className={'grid grid-cols-2 px-[10%] gap-[5%]'}>
                    <div className={'bg-white p-[1rem]'}>
                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad aspernatur beatae consectetur cum, eius error fugiat hic ipsa modi nam nemo numquam possimus qui, quibusdam sunt veritatis. Excepturi, voluptatem.</div>
                    </div>
                    <div className={'bg-white p-[1rem]'}>
                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad aspernatur beatae consectetur cum, eius error fugiat hic ipsa modi nam nemo numquam possimus qui, quibusdam sunt veritatis. Excepturi, voluptatem.</div>
                    </div>
                    <div className={'bg-white p-[1rem]'}>
                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad aspernatur beatae consectetur cum, eius error fugiat hic ipsa modi nam nemo numquam possimus qui, quibusdam sunt veritatis. Excepturi, voluptatem.</div>
                    </div>
                    <div className={'bg-white p-[1rem]'}>
                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad aspernatur beatae consectetur cum, eius error fugiat hic ipsa modi nam nemo numquam possimus qui, quibusdam sunt veritatis. Excepturi, voluptatem.</div>
                    </div>
                </div>
            </section>
            <section className={'w-full flex md:flex-row md:flex-col md:gap-[25%]'}>
                <div className={'grid grid-cols-2 px-[10%] gap-[5%]'}>
                    <div className={'bg-white p-[1rem]'}>
                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad aspernatur beatae consectetur cum, eius error fugiat hic ipsa modi nam nemo numquam possimus qui, quibusdam sunt veritatis. Excepturi, voluptatem.</div>
                    </div>
                    <div className={'bg-white p-[1rem]'}>
                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad aspernatur beatae consectetur cum, eius error fugiat hic ipsa modi nam nemo numquam possimus qui, quibusdam sunt veritatis. Excepturi, voluptatem.</div>
                    </div>
                    <div className={'bg-white p-[1rem]'}>
                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad aspernatur beatae consectetur cum, eius error fugiat hic ipsa modi nam nemo numquam possimus qui, quibusdam sunt veritatis. Excepturi, voluptatem.</div>
                    </div>
                    <div className={'bg-white p-[1rem]'}>
                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad aspernatur beatae consectetur cum, eius error fugiat hic ipsa modi nam nemo numquam possimus qui, quibusdam sunt veritatis. Excepturi, voluptatem.</div>
                    </div>
                </div>
            </section>
        </main>
        </>
    )
}