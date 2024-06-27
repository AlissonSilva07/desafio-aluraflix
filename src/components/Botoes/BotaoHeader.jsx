import styled from "styled-components";

const BotaoHome = styled.button`
  display: flex;
  align-items: center;
  padding: 0.8rem;
  background-color: transparent;
  border: none;
  border-radius: 6px;
  color: var(--bg-branco);
  cursor: pointer;

  &:hover {
    color: var(--bg-branco);
    background-color: var(--bg-cinza);
  }
`;

const BotaoNovoVideo = styled.button`
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

function BotaoHeader({ text, buttonType }) {
  return buttonType === 1 ? (
    <BotaoHome>{text}</BotaoHome>
  ) : buttonType === 2 ? (
    <BotaoNovoVideo>{text}</BotaoNovoVideo>
  ) : null;
}

export default BotaoHeader;
