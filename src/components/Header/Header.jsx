import logo from '/icon_title_find_all.svg'
import styled from 'styled-components'

const HeaderContainer = styled.header`
    border: 1px solid #d6dde2; 
    height: 110px;
    width: 625px;
    padding: 5px;
    background: url("/bg_header1.jpg") center center no-repeat scroll;
`
const DivContainer = styled.div`
    width: 100%;
    height: 100%
    margin: 5px;
`

export default function Header() {

    return(
        <HeaderContainer>
            <DivContainer>
                <img 
                    src={logo} 
                    alt={"CountRoutes"} 
                    width={"375"}
                    height={"95"}
                />
                <span
                    style={{color: "#666", fontSize: "70%"}}
                >Github Repository:</span>&nbsp; 
                <a 
                    href="https://github.com/loopgraph/countroutes"
                >countroutes</a>
            </DivContainer>
        </HeaderContainer>
    );
  }
  