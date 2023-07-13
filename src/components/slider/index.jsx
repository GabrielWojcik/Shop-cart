import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"
import  Banner from "../../assets/banners/banner-1.webp"
import "./styles.css"

export default function Slider() {
   const [sliderRef] = useKeenSlider()

  return (
    <div ref={sliderRef} className="keen-slider">
          <div  className="keen-slider__slide number-slide2">
              <div className="container-slider-principal">
                <img id="img-banner-principal" alt="" src={Banner} />
              </div>
          </div>
          <div  className="keen-slider__slide number-slide2">
              <div className="container-slider-principal">
                <img id="img-banner-principal" alt="" src={Banner} />
              </div>
          </div>
    </div>
  )
}