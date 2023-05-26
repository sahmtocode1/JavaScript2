import React from 'react'

function NameList() {
    const names = ["Nahla, Meka, Sarge, Gunny, Lady, Sampson"];
    //const NameList = names.map((name) => <h1>{name}</h1>);
  return (
  <div>
    {names.map((name, index) => (
        <h1 key={index}>{name}</h1>
    ))}
    </div>
    );
}

export default NameList;