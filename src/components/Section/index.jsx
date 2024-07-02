import styled from "styled-components";
import Card from "../Card";
import React, { useRef } from "react";

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
  display: flex;
  align-items: center;
  gap: 32px;

  overflow-x: scroll;

  @media (max-width: 768px) {
    gap: 16px;
  }
`;

function Section({ videos, categoria }) {
  const videosCategoria = videos.filter((v) => v.categoria === categoria);
  const cardsRef = useRef(null);
  const currentIndex = useRef(0);

  const handlePrev = () => {
    if (currentIndex.current > 0) {
      currentIndex.current -= 1;
      cardsRef.current.style.transform = `translateX(-${currentIndex.current * 300}px)`;
    }
  };

  const handleNext = () => {
    if (currentIndex.current < cards.length - 1) {
      currentIndex.current += 1;
      cardsRef.current.style.transform = `translateX(-${currentIndex.current * 300}px)`;
    }
  };

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
          <CardsGroup ref={cardsRef}>
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
