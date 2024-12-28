import Filter from "./filter"

function App(){
  let ar = ["Dhruv",22,"Bhopal"]
  let arf = ar.map((e,index) => {return <li key={index}>{e}</li>})
  let ar_ob = [{
    id:1,
    name:"The_dark_xone",
    age:22,
    location:"Gwalior",
  },{

    id:2,
    name:"Dhruv",
    age:22,
    location:"Bhopal"
  }]
  let ar_obj = ar_ob.map((e) => {return <h1 key={e.id}> {e.name} - {e.age} - {e.location}</h1>}) 
  return (
    <>
    {ar.map((e,index) => {return <h1 key={index}>{e}</h1>
    })}

     <ul>
      <li>{ar_obj}</li>
     </ul>
   <Filter/>
    </>
  )
}

export default App
