function Filter (){
let data = [1,2,3,4,5,6,7,8,9,25,4,5,8,6,48,2,1,2]
let fil = data.filter((e) => {return e>3})
console.log(fil);
return(
    <>
     <ul>
        {
            fil.map((e,index) => {return <li key={index}>{e}</li>})
        }
     </ul>
    </>
)

}

export default Filter