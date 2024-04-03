import { Button } from './ui/button'

export default function Card({cardObj, id, handleClick}){
    const statusClass = cardObj.status ? " flipped " + cardObj.status : ""

    return (
        <Button className={"btn-primary w-[75px] h-[75px] md:w-[200px] md:h-[200px] " + statusClass}  onClick={() => handleClick(id)}>
            { cardObj.status ? <img className="rounded-md" src={cardObj.image} alt="Picture of Charlie" /> : ''}
        </Button>
    )
} 