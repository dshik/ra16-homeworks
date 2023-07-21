import React, { useState } from 'react';

export default function MyExp(): any {
   const [arr, setArr] = useState(['Тише', 'мыши', 'кот', 'на', 'крыше']);
   const [value, setValue] = useState('');

   const result = arr.map((element, index) => {
      return <p key={index}>{element}</p>;
   });

   function add() {
      setArr([...arr, value]);
      setValue("");
   }

   function inputValue(event: any) {
      setValue(event.target.value);
   }

   return (
      <>
         <h1>Hello!</h1>
         {result}
         <input value={value} onChange={inputValue} />
         <button onClick={add}>Add</button>
      </>
   )
}
