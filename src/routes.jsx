import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaBase from "./pages/PaginaBase";
import Inicio from "./pages/Inicio";
import NovoVideo from "./pages/NovoVideo";
import { ModalProvider } from './context/ModalContext' 

function AppRoutes() {
  return (
    <BrowserRouter>
      <ModalProvider>
        <Routes>
          <Route path="/" element={<PaginaBase />}>
            <Route index element={<Inicio />}></Route>
            <Route path="novo" element={<NovoVideo />}></Route>
          </Route>
        </Routes>
      </ModalProvider>
    </BrowserRouter>
  );
}

export default AppRoutes;
