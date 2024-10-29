import styled from "styled-components"

const FooterContainer = styled.footer`
    height: 40px;
    width: 625px;
    border: 1px solid #d6dde2; 
    // margin-top: 0px;
    padding: 5px;
    clear: both;
    background: url("../src/images/bg_footer1.jpg") center center no-repeat scroll;
`
const DivContainer = styled.div`
    width: 100%;
    height: 100%
    line-height: 40px;
    text-align: center;
    margin: 5px;
`

export default function Footer() {
    return(
        <FooterContainer>
            <DivContainer>
            <span
                    style={{
                        color: "#333", 
                        fontSize: "80%",
                        letterSpacing: ".2rem",
                        fontWeight: "bold"
                    }}
            >
                Copyright&nbsp;©&nbsp;Pavel&nbsp;Minin,&nbsp;2024
            </span>
            </DivContainer>
        </FooterContainer>
    )
}