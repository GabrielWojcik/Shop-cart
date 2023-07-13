import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./styles.css"
import Desconto from "../../assets/icons/desconto.svg"
import Cart from "../../assets/icons/cart.svg"
import PrimeiraCompra from "../../assets/icons/plus.svg"
import Favorito from "../../assets/icons/favorito.svg"

export default function MenuSlider() {
    const icons = [
        {
            "id": 1,
            "text" : "Serviços em Loja",
            "icon" : Cart
        },

        {
            "id": 2,
            "text" : "Primeira Compra",
            "icon" : 'Sacola'
        },
        {
            "id": 3,
            "text" : "Promoções",
            "icon" :  Desconto
        },
        {
            "id": 4,
            "text" : "WhatsApp",
            "icon" : 'Sacola'
        },
        {
            "id": 5,
            "text" : "Mais Vendidos",
            "icon" : PrimeiraCompra
        },
        {
            "id": 6,
            "text" : "Lançamentos",
            "icon" : Favorito
        },
    ]

    const [sliderRef] = useKeenSlider({
        loop: true,
        mode: "free-snap",
        slides: {
          origin: "center",
          perView: 2,
          spacing: 15,
        },
      })

    return(
    <div ref={sliderRef} className="keen-slider">
        {
            icons.map(item => {
                return(
                    <div className="keen-slider__slide number-slide1">
                        <div>
                            <img src={item.icon} />
                            {item.text}
                        </div>
                    </div>

                )

            })
        }
    </div>       
    )
}