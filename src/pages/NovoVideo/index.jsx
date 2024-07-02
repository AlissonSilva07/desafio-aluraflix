import styled from "styled-components";
import { useVideo } from "../../hooks/useVideos";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const FormLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding: 32px 120px;
`;

const TitleStyle = styled.h1`
  display: flex;
  flex-direction: column;
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

const ErrorInput = styled.span`
  color: red;
  font-size: 12px;
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
  const { postVideo } = useVideo();

  const opcoes = [
    { value: "front-end", label: "Front-End" },
    { value: "back-end", label: "Back-End" },
    { value: "mobile", label: "Mobile" },
  ];

  const navigate = useNavigate();

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    postVideo(data)
      .then((data) => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <FormLayout>
      <TitleStyle>Novo Vídeo</TitleStyle>
      <SubtitleStyle>
        Complete o formulário para criar um novo vídeo.
      </SubtitleStyle>
      <FormArea onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <label htmlFor="titulo">Título</label>
          <InputStyle
            {...register("titulo", { required: true })}
            aria-invalid={errors.titulo ? "true" : "false"}
            type="text"
            name="titulo"
            placeholder="Ex.: Título do vídeo"
          />
          {errors.titulo?.type === "required" && (
            <ErrorInput role="alert">O titulo obrigatório.</ErrorInput>
          )}
        </InputGroup>
        <InputGroup>
          <label htmlFor="categoria">Categoria</label>
          <SelectStyle
            {...register("categoria", { required: true })}
            aria-invalid={errors.categoria ? "true" : "false"}
          >
            {opcoes &&
              opcoes.map((o) => (
                <option key={o.label} value={o.value}>
                  {o.label}
                </option>
              ))}
          </SelectStyle>
          {errors.categoria?.type === "required" && (
            <ErrorInput role="alert">Campo obrigatório.</ErrorInput>
          )}
        </InputGroup>
        <InputGroup>
          <label htmlFor="imagem">Imagem</label>
          <InputStyle
            type="text"
            placeholder="Ex.: https://i.ytimg.com/vi/fWscDFHKgw8/hq720.jpg"
            {...register("capa", { required: true })}
            aria-invalid={errors.capa ? "true" : "false"}
          />
          {errors.capa?.type === "required" && (
            <ErrorInput role="alert">
              O link da imagem é obrigatório.
            </ErrorInput>
          )}
        </InputGroup>
        <InputGroup>
          <label htmlFor="video">Video</label>
          <InputStyle
            type="text"
            placeholder="Ex.: https://www.youtube.com/watch?v=R0BrkAsjfIQ"
            {...register("link", { required: true })}
            aria-invalid={errors.link ? "true" : "false"}
          />
          {errors.link?.type === "required" && (
            <ErrorInput role="alert">O link do vídeo é obrigatório.</ErrorInput>
          )}
        </InputGroup>
        <InputGroup>
          <label htmlFor="descricao">Descrição</label>
          <TextAreaStyle
            {...register("descricao", { required: false })}
            id=""
            rows="6"
            placeholder="Ex.: Descrição do vídeo"
          ></TextAreaStyle>
        </InputGroup>
        <ButtonGroup>
          <ButtonGuardar type="submit">GUARDAR</ButtonGuardar>
          <ButtonLimpar onClick={() => reset()}>LIMPAR</ButtonLimpar>
        </ButtonGroup>
      </FormArea>
    </FormLayout>
  );
}

export default NovoVideo;
