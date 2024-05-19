import React, { useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../context/CartContext'
import SearchContext from '../context/SearchContext';



const Header = () => {
  let ctx = useContext(CartContext);
  console.log(ctx.cartArr.length)

  let ctx1 = useContext(SearchContext)
  // console.log(ctx1)

  let searchRef = useRef()


  const handleChange = (e)=>{
    e.preventDefault()
    console.log(searchRef.current.value)
    let ans = searchRef.current.value.toLowerCase()
    ctx1.setsearch(ans)
  }
    
  const handleLogout =()=>{
      localStorage.setItem('login',"false")
    }
  
  return (
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" to="/">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <form className="d-flex m-auto" role="search">
        <input onChange={handleChange}  ref={searchRef} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        {/* <button onClick={handleSearch} className="btn btn-outline-success" type="submit">Search</button> */}
      </form>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">Signup</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>  
        <li onClick={handleLogout} className="nav-item">
          <Link className="nav-link" to="/login">Logout</Link>
        </li>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
        <li className="nav-item">
          <Link className="nav-link" to="/xyz">Cart <sup>{ctx.cartArr.length?ctx.cartArr.length:""}</sup></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/two">Two</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/one">One</Link>
        </li>
       
       
      </ul>
    
    </div>
  </div>
</nav>

  )
}

export default Header
