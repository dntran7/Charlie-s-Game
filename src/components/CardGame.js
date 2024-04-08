"use client";
import { useState, useEffect } from 'react'
import Card from './Card'
import { Button } from './ui/button'

  import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogClose,
    DialogFooter,
  } from "@/components/ui/dialog"

function initList(){
    var arr = [];
    for (var i = 0; i < 8; i++) {
        arr.push( { id: i, image: "/img/charlie-" + i + ".jpg", status: "" })
        arr.push( { id: i, image: "/img/charlie-" + i + ".jpg", status: "" })
    }
    arr = arr.sort(() => 0.5 - Math.random());
    return arr;
}
function Game(){
    const [cardObjs, setCardObjs] = useState([]);
    const [prevCard, setPrevCard] = useState(-1);
    const [isValidating, setIsValidating] = useState(false);
    const [matchedCnt, setMatchedCnt] = useState(0);

    useEffect(() => {
        const shuffleCards = initList();
        setCardObjs(shuffleCards);
    }, []);


    function validateMatch(currentIndex){
        if(currentIndex == prevCard) {
            //ignore double clicks
        }
        else if(cardObjs[currentIndex].id == cardObjs[prevCard].id){
            cardObjs[prevCard].status = "matched"
            cardObjs[currentIndex].status = "matched flippedC"
            setMatchedCnt(matchedCnt+1);
            setCardObjs([...cardObjs])
            setPrevCard(-1)
        }else{
            cardObjs[currentIndex].status = "different flippedC"
            cardObjs[prevCard].status = "different"
            setCardObjs([...cardObjs])
            setIsValidating(true);
            setTimeout(() => {
                cardObjs[prevCard].status = ""
                cardObjs[currentIndex].status = ""
                setCardObjs([...cardObjs])
                setPrevCard(-1)
                setIsValidating(false);
            }, 1000) 
        }
    }
    
    function handleClick(id){
        if (isValidating === true || cardObjs[id].status.includes("matched")) {
            //ignore clicks between validation or clicks on already matched cards
        }
        else if (prevCard === -1) {
            cardObjs[id].status = cardObjs[id].status === '' ? 'flippedC' : ''; 
            setCardObjs([...cardObjs]);
            setPrevCard(id)
        } else {
            validateMatch(id);
        }
    }
    
    function handleRestartClick(id){
        const shuffleCards = initList();
        setCardObjs(shuffleCards);
        setMatchedCnt(0);
    }
;
    const dialogDesc = "You've matched all the photos perfectly. You are safe from Charlie's wrath... for now."

    return (
    <div className="grid grid-cols-4 grid-flow-row gap-5">
         <Dialog open={matchedCnt >= 8}>
            <DialogContent handleClose={() => setMatchedCnt(0)}>
            <DialogHeader>
                <DialogTitle className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl header-center">You did it!!!</DialogTitle>
                <DialogDescription className="smallScreen:text-lg text-xl font-bold tracking-wide welcome-desc">
                {dialogDesc}
                </DialogDescription>
            </DialogHeader>
                <DialogFooter className="justify-center sm:justify-center">
                    <Button className="py-9 px-9 btn-grad" onClick={() => handleRestartClick()}>
                        <p className='text-lg font-semibold	tracking-widest'>Play again!</p>
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
         {cardObjs.map(( cardObj, index ) => {
            return (
          <Card key={index} cardObj={cardObj} id={index} handleClick={handleClick} />
        )})}
      </div>
  );
}

export default Game