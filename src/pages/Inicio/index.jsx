import styled from "styled-components";
import Hero from "../../components/Hero";

const InicioStyle = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0px 120px;
`;

function Inicio() {
  return (
    <InicioStyle>
      <Hero />
    </InicioStyle>
  );
}

export default Inicio;
