function App(){
  let ar = ["Dhruv",22,"Bhopal"]
  let arf = ar.map((e,index) => {return <li key={index}>{e}</li>})
  return (
    <>
    {ar.map((e,index) => {return <h1 key={index}>{e}</h1>
    })}

    <ul>
      <li>{arf}</li>
    </ul>
    </>
  )
}

export default App
