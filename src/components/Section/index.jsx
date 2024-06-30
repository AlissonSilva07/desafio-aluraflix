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
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

function Section({ videos, categoria }) {
  const videosCategoria = videos.filter((v) => v.categoria === categoria);

  return (
    <SectionStyle>
      {videosCategoria && (
        <>
          <SectionTitle>{categoria.toUpperCase()}</SectionTitle>
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
