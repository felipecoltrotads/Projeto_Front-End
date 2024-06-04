import './BotaoContador.css';
import Button from './components/Button';
import Contador from './components/Contador';

function BotaoContador() {

    const handleCliqueAqui = () => {
        console.log("Botão 'clique aqui' clicado")
    }

    return (
        <div>
            <h1 className="title">Primeiro projeto em ReactJS</h1>
            <h3>Criando os Primeiros componentes</h3>
            <Button texto="Clique aqui" onClickButton={handleCliqueAqui} />
            <Contador />
        </div>
    );
}

export default BotaoContador;