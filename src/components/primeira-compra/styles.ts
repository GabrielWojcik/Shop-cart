import { styled } from "styled-components";

export const ContainerPrimeiraCompra = styled.div`


`

export const CupomContainer = styled.div`
    display: flex;
    padding: 10px;

    background-color: #ffe1ec;

`

export const Describe = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    text-align: right;
    
    p {
        font-size: 12px;
    }

    strong {
        font-size: 16px;
    }
`
export const Code = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    
    #btn-codigo {
        width: 69%;
        max-width: 220px;
        border: 1px dotted #FF005C;
        padding: 7px;
        border-radius: 4px;
        text-transform: uppercase;
        text-align: center;
        background: white;
        color: black;
    }

    #btn-copy {
        width: 69%;
        max-width: 220px;
        border: 1px solid #FF005C;
        padding: 8px;
        color: black;
        border-radius: 4px;
        text-transform: uppercase;
        text-align: center;
        background-color: #fff;
        cursor: pointer;
    }
`