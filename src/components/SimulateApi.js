import { useEffect, useState } from "react";
import "./SimulateApi.css"

const infoCampoMourao = {
    dataCriacao: '10/10/1947',
    nome: "Campo Mourão",
    qtdHabitantes: 99000,
    universidade: ['Integrado', 'UTFPR', 'UNICAMPO', 'UniCesumar']
}

const SimulateApi = () => {
    const [info, setInfo] = useState();

    useEffect(() => {
        setTimeout(() => {
            setInfo(infoCampoMourao);
        }, 1000)
    }, [])


    return (<div className="container">
        {info ? (
            <div>
                <h3>{info.nome}</h3>
                <h4>{info.dataCriacao}</h4>
                <h5>{info.qtdHabitantes}</h5>
                {info.universidade.map((universidade => <div>{universidade}</div>))}
            </div>
        ) : (
            <div>Carregando...</div>
        )}
    </div>
    );
}

export default SimulateApi;