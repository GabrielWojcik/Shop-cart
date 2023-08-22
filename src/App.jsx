import NavBar from "./components/navbar/index"
import { Routes, Route, useParams } from "react-router-dom";
import Sacola from "./components/sacola";
import Cartao from "./components/cartao";
import Confirmacao from "./components/confirmacao";
import Slider from "./components/slider";
import Home from "./components/home";
import Footer from "./components/footer";
import PrimeiraCompra from "./components/primeira-compra";
import CardItens from "./components/card-itens";
import Item from "./components/item/Item";
import Login from "./components/login";

function App() {
// AIzaSyCudGqYICsyK9FvsoHRq1LdIYHk8HxmOOU
  return (
    <>
        <NavBar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sacola" element={<Sacola />} />
            <Route path="/pagamento" element={<Cartao />} />
            <Route path="/confirmacao" element={<Confirmacao />} />
            <Route path="/cupom-de-desconto/primeira-compra" element={<PrimeiraCompra />} />
            <Route path="/product/:id" element={<CardItens />} />
            <Route path="/product/item" element={<Item />} />
            <Route path="/entrar" element={<Login />} />
          </Routes>
        <Footer/>
    </>
  );
}

export default App;
 