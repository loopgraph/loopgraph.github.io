import styled from 'styled-components';

const CentralSection = styled.div`
    box-sizing: border-box;
    max-width: 620px;
    display: block;
    vertical-align: baseline;
    unicode-bidi: isolate;
    margin: 10px;
`
const LeftSection = styled.div`
    float: left;
    width: 180px;
    margin-right: 10px;
`
const MiddleSection = styled.div`
    float: left;
    width: 180px;
`
const RightSection = styled.div`
    float: left;
    width: 240px;
    margin-left: 10px;
`
const GreySection = styled.div`
    clear: both;
    min-width: 350px;
    margin: 10px;
`
const LeftFooterSection = styled.div`
    width: 220px;
    margin-left: 10px;
    margin-right: 10px;
    float: left;
`
const RightFooterSection = styled.div`
    width: 330px;
    margin-right: 10px;
    margin-left: 10px;
    float: left;
`
const H3Container = styled.h3`
    margin-top: 20px;
    padding-bottom: 0px; 
    font-size: 1.5em; 
    letter-spacing: .15em; 
    font-weight: bold; 
    color: #333; 
`
const H4Container = styled.h4`
    font-weight: bold;
    font-style: normal;
    display: inline;
    margin-bottom: 8px;
    padding: 5px;
    background: #dfdfdf;
    color: #666;
    -moz-border-radius-topleft: 5px;
    -khtml-border-radius-topleft: 5px;
    -webkit-border-top-left-radius: 5px;
    -moz-border-radius-topright: 5px;
    -khtml-border-radius-topright: 5px;
    -webkit-border-top-right-radius: 5px;
    -moz-border-radius-bottomright: 5px;
    -khtml-border-radius-bottomright: 5px;
    -webkit-border-bottom-right-radius: 5px;
    -moz-border-radius-bottomleft: 5px;
    -khtml-border-radius-bottomleft: 5px;
    -webkit-border-bottom-left-radius: 5px;
`
const ImgIconContainer = styled.img`
  -moz-border-radius-topleft: 3px;
  -khtml-border-radius-topleft: 3px;
  border-top-left-radius: 3px;
  -moz-border-radius-topright: 3px;
  -khtml-border-radius-topright: 3px;
  border-top-right-radius: 3px;
  -moz-border-radius-bottomright: 3px;
  -khtml-border-radius-bottomright: 3px;
  border-bottom-right-radius: 3px;
  -moz-border-radius-bottomleft: 3px;
  -khtml-border-radius-bottomleft: 3px;
  border-bottom-left-radius: 3px;
  border: 1px solid #333;
  padding: 2px;
  margin-left: 15px;
  margin-right: 5px;
`
const CaptionContainer = styled.h3`
    background: url(../src/images/separ2.png) repeat-x bottom; 
    padding-bottom: 8px; 
    font-size: 1.2em; 
    font-weight: normal; 
    letter-spacing: .10em; 
    color: #333;
`
const PText = styled.p`
    text-align:justify;
    font-size: 1em; 
    text-indent: 0.9em;
    margin-top: 10px;
    margin-bottom: 10px;
    color: #666
`
const ImgCaption = styled.p`
    font-size: .8em;
    color: #666;
    font-style: italic;    
`

export const mstyle = {
    centralSection: CentralSection,
    leftSection: LeftSection,
    rightSection: RightSection,
    middleSection: MiddleSection,
    greySection: GreySection,
    leftFooterSection: LeftFooterSection,
    rightFooterSection: RightFooterSection,
    h3Container: H3Container,
    h4Container: H4Container,
    captionContainer: CaptionContainer,
    pText: PText,
    imgCaption: ImgCaption,
    imgIconContainer: ImgIconContainer,
}