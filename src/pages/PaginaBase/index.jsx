import { Outlet } from "react-router-dom";
import EstilosGlobais from "../../components/EstilosGlobais";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

function PaginaBase() {
  return (
    <main>
      <EstilosGlobais />
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}

export default PaginaBase;
