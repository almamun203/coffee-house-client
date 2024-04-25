import PropTypes from 'prop-types';

import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({coffees,setCoffees,coffee}) => {
    const {_id,name,quantity,taste,image} = coffee;

  const handleDelete = (_id) =>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        

      fetch(`http://localhost:5000/coffee/${_id}`,{
        method:'DELETE'
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        if(data.deletedCount > 0){
          
          Swal.fire({
            title: "Deleted!",
            text: "Coffee has been deleted.",
            icon: "success"
          });
          const remaining = coffees.filter(cof=>cof._id !==_id);
          setCoffees(remaining);
        }
      })

      }
    });
  }


    return (
        <div className="card card-side bg-[#F5F4F1]">
  <figure><img src={image} alt="Movie"/></figure>
  <div className="card-body mt-5">
    <h2 className="card-title md:text-sm text-lg">Name: <span className="font-light">{name}</span></h2>
    <h2 className="card-title md:text-sm text-lg">Quantity: <span className="font-light">{quantity}</span></h2>
    <h2 className="card-title md:text-sm text-lg">Taste: <span className="font-light">{taste}</span></h2>
    
    </div>
    <div className="card-actions flex flex-col justify-end mr-5 my-5">
      <button className="btn  bg-stone-700  w-14 md:w-12 hover:bg-stone-800 rounded-full"><img src="Frame (1).png" alt="" /></button>
    <Link to={`/update/${_id}`}>
    <button className="btn  bg-stone-700  w-14 md:w-12 hover:bg-stone-800 rounded-full"><img src="Frame.png" alt="" /></button>
    </Link>
      <button onClick={()=>handleDelete(_id)} className="btn  bg-stone-700  w-14 md:w-12 hover:bg-stone-800 rounded-full"><img src="delete 1.png" alt="" /></button>
   
  </div>
</div>
    );
};


CoffeeCard.propTypes={
coffee:PropTypes.object,
coffees:PropTypes.array,
setCoffees:PropTypes.array
}


export default CoffeeCard;