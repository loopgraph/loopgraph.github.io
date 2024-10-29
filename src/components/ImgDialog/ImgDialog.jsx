import { createPortal } from 'react-dom'
import './ImgDialog.css'
import { useRef, useEffect } from 'react'
import Legend from '../Legend/Legend'
import { textContent } from '../../data'

export default function ImgDialog({ open, onCloseClick }) {
    const dialog = useRef()
    const imgCaption = {
        1: textContent.image2,
        2: textContent.image1,
    }
    const imgData = {
        1: {
            src: "../src/images/Murano.jpg",
            alt: "Murano",
            width: 340,
            height: 320,
        },
        2: {
            src: "../src/images/Borges_Labyrinth_H.jpg",
            alt: "Borges Labyrinth",
            width: 340,
            height: 260,
        },
    }
    useEffect(
        () => {
            if (open) {
                dialog.current.showModal()
            } else {
                dialog.current.close()
            }
        }, [open]
    )
    return (
        createPortal(
            (
                <dialog ref={dialog}>
                    {open && 
                        <>
                            <div style={{ float: "right"}}>
                                <img 
                                    src="../src/images/x_square.svg" 
                                    alt="Close" 
                                    width={"10"}
                                    height={"10"}
                                    style={{cursor: "pointer"}}
                                    onClick={onCloseClick}
                                />
                            </div>
                            <img { ... imgData[open] } />
                            <Legend caption={imgCaption[open]} />
                        </>
                    }
                </dialog>
            ),
            document.getElementById('modal')
        )
    )
}
