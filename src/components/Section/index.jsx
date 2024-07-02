import styled from "styled-components";
import Card from "../Card";

const SectionStyle = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const SectionTitle = styled.div`
  width: fit-content;
  padding-bottom: 0.4rem;
  display: flex;
  flex-direction: column;
  color: var(--bg-branco);
  font-size: 24px;
  font-weight: bold;

  border-bottom: 8px solid ${(props) => props.color};
`;

const CardsGroup = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

function Section({ videos, categoria }) {
  const videosCategoria = videos.filter((v) => v.categoria === categoria);

  return (
    <SectionStyle>
      {videosCategoria.length > 0 && (
        <>
          <SectionTitle
            color={
              categoria === "front-end"
                ? "#155e75"
                : categoria === "back-end"
                ? "#86198f"
                : categoria === "mobile"
                ? "#3f6212"
                : "white"
            }
          >
            {categoria.toUpperCase()}
          </SectionTitle>
          <CardsGroup>
            {videosCategoria.map((v) => (
              <Card
                key={v.id}
                unique={v.id}
                titulo={v.titulo}
                capa={v.capa}
                link={v.link}
                categoria={v.categoria}
                descricao={v.descricao}
              />
            ))}
          </CardsGroup>
        </>
      )}
    </SectionStyle>
  );
}

export default Section;
