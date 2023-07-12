import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./styles.css"

export default function MenuSlider() {
    const icons = [
        {
            "id": 1,
            "text" : "Serviços em Loja",
            "icon" : 'Casa'
        },

        {
            "id": 2,
            "text" : "Primeira Compra",
            "icon" : 'Sacola'
        },
        {
            "id": 3,
            "text" : "Promoções",
            "icon" : 'Sacola'
        },
        {
            "id": 4,
            "text" : "WhatsApp",
            "icon" : 'Sacola'
        },
        {
            "id": 5,
            "text" : "Mais Vendidos",
            "icon" : 'Sacola'
        },
        {
            "id": 6,
            "text" : "Lançamentos",
            "icon" : 'Sacola'
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
                        {item.text}
                    </div>

                )

            })
        }
    </div>       
    )
}