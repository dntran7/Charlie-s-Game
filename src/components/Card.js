import { Button } from './ui/button'

export default function Card({cardObj, id, handleClick}){
    const statusClass = cardObj.status ? " flipped " + cardObj.status : ""

    return (
        <Button className={"btn-primary 2xl:w-[200px] 2xl:h-[200px]" + statusClass} onClick={() => handleClick(id)}>
            { cardObj.status ? <img className="rounded-md" src={cardObj.image}  width={500} height={500} alt="Picture of Charlie" /> : ''}
        </Button>
    )
} 