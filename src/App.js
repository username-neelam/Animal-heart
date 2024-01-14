import AnimalShow from "./AnimalShow"
import { useState } from "react"
import './App.css'
function getRandomAnimal(){
   const animals = ['bird','cat','cow','dog','gator','horse']
    return animals[Math.floor(Math.random()*animals.length)]
}
function App(){
    const[animals,setanimals] = useState([])

    const HandleClick = () => {
       setanimals([...animals,getRandomAnimal()])
     }
     const renderedAnimal = animals.map((animal,index) => {
      return <AnimalShow type = {animal} key={index}/>
     })
    return (
     <div className="app">  
        <button onClick ={HandleClick}>Add Animal Here</button>
        <div className="animal-list">{renderedAnimal}</div>
       </div>
       )
}
export default App