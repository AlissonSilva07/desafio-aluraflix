import styled from "styled-components";
import Hero from "../../components/Hero";
import Section from "../../components/Section";
import { useContext, useEffect, useState } from "react";
import { useVideo } from "../../hooks/useVideos";
import ModalEditarVideo from '../../components/ModalEditarVideo/index'
import { ModalContext } from "../../context/ModalContext";

const InicioStyle = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 0px 120px;
`;

function Inicio() {
  const { getVideos } = useVideo();
  const [videos, setVideos] = useState([]);
  const { showModal, idVideoEdit } = useContext(ModalContext)

  useEffect(() => {
    getVideos()
      .then((data) => {
        setVideos(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <InicioStyle>
      <Hero />
      <Section videos={videos} categoria="front-end" />
      <Section videos={videos} categoria="back-end" />
      <Section videos={videos} categoria="mobile" />

      {showModal && <ModalEditarVideo idVideo={idVideoEdit} />}
    </InicioStyle>
  );
}

export default Inicio;
