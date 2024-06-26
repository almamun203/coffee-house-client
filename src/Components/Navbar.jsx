import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const navLinks =<>
    <NavLink to='/addCoffee' className='mr-4'><li>Add Coffee</li></NavLink>
    
    <NavLink><li>User Update</li></NavLink>
    </>
    
    
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLinks}
      </ul>
    </div>
    <Link to='/' className="font-medium text-xl">Espresso Emporium</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
    <Link to='/signUp' className="btn">Sign Up</Link>
  </div>
</div>
    );
};

export default Navbar;