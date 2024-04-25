import { useLoaderData } from "react-router-dom"
import CoffeeCard from "./Components/CoffeeCard";
import { useState } from "react";

function App() {
  const loadedCoffees =useLoaderData();
  const [coffees,setCoffees] = useState(loadedCoffees);
  return (
    <>
    
     <div className="grid grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto gap-5">
     {
      loadedCoffees.map(coffee=><CoffeeCard 
      
      coffees={coffees}
      setCoffees={setCoffees}
      coffee={coffee}
      key={coffee._id}></CoffeeCard>)
     }
     </div>
    </>
  )
}

export default App;
