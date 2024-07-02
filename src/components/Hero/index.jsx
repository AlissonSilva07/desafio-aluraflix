import styled from "styled-components";
import { Link } from "react-router-dom";

const HeroStyle = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 32px;
`;

const HeroImg = styled.img`
  width: 40%;
  border-radius: 6px;
`;

const HeroInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const HeroTitle = styled.p`
  color: var(--bg-branco);
  font-size: 48px;
  font-weight: bold;
`;

const HeroSubtitle = styled.p`
  color: var(--bg-cinza);
`;

const HeroCategoria = styled.span`
  width: fit-content;
  color: ${(props) => props.color};
  border-radius: 6px;
`;

const HeroButton = styled.button`
  width: fit-content;
  border: none;
  border-radius: 6px;
  padding: 1rem;
  background-color: red;
  color: var(--bg-branco);
  font-weight: bold;
  cursor: pointer;

  &:hover {
    filter: brightness(80%);
  }
`;

function Hero({ video }) {
  return (
    <HeroStyle>
      <HeroImg src={video.capa} alt={video.titulo} />
      <HeroInfo>
        <HeroTitle>{video.titulo}</HeroTitle>
        <HeroCategoria
          color={
            video.categoria === "front-end"
              ? "#155e75"
              : categoria === "back-end"
              ? "#86198f"
              : categoria === "mobile"
              ? "#3f6212"
              : "white"
          }
        >
          {video.categoria}
        </HeroCategoria>
        <HeroSubtitle>{video.descricao}</HeroSubtitle>
        <Link to={video.link} target="_blank">
          <HeroButton>Assistir Agora</HeroButton>
        </Link>
      </HeroInfo>
    </HeroStyle>
  );
}

export default Hero;
