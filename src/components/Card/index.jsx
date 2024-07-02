import IconDeletar from "../../assets/Vector.png";
import IconEditar from "../../assets/Vector-1.png";
import styled from "styled-components";
import { useVideo } from "../../hooks/useVideos";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";


const CardStyle = styled.div`
  position: relative;
  width: 320px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid var(--bg-cinza);
`;

const CardInfoGroup = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const CardTitle = styled.h3`
  color: var(--bg-branco);
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;

const CardDescricao = styled.p`
  color: var(--bg-cinza);
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

const CardButtonGroup = styled.div`
  display: flex;
  align-items: center;
`;

const CardButton = styled.button`
  flex: 1;
  padding: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: transparent;
  color: var(--bg-branco);
  outline: none;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: var(--bg-cinza);
  }
`;

const IconStyle = styled.img`
  width: 18px;
`;

function Card({ unique, capa, titulo, descricao }) {
  const { deleteVideo } = useVideo();
  const navigate = useNavigate();
  const { handleOpenModal } = useContext(ModalContext)

  const handleDelete = async (id) => {
    deleteVideo(id)
      .then(data => {
        console.log(data)
        navigate("/")
      })
      .catch((err) => console.log(id, err));
  };

  return (
    <>
      <CardStyle>
        <img src={capa} alt="" />
        <CardInfoGroup>
          <CardTitle>{titulo}</CardTitle>
          <CardDescricao>{descricao}</CardDescricao>
          <CardButtonGroup>
            <CardButton onClick={() => handleDelete(unique)}>
              <IconStyle src={IconDeletar} alt="Deletar" />
              DELETAR
            </CardButton>
            <CardButton onClick={() => {handleOpenModal(unique)}}>
              <IconStyle src={IconEditar} alt="Editar" />
              EDITAR
            </CardButton>
          </CardButtonGroup>
        </CardInfoGroup>
      </CardStyle>
    </>
  );
}

export default Card;
