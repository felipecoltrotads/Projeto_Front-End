import { useEffect, useState } from "react";

const UseEffect = () => {

    const [myState, setMyState] = useState();
    const [myState2, setMyState2] = useState();

    useEffect(() => {
        console.log("useEffect executado na montagem e atualização do componente")
    }, [myState, myState2])

    useEffect(() => {
        console.log("useEffect executado na montagem do componente")
    }, [])

    useEffect(() => {
        return () => {
            console.log("Função executada na desmontagem do componente")
        }
    }, [])


    const updateMyState = () => {
        setMyState("meu novo myState")
    }

    return (
        <div>
            <button onClick={updateMyState}>Disparar useEffect</button>
        </div>
    );
}

export default UseEffect;