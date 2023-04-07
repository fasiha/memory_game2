import {shuffleArray,makeCardsList}  from './Play'

test('shuffled array should have the same length', ()=>{
    let array =[1,2,3,4,5]
    shuffleArray(array)
    expect(array.length).toBe(5)
})

test('test makeCardsList', ()=>{
    const images ={
        'Playing_card_club_2.svg': "/memory_game2/static/media/Playing_card_club_2.ceb37f1cb91b80f2711c.svg",
        'Playing_card_heart_K.svg': "/memory_game2/static/media/Playing_card_heart_K.7a95fab14494d1c2728f.svg"
    }
    const deck = makeCardsList(images,true)
    const card = deck[0]
    const card2 = deck[1]
    expect(card.num).toBe('2')
    expect(card.url).toBe("/memory_game2/static/media/Playing_card_club_2.ceb37f1cb91b80f2711c.svg")
    expect(card.back).toBe('blue2.png')
    expect(card2.num).toBe('K')
    expect(card2.url).toBe("/memory_game2/static/media/Playing_card_heart_K.7a95fab14494d1c2728f.svg")
    expect(card2.back).toBe('blue2.png')
    // back of card 
    const deck2 = makeCardsList(images,false)
    const card1 = deck2[0]
    expect(card1.back).toBe('astronaut.png')
})


