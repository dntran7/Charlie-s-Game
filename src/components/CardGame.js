"use client";
import { useState, useEffect } from 'react'
import Card from './Card'


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

    return (
    <div className="grid 2xl:grid-cols-4 grid-flow-row gap-5">
         {cardObjs.map(( cardObj, index ) => {
            return (
          <Card key={index} cardObj={cardObj} id={index} handleClick={handleClick} />
        )})}
      </div>
  );
}

export default Game