import MenuSlider from "../menu-slider";
import Slider from "../slider";
import { HomeContainer } from "./styles";

export default function Home() {
    return(
        <HomeContainer>
            <Slider />
            <MenuSlider />
        </HomeContainer>
    )
}