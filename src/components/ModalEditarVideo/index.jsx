import IconX from "../../assets/X - cancel.png";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useVideo } from "../../hooks/useVideos";
import { useNavigate } from "react-router-dom";
import { ModalContext } from "../../context/ModalContext";

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
`;

const ModalBody = styled.div`
  position: relative;
  display: flex;
  width: 40%;
  background-color: var(--bg-black);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  border: 1px solid var(--bg-cinza);
  border-radius: 6px;
  box-shadow: 3px 3px rgba(255, 255, 255, 0.2);

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 90%;
  }
`;

const ButtonFechar = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 28px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const FormLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding: 32px 64px;

  @media (max-width: 768px) {
    padding: 32px;
  }

  @media (max-width: 480px) {
    padding: 32px 16px;
  }
`;

const TitleStyle = styled.h1`
  color: var(--bg-branco);
`;

const SubtitleStyle = styled.p`
  color: var(--bg-cinza);
`;

const FormArea = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  color: var(--bg-branco);
`;

const InputGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const InputStyle = styled.input`
  width: 100%;
  position: relative;
  padding: 0.8rem;
  display: flex;
  justify-content: center;
  background-color: transparent;
  color: var(--bg-branco);
  border: none;
  border-bottom: 2px solid var(--main-azul);
`;

const SelectStyle = styled.select`
  width: 100%;
  position: relative;
  padding: 0.8rem;
  display: flex;
  justify-content: center;
  background-color: var(--bg-black);
  color: var(--bg-branco);
  border: none;
  border-bottom: 2px solid var(--main-azul);
`;

const TextAreaStyle = styled.textarea`
  width: 100%;
  position: relative;
  padding: 0.8rem;
  display: flex;
  justify-content: center;
  background-color: transparent;
  color: var(--bg-branco);
  border: none;
  border-bottom: 2px solid var(--main-azul);
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const ButtonGuardar = styled.button`
  display: flex;
  align-items: center;
  padding: 0.8rem;
  border: none;
  border-radius: 6px;
  background-color: var(--main-azul);
  color: var(--bg-branco);
  cursor: pointer;

  &:hover {
    filter: brightness(120%);
  }
`;

const ButtonLimpar = styled.button`
  display: flex;
  align-items: center;
  padding: 0.8rem;
  border: 1px solid red;
  border-radius: 6px;
  background-color: transparent;
  color: red;
  cursor: pointer;

  &:hover {
    background-color: red;
    color: var(--bg-branco);
  }
`;

function ModalEditarVideo({ idVideo }) {
  const { getVideosById , putVideo } = useVideo();
  const { handleCloseModal } = useContext(ModalContext)
  const [ videoAnterior, setVideoAnterior ] = useState({})

  const DEFAULT_FORM = {
    id: 0,
    titulo: "",
    capa: "",
    descricao: "",
    link: "",
    categoria: "",
  };

  const [formData, setFormData] = useState(DEFAULT_FORM);

  const opcoes = [
    { value: "front-end", label: "Front-End" },
    { value: "back-end", label: "Back-End" },
    { value: "mobile", label: "Mobile" },
  ];

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (idVideo, formData) {
      putVideo(idVideo, formData)
      .then((data) => {
        console.log(data);
        navigate("/");
      })
      .catch((err) => console.log(err));
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleLimpaForm = () => {
    setFormData(DEFAULT_FORM);
  };

  useEffect(() => {
    getVideosById(idVideo).then(data => {
      setVideoAnterior(data)
    }).catch(err => console.error(err))
  })

  return (
    <ModalBackground>
      <ModalBody>
        <ButtonFechar onClick={() => {handleCloseModal()}}>
          <img src={IconX} alt="Fechar" />
        </ButtonFechar>
        <FormLayout>
          <TitleStyle>Editar Vídeo</TitleStyle>
          <SubtitleStyle>Editando as informações do vídeo.</SubtitleStyle>
          <FormArea onSubmit={handleSubmit}>
            <InputGroup>
              <label htmlFor="titulo">Novo Título</label>
              <InputStyle
                type="text"
                onChange={handleInput}
                value={formData.titulo}
                name="titulo"
                placeholder={videoAnterior.titulo}
              />
            </InputGroup>
            <InputGroup>
              <label htmlFor="categoria">Nova Categoria</label>
              <SelectStyle
                name="categoria"
                onChange={handleInput}
                value={formData.categoria}
              >
                <option>Selecione uma Categoria</option>
                {opcoes &&
                  opcoes.map((o) => (
                    <option key={o.label} value={o.value}>
                      {o.label}
                    </option>
                  ))}
              </SelectStyle>
            </InputGroup>
            <InputGroup>
              <label htmlFor="imagem">Nova Imagem</label>
              <InputStyle
                type="text"
                onChange={handleInput}
                value={formData.capa}
                name="capa"
                placeholder={videoAnterior.capa}
              />
            </InputGroup>
            <InputGroup>
              <label htmlFor="video">Novo Video</label>
              <InputStyle
                type="text"
                onChange={handleInput}
                value={formData.link}
                name="link"
                placeholder={videoAnterior.link}
              />
            </InputGroup>
            <InputGroup>
              <label htmlFor="descricao">Nova Descrição</label>
              <TextAreaStyle
                name="descricao"
                onChange={handleInput}
                value={formData.descricao}
                id=""
                rows="6"
                placeholder={videoAnterior.descricao}
              ></TextAreaStyle>
            </InputGroup>
            <ButtonGroup>
              <ButtonGuardar type="submit">GUARDAR</ButtonGuardar>
              <ButtonLimpar onClick={handleLimpaForm}>LIMPAR</ButtonLimpar>
            </ButtonGroup>
          </FormArea>
        </FormLayout>
      </ModalBody>
    </ModalBackground>
  );
}

export default ModalEditarVideo;
