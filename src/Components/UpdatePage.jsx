import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdatePage = () => {
    const coffee = useLoaderData();
    const {_id,name,supplier,taste,category,image,details,quantity}=coffee;
    const handleUpdate = event =>{
        
            event.preventDefault();
            const form = event.target;
            const name = form.name.value;
            const supplier = form.supplier.value;
            const category = form.category.value;
            const quantity = form.quantity.value;
            const taste = form.taste.value;
            const details = form.details.value;
            const image = form.image.value;
            const updatedCoffee = {name , supplier , category ,quantity,taste,details,image};
      
             fetch(`http://localhost:5000/coffee/${_id}`,{
              method:'PUT',
              headers:{
                  'content-type':"application/json"
              },
              body:JSON.stringify(updatedCoffee)
             })
             .then(res=>res.json())
             .then(data=>{
              console.log(data)
              if(data.modifiedCount>0){
                  Swal.fire({
                      title: "Updated!",
                      text: "Coffee Info Updated Successfully!",
                      icon: "success"
                    });
             }
          })
            
             
      
            
          
    }
    return (
        <div className="bg-[#F4F3F0] mx-auto max-w-2xl pt-4">
            <h3 className="text-center text-3xl font-bold mb-4">Update Coffee: {name}</h3>
            
            <form onSubmit={handleUpdate} className=" max-w-xl mx-auto ">
                <div className="flex justify-center">
                <div className="w-full">
                <div>
                    <label className="label">Coffee Name</label>
                    <label className="label"><input type="text" name='name' defaultValue={name} className="input  w-full h-10" /></label>
                </div>
                <div>
                    <label className="label">Supplier Name</label>
                    <label className="label"><input type="text" name="supplier" defaultValue={supplier} className="input  w-full h-10" /></label>
                </div>
                <div>
                    <label className="label">Category</label>
                    <label className="label"><input type="text" name="category" defaultValue={category} className="input  w-full h-10" /></label>
                </div>
                
                </div>
                <div className="w-full">
                
                <div>
                    <label className="label">Available Quantity</label>
                    <label className="label"><input type="text" name="quantity" defaultValue={quantity} className="input   w-full h-10" /></label>
                </div>
                <div>
                    <label className="label">Taste</label>
                    <label className="label"><input type="text" name="taste" defaultValue={taste} className="input  w-full h-10" /></label>
                </div>
                <div>
                    <label className="label">Details</label>
                    <label className="label"><input type="text" name="details" defaultValue={details} className="input  w-full h-10" /></label>
                </div>
                </div>
                </div>


                <div>
                    <label className="label">Photo</label>
                    <label className="label"><input type="text" name="image" defaultValue={image} className="input  w-full h-10" /></label>
                </div>
                    <input type="submit" className="btn bg-[#2d2c28] hover:text-black text-white w-full my-4" value="Update Coffee" />
            </form>
        </div>
    );
};

export default UpdatePage;