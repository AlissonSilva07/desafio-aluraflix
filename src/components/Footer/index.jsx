import styled from "styled-components"

const FooterStyle = styled.footer`
    width: 100%;
    height: 125px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--bg-branco);
    font-weight: bold;
`

function Footer() {
    return (
        <FooterStyle>
            <p>Aluraflix &#64; 2024</p>
        </FooterStyle>
    )
}

export default Footer