import {buildStyles, CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {Button} from "../components/Button.jsx";
export const Cursos = () => {
    return (
        <>
            <div className={'w-full bg-[#3b384d] px-[5%] py-[1rem]'}>
                <div className={'flex gap-1 text-white'}><span className={'text-blue-400'}>Inicio</span><span>/</span><span>Estoy aprendiendo</span></div>
            </div>
            <main className={"bg-[#2f2c3d] w-full h-full px-[5%] py-[1%]"}>
                <div>
                    <h3 className={'text-[3rem] text-white'}>Estoy aprendiendo</h3>
                </div>
                <div className={'mt-[1rem]'}>
                    <h4 className={'text-[1.25rem] text-[#ccc]'}>Cursos en los que estas inscrito</h4>
                </div>
                <div className={'mt-[3rem] bg-[#3b384d] w-max'}>
                    <table className="table-auto w-[39rem] text-[1rem]">
                        <thead className="text-xs font-semibold uppercase text-gray-400 bg-[#1f2937]">
                        <tr>
                            <th className="p-2">
                                <div className="font-semibold text-left">Nº</div>
                            </th>
                            <th className="p-2">
                                <div className="font-semibold text-left">Curso</div>
                            </th>
                            <th className="p-2">
                                <div className="font-semibold text-left">Descripción</div>
                            </th>
                            <th className="p-2">
                                <div className="font-semibold text-center">Avance</div>
                            </th>
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-[#2f2c3d] text-white">
                        <tr>
                            <td className="p-2">
                                <div className={'text-center'}>1</div>
                            </td>
                            <td className="p-2">
                                <div className="text-left">Programación</div>
                            </td>
                            <td className="p-2">
                                <div className="text-left text-green-300 text-[0.88rem]">Aprender a programar es un proceso amplio y diverso que implica adquirir
                                    habilidades para comunicarse con las computadoras y darles instrucciones para realizar tareas específicas</div>
                            </td>
                            <td className="p-2">
                                <div className="text-lg text-center w-[3.5rem] pb-2 hover:w-[4rem] transition-all">
                                    <CircularProgressbar
                                        styles={buildStyles({
                                        textColor: "#fff",
                                        pathColor: "#ffff00",
                                        trailColor: "#ddd"
                                    })} value={44} text={`${44}%`} />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className={'p-2'} colSpan={4}>
                                <div>Registrar un nuevo Curso <Button/></div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    )
}