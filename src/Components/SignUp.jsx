import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";


const SignUp = () => {
    const {createUser}=useContext(AuthContext)
    const handleSignUp =e=>{
        e.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
       
        createUser(email,password)
        .then(result=>{
            console.log(result.user);
            
            const createAt = result.user?.metadata?.creationTime;
            const user = {email,createdAt:createAt};
        fetch('http://localhost:5000/user',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        }).then(res=> res.json())
        .then(data=>{
            if(data.insertedId){
                Swal.fire({
                    title: "Signed Up!",
                    text: "Signed up successfully!",
                    icon: "success"
                  });
            }
        })


        })
        .catch(error=>{
            console.error(error)
        })
        form.reset();
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
            
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email"
                name='email' className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password"
                name='password' className="input input-bordered" required />
                <label className="label">
                  <Link to='/signIn' className="label-text-alt link link-hover">Already have an account?</Link>
                </label>
              </div>
              <div type='submit' className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default SignUp;