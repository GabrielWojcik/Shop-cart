import img1 from "../../assets/image-3.png"
import coracao from "../../assets/favorite.png"
import { CardItensContainer, ContainerProduct, Star, Product } from "./styles"
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
        </CardItensContainer>
    )
}