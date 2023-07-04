import NavBar from "./components/navbar/index"
import { Routes, Route } from "react-router-dom";
import Sacola from "./components/sacola";
import Cartao from "./components/cartao";
import Confirmacao from "./components/confirmacao";

function App() {
  return (
    <>
        <NavBar/>
          <Routes>
            <Route path="/sacola" element={<Sacola />} />
            <Route path="/pagamento" element={<Cartao />} />
            <Route path="/confirmacao" element={<Confirmacao />} />
          </Routes>
    </>
  );
}

export default App;
 