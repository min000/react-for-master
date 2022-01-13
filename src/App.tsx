import React, { useState } from "react";

function App(){
  const [value, setValue] = useState("");
  const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(value);
    setValue("");
  }
  const onChange = (event:React.FormEvent<HTMLInputElement>) => {
    const {currentTarget : {value}} = event;
    setValue(value);
    //console.log(event.currentTarget.value);
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input 
          value={value}
          onChange={onChange}
          type="text"
          placeholder="user name"
        />
        <button>add</button>
      </form>
    </div>
  );
}
export default App;