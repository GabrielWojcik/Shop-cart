import { Code, ContainerPrimeiraCompra, CupomContainer, Describe } from "./styles";

export default function PrimeiraCompra() {
    return(
        <ContainerPrimeiraCompra>
            <CupomContainer>
                <Describe>
                    <strong>Aprovite 10% OFF Na Sua Primeira Compra!</strong>
                    <p>Válido Apenas Para A Primeira Compra, Para Itens Dessa Página
                    E Não Cumulativo Com Lançamentos E Promoções.
                    </p>
                </Describe>
                <Code>
                    <button id="btn-codigo">CUPOM: BEMVINDO10</button>
                    <button id="btn-copy">COPIAR</button>
                </Code>
            </CupomContainer>
        </ContainerPrimeiraCompra>
    )
}