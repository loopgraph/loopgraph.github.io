import { useState } from "react";
import { mstyle } from "./mstyle";
import { textContent } from "../../data";
import Pictogram from "../Pictogram/Pictogram";
import ImgDialog from "../ImgDialog/ImgDialog";

export default function MainPage() {
    const [modal, setModal] = useState(0)
    const captions = {
        cap1: "Bottleneck Quest Algorithm",
        cap2: "Blind pass road",
        cap3: "Bottlenecks",
        cap4: "Examples:",
        cap5: "Parameters"
    }
    
    return(
        <section>
            <mstyle.centralSection>
                <mstyle.h3Container>
                    <mstyle.imgIconContainer 
                        src="../src/images/icon_find_narrow.svg" 
                        width={"20px"} 
                        height={"20px"} />
                    {captions.cap1}
                </mstyle.h3Container>
                <mstyle.pText>{textContent.annotation}</mstyle.pText>
                <mstyle.leftSection>
                    <mstyle.captionContainer>{captions.cap2}</mstyle.captionContainer>
                    <mstyle.pText>{textContent.blindpass}</mstyle.pText>
                </mstyle.leftSection>
                <mstyle.middleSection>
                    <mstyle.captionContainer>{captions.cap3}</mstyle.captionContainer>
                    <mstyle.pText>{textContent.bottleneck}</mstyle.pText>
                </mstyle.middleSection>
                <mstyle.rightSection>
                    <mstyle.captionContainer>{captions.cap5}</mstyle.captionContainer>
                    <mstyle.pText>{textContent.parameters}</mstyle.pText>
                </mstyle.rightSection>
            </mstyle.centralSection>
            <mstyle.greySection>
                <mstyle.h4Container>{captions.cap4}</mstyle.h4Container>
            </mstyle.greySection>
            <mstyle.leftFooterSection>
                <mstyle.imgCaption>
                    {/* <ModalImage
                        small="../src/images/Borges_Labyrinth_H_small.jpg"
                        large="../src/images/Borges_Labyrinth_H_large.jpg"
                        alt="Borges Labyrinth"
                        className="mapimg"
                    /> */}
                    <Pictogram 
                        src="../src/images/Murano.jpg" 
                        alt="Murano" 
                        width={"160"}
                        height={"150"}
                        onClick={() => setModal(1)}
                    />
                    {textContent.image2}
                </mstyle.imgCaption>
            </mstyle.leftFooterSection>
            <mstyle.rightFooterSection>
                <mstyle.imgCaption>
                    <Pictogram 
                        src="../src/images/Borges_Labyrinth_H.jpg" 
                        alt="Borges Labyrinth" 
                        width={"147"}
                        height={"113"}
                        onClick={() => setModal(2)}
                    />
                    {textContent.image1}
                </mstyle.imgCaption>
            </mstyle.rightFooterSection>
            <ImgDialog open={modal} onCloseClick={() => setModal(0)} />
        </section>
    )
}