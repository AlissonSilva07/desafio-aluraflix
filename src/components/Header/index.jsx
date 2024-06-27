import styled from "styled-components";
import BotaoHeader from "../Botoes/BotaoHeader";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  height: 80px;
  padding: 0px 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 32px;
  }

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

const FlexHorizontal = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

function Header() {
  return (
    <Nav>
      <img src={Logo} alt="" />
      <FlexHorizontal>
        <Link to="/">
          <BotaoHeader text="Home" buttonType={1} />
        </Link>
        <Link to="/novo">
          <BotaoHeader text="Novo Vídeo" buttonType={2} />
        </Link>
      </FlexHorizontal>
    </Nav>
  );
}

export default Header;
