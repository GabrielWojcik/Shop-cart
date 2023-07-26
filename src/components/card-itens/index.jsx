import img1 from "../../assets/image-3.png"
import { CardItensContainer, ContainerProduct, Star, Product, ProductDesc } from "./styles"
import { MdFavoriteBorder } from 'react-icons/md'

export default function CardItens(){
    return(
        <CardItensContainer>
            <ContainerProduct>
                <Star>
                    <MdFavoriteBorder size={18} />
                </Star>
                <Product>
                    <img src={img1} alt="" />
                </Product>
              
            </ContainerProduct>
            <ProductDesc>
                    <strong id="title">LILY</strong>
                    <p className="descricao">Refil Creme Acetinado Desodorante Hidratante Corporal 250g</p>
                    <strong id="price">R$ 68,90</strong>
                    <p id="price-value">3x de R$ 22,97</p>
                    <p className="descricao">O Refil Creme Acetinado Desodorante Hidratante Corporal Lily 
                    entrega perfumação prolongada e fragrância intensa para sua pele na medida certa.</p>
                    <button>COMPRE AGORA</button>
                </ProductDesc>
        </CardItensContainer>
    )
}