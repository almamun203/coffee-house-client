import Swal from "sweetalert2";

const AddCoffee = () => {
    const handleAddForm = event =>{
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const supplier = form.supplier.value;
      const category = form.category.value;
      const quantity = form.quantity.value;
      const taste = form.taste.value;
      const details = form.details.value;
      const image = form.image.value;
      const newCoffee = {name , supplier , category ,quantity,taste,details,image};

       fetch('http://localhost:5000/coffee',{
        method:'POST',
        headers:{
            'content-type':"application/json"
        },
        body:JSON.stringify(newCoffee)
       })
       .then(res=>res.json())
       .then(data=>{
        console.log(data)
        if(data.insertedId){
            Swal.fire({
                title: "Added!",
                text: "New Coffee Added!",
                icon: "success"
              });
       }
    })
      
       

      
    }
    return (
        <div className="bg-[#F4F3F0] mx-auto max-w-2xl pt-4">
            <h3 className="text-center text-3xl text-stone-800 font-bold mb-5">Add Coffee</h3>
            <form onSubmit={handleAddForm} className=" max-w-xl mx-auto ">
                <div className="flex justify-center">
                <div className="w-full">
                <div>
                    <label className="label">Coffee Name</label>
                    <label className="label"><input type="text" name='name' className="input  w-full h-10" /></label>
                </div>
                <div>
                    <label className="label">Supplier Name</label>
                    <label className="label"><input type="text" name="supplier" className="input  w-full h-10" /></label>
                </div>
                <div>
                    <label className="label">Category</label>
                    <label className="label"><input type="text" name="category" className="input  w-full h-10" /></label>
                </div>
                
                </div>
                <div className="w-full">
                
                <div>
                    <label className="label">Available Quantity</label>
                    <label className="label"><input type="text" name="quantity" className="input   w-full h-10" /></label>
                </div>
                <div>
                    <label className="label">Taste</label>
                    <label className="label"><input type="text" name="taste" className="input  w-full h-10" /></label>
                </div>
                <div>
                    <label className="label">Details</label>
                    <label className="label"><input type="text" name="details" className="input  w-full h-10" /></label>
                </div>
                </div>
                </div>


                <div>
                    <label className="label">Photo</label>
                    <label className="label"><input type="text" name="image" className="input  w-full h-10" /></label>
                </div>
                    <input type="submit" className="btn bg-[#2d2c28] hover:text-black text-white w-full my-4" value="Add Coffee" />
            </form>
        </div>
    );
};

export default AddCoffee;