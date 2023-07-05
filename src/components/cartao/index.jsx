import "./styles.css";
import Pagamento from "../pagamento/index"

export default function Cartao() {
    return(
        <div className="main">
        <div className="container-main">
        <div className="container-dados">
            <div className="titulo-container">
                <p className="titulo">Cartão de Crédito</p>
            </div>
           <div className="container-campos">
                <label>Número</label>
                <input className="input-cartao" type="number" />
           </div>
           <div className="container-campos">
                <label>Nome do titular do cartão</label>
                <input className="input-cartao" type="number" placeholder="Nome impresso no cartão" />
           </div>
           <div className="container-campos-finais">
                <div className="data">
                    <label>Data de validade</label>
                    <input className="input-data" type="number" />
                </div>

                <div className="cvv">
                    <label>Código CVV:</label>
                    <input className="input-cvv" type="number" />
                </div>
            
           </div>
        </div>
        </div>
        <Pagamento />
    </div>
    )
}