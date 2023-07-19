import NavBar from "./components/navbar/index"
import { Routes, Route } from "react-router-dom";
import Sacola from "./components/sacola";
import Cartao from "./components/cartao";
import Confirmacao from "./components/confirmacao";
import Slider from "./components/slider";
import Home from "./components/home";
import Footer from "./components/footer";
import PrimeiraCompra from "./components/primeira-compra";

function App() {
  return (
    <>
        <NavBar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sacola" element={<Sacola />} />
            <Route path="/pagamento" element={<Cartao />} />
            <Route path="/confirmacao" element={<Confirmacao />} />
            <Route path="/cupom-de-desconto/primeira-compra" element={<PrimeiraCompra />} />
          </Routes>
        <Footer/>
    </>
  );
}

export default App;
 