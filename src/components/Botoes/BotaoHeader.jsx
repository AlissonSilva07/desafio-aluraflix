import styled from "styled-components";

const BotaoHome = styled.button`
  display: flex;
  align-items: center;
  padding: 0.8rem;
  border: none;
  border-radius: 6px;
  background-color: var(--bg-cinza);
  color: var(--bg-branco);
  cursor: pointer;
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
`;

function BotaoHeader({ text, buttonType }) {
  return buttonType === 1 ? (
    <BotaoHome>{text}</BotaoHome>
  ) : buttonType === 2 ? (
    <BotaoNovoVideo>{text}</BotaoNovoVideo>
  ) : null;
}

export default BotaoHeader;
