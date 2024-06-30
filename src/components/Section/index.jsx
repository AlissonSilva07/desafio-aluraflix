import styled from "styled-components";
import Card from "../Card";

const SectionStyle = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const SectionTitle = styled.h2`
  color: var(--bg-branco);
`;

const CardsGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(1fr, 4);
`;

function Section({ videos, categoria }) {
  const videosCategoria = videos.filter((v) => v.categoria === categoria);

  return (
    <SectionStyle>
      <SectionTitle>{categoria.toUpperCase()}</SectionTitle>
      <CardsGroup>
        {videosCategoria &&
          videosCategoria.map((v) => (
            <Card
              key={v.id}
              titulo={v.titulo}
              capa={v.capa}
              link={v.link}
              categoria={v.categoria}
              descricao={v.descricao}
            />
          ))}
      </CardsGroup>
    </SectionStyle>
  );
}

export default Section;
