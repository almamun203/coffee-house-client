import { useLoaderData } from "react-router-dom"
import CoffeeCard from "./Components/CoffeeCard";

function App() {
  const coffees =useLoaderData();

  return (
    <>
     <h1 className=" text-3xl text-secondary font-bold">Espresso Emporium ({coffees.length})</h1>
     <div className="grid grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto gap-5">
     {
      coffees.map(coffee=><CoffeeCard 
      coffee={coffee}
      key={coffee._id}></CoffeeCard>)
     }
     </div>
    </>
  )
}

export default App
