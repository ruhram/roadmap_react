import React from 'react' 

function App(){
  const greeting = 'Hello Function COmponent!';

  return <Headline value={greeting}/>;
}

function Headline({value}){
  return <h1>{value}</h1>
}

export default App;