import styled from "styled-components";

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
  color: var(--bg-cinza);
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
  color: var(--bg-cinza);
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
  color: var(--bg-cinza);
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
  return (
    <FormLayout>
      <TitleStyle>Novo Vídeo</TitleStyle>
      <SubtitleStyle>
        Complete o formulário para criar um novo vídeo.
      </SubtitleStyle>
      <FormArea action="">
        <InputGroup>
          <label htmlFor="titulo">Título</label>
          <InputStyle type="text" name="titulo" placeholder="Ex.: Teste" />
        </InputGroup>
        <InputGroup>
          <label htmlFor="categoria">Categoria</label>
          <SelectStyle name="categoria" id="">
            <option value="1">Cat</option>
          </SelectStyle>
        </InputGroup>
        <InputGroup>
          <label htmlFor="imagem">Imagem</label>
          <InputStyle type="text" name="imagem" placeholder="Ex.: Teste" />
        </InputGroup>
        <InputGroup>
          <label htmlFor="video">Video</label>
          <InputStyle type="text" name="video" placeholder="Ex.: Teste" />
        </InputGroup>
        <InputGroup>
          <label htmlFor="descricao">Descrição</label>
          <TextAreaStyle name="descricao" id="" rows="6"></TextAreaStyle>
        </InputGroup>
        <ButtonGroup>
          <ButtonGuardar>GUARDAR</ButtonGuardar>
          <ButtonLimpar>LIMPAR</ButtonLimpar>
        </ButtonGroup>
      </FormArea>
    </FormLayout>
  );
}

export default NovoVideo;
