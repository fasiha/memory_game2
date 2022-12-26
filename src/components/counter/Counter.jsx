import './counter.css'

const Counter = ({counts})=>{
    return (
        <div className = 'counter'>
            <h2>{"Pairs: " + counts.pairs }</h2>
            <h2>{"Try: " + counts.trial}</h2>

        </div>
    )   
}

export default Counter;