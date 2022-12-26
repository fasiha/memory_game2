import './play.css'
import React, { useState, useEffect,useContext } from 'react';
import { ThemeContext } from '../../App';

import r from '../../images/back-r/astronaut.png'
import g from '../../images/back-r/blue2.png'


class Card {
    constructor(num,url,back){
        this.num = num;
        this.url = url;
        this.back = back;
    }

}

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
const images = importAll(require.context('../../images/cards-r', false, /\.(png|jpe?g|svg)$/));
 


const Play = ({sets}) =>{
    const  {green} = useContext(ThemeContext)
    const [chosen,setChosen] = useState([])
    
    let cardsList = []
    for (const[key,value] of Object.entries(images)){
        const num = key.split('_').at(-1).split('.').at(0);
        const url = value;
        const back = green? g : r;
        const card = new Card(num,url,back)
        cardsList.push(card)
    }
    // take 16 carads to the field
    const [fields, setFields] = useState(cardsList.slice(0,16))
    cardsList = cardsList.slice(16)
    console.log(fields)

    function handleClick(e,card){
        e.target.src= card.url
        e.target.id = 'open'
        setChosen(prev =>[...prev,card])
        if (chosen.length==1){
            // get open card 
            let open = document.querySelector('#open')
            // check pair 
            if (chosen.at(0).num ==card.num){
                console.log('pair')
                sets.setPairs(prev=>prev+1)
                // put new 2 cards 
                const first = cardsList.shift()
                const second = cardsList.shift()
                const newFields = fields.map((obj)=>{
                    console.log(e.target.src,obj.url)
                    if (obj.url==chosen.at(0).url){
                        console.log('match')
                        return first
                    }
                    else if (obj.url.split('/').at(-1)==e.target.src.split('/').at(-1)){
                        console.log('match')
                        return second
                    }
                    return obj
                })
                console.log(newFields)

                setFields(newFields)
                setChosen([])

            }
            else 
            { console.log('not pair')
              sets.setTrial(prev=>prev+1)
              // flip back after 3 seconds

              setTimeout(()=>{
              e.target.src= card.back
              open.removeAttribute('id')
              open.src=card.back
              setChosen([])
            },2000)  
              
        }
        }

        // sets.setPairs(prev=>prev+1)
        // sets.setTry(prev=>prev+1)
    }
    

    return (
        <div className ='play'>
            {fields?.map((card,i) =>
            <img  src={card.back} key={i} onClick={(e)=>{handleClick(e,card)}} attr='back of card'/>)}
        </div>
    )
}

export default Play