import './play.css'
import React, { useState, useEffect,useContext } from 'react';
import { ThemeContext } from '../../App';

import {useNavigate} from 'react-router-dom';

import r from '../../images/back-r/astronaut.png'
import g from '../../images/back-r/blue2.png'
import empty from '../../images/back-r/empty.png'


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

// shuffle deck 
export function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

export function makeCardsList(images,green){
    let list = []
    console.log(images)
    for (const[key,value] of Object.entries(images)){
        const num = key.split('_').at(-1).split('.').at(0);
        const url = value;
        const back = green? g : r;
        const card = new Card(num,url,back)
        list.push(card)
    }
    return list;
}

const Play = ({sets}) =>{
    const  {green} = useContext(ThemeContext)
    const [chosen,setChosen] = useState([])
    const navigate = useNavigate()
    
    const images = importAll(require.context('../../images/cards-r', false, /\.(png|jpe?g|svg)$/));
    let cardsList = makeCardsList(images,green)

    
    // shuffle deck before start the game 
    shuffleArray(cardsList)

    // flip color 
const themeStyle = {
    backgroundColor: green? 'rgba(0, 128, 0, 0.781)':'#ff4800',
    color: 'white' 
 }

    // take 16 carads to the field
    const [fields, setFields] = useState(cardsList.slice(0,16))
    cardsList = cardsList.slice(16)
    const [deck, setDeck] = useState(cardsList)
    const [wait, setWait] = useState(false)

    function handleClick(e,card){
        // ignore click on empty card 
        if (e.target.src.split('/').at(-1) == empty.split('/').at(-1)) return;
        // ignore click during waiting time 
        if (wait) return;
        e.target.src= card.url
        if (chosen.length==0){
        e.target.id = 'open'}
        setChosen(prev =>[...prev,card])
        if (chosen.length==1){
            // set wait to ignore click during wating time 
            setWait(true)
            // get open card 
            let open = document.querySelector('#open')
            // check pair 
            if (chosen.at(0).num ==card.num){
                console.log('pair')
                sets.setPairs(prev=>prev+1)
                // put new 2 cards 
                let first;
                let second;
                if (deck.length==0){
                    first = new Card('empty',empty,empty)
                    second = new Card('empty',empty,empty)
                }
                else {
                    first = deck.at(0)
                    second = deck.at(1)
                }
                let newFields = [...fields]
                newFields = newFields.map((obj)=>{
                    if (obj?.url==chosen.at(0).url){
                        console.log('match')
                        return first
                    }
                    else if (obj?.url.split('/').at(-1)==e.target.src.split('/').at(-1)){
                        console.log('match')
                        return second
                    }
                    return obj
                })

                // flip open cards back 
                setTimeout(()=>{
                e.target.src= card.back
                open.removeAttribute('id')
                open.src = card.back
                setFields(newFields)
                setDeck(prev => prev.slice(2,))
                setChosen([])
                setWait(false)
                // finish 
                console.log(sets.pairs)
                if (sets.pairs==25){
                    console.log('Complete')
                    navigate('/score',{state:{"trial":sets.trial}})

                }
                },2000)

            }
            else 
            { console.log('not pair')
              sets.setTrial(prev=>prev+1)
              // flip back after 3 seconds

              setTimeout(()=>{
              e.target.removeAttribute('id')
              e.target.src= card.back
              open.removeAttribute('id')
              open.src=card.back
              setChosen([])
              setWait(false)
            },2000)  
              
        }
        }

    
    }
    

    return (
        <div className ='play' style={themeStyle}>
            {fields?.map((card,i) =>{
            if (card?.back){   
            return (<img  src={card.back} key={i} onClick={(e)=>{handleClick(e,card)}} attr='back of card'/>)}
            else {
                return (<img src={empty} key={i} attr="empty card"/>)
            }        
        })}
        </div>
    )
}

export default Play