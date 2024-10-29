import './Pictogram.css'

export default function Pictogram({... props}) {
    return (
        <img 
            {... props}
            className={"image"} 
        />
    );
}