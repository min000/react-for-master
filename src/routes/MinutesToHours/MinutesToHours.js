import {useState} from "react";
import Nav from "../../component/Nav/Nav";

function MinutesToHours(){
  const [amount,setAmount] = useState();
  // flip이 flase->true | true->false
  const [flipped,setFlipped] = useState(false);
  const onChange = (event) => {
    setAmount(event.target.value);
  };
  function reset(){
    setAmount(0);
  }
  //const onFlip = () => setFlipped(!flipped);
  const onFlip = () => {
    // 값이 이상해짐 minute 60이 hour로 감.
    reset();
    setFlipped((current) => !current);
  }
  return (
    <>
    <Nav/>
    <div>
      <div>
        <label htmlFor="minutes">Minutes</label>
        <input 
          value={flipped ? amount * 60 : amount}
          id="minutes" 
          placeholder="Minutes" 
          type="number" 
          onChange={onChange}
          disabled={flipped === true}
        />
      </div>
      <h4>You want to convert {amount}</h4>
      <div>
        <label htmlFor="hours">Hours</label>
        <input 
          value={flipped ? amount : Math.round(amount / 60)}
          id="hours" 
          placeholder="Hours" 
          type="number"
          disabled={flipped === false}
          onChange={onChange}
        />
      </div>
      <button onClick={reset}>Reset</button>
      <button onClick={onFlip}>{flipped ? "turn back":"."}</button>
    </div>
    </>
  );      
}
export default MinutesToHours;