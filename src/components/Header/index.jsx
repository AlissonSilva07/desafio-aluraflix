import styled from "styled-components";
import BotaoHeader from "../Botoes/BotaoHeader";
import Logo from '../../assets/Logo.png'

const Nav = styled.nav`
  height: 80px;
  padding: 0px 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FlexHorizontal = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`

function Header() {
  return (
    <Nav>
      <img src={Logo} alt="" />
      <FlexHorizontal>
        <BotaoHeader text="Home" buttonType={1} />
        <BotaoHeader text="Novo Vídeo" buttonType={2} />
      </FlexHorizontal>
    </Nav>
  );
}

export default Header;
