import { useState } from "react";
import styled from "styled-components";
import { useVideo } from "../../hooks/useVideos";
import { useNavigate } from "react-router-dom";

const FormLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding: 32px 120px;
`;

const TitleStyle = styled.h1`
  color: var(--bg-branco);
`;

const SubtitleStyle = styled.p`
  color: var(--bg-cinza);
`;

const FormArea = styled.form`
  width: 50%;
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
  background-color: transparent;
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

function NovoVideo() {
  const { postVideos } = useVideo()

  const DEFAULT_FORM = {
    id: 0,
    titulo: "",
    capa: "",
    descricao: "",
    link: "",
    categoria: "",
  }
  const [ formData, setFormData ] = useState(DEFAULT_FORM);

  const opcoes = [
    { value: "front-end", label: "Front-End" },
    { value: "back-end", label: "Back-End" },
    { value: "mobile", label: "Mobile" },
  ];

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()    
    postVideos(formData).then(data => {
      console.log(data)
      navigate('/')
    }).catch(err => console.log(err))
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  const handleLimpaForm = () => {
    setFormData(DEFAULT_FORM)
  }

  return (
    <FormLayout>
      <TitleStyle>Novo Vídeo</TitleStyle>
      <SubtitleStyle>
        Complete o formulário para criar um novo vídeo.
      </SubtitleStyle>
      <FormArea onSubmit={handleSubmit}>
        <InputGroup>
          <label htmlFor="titulo">Título</label>
          <InputStyle type="text" onChange={handleInput} value={formData.titulo} name="titulo" placeholder="Ex.: Teste" />
        </InputGroup>
        <InputGroup>
          <label htmlFor="categoria">Categoria</label>
          <SelectStyle name="categoria" onChange={handleInput} value={formData.categoria}>
              <option>Selecione uma Categoria</option>
              {opcoes && opcoes.map(o => (
                <option key={o.label} value={o.value}>{o.label}</option>
              ))}
          </SelectStyle>
        </InputGroup>
        <InputGroup>
          <label htmlFor="imagem">Imagem</label>
          <InputStyle type="text" onChange={handleInput} value={formData.capa} name="capa" placeholder="Ex.: Teste" />
        </InputGroup>
        <InputGroup>
          <label htmlFor="video">Video</label>
          <InputStyle type="text" onChange={handleInput} value={formData.link} name="link" placeholder="Ex.: Teste" />
        </InputGroup>
        <InputGroup>
          <label htmlFor="descricao">Descrição</label>
          <TextAreaStyle name="descricao" onChange={handleInput} value={formData.descricao} id="" rows="6"></TextAreaStyle>
        </InputGroup>
        <ButtonGroup>
          <ButtonGuardar type="submit">GUARDAR</ButtonGuardar>
          <ButtonLimpar onClick={handleLimpaForm}>LIMPAR</ButtonLimpar>
        </ButtonGroup>
      </FormArea>
    </FormLayout>
  );
}

export default NovoVideo;
