import React from 'react' 
import { Link } from 'react-router-dom'

const navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light d-flex">
  <div class="container">
    <a class="navbar-brand" href="#">Medfy</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
      <li class="nav-item">
          <a class="nav-link" href="./About">About Us</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link" href="#">Contact Us</a>
        </li>
    
        
     
        
      </ul>
      <form class="d-flex p-3">
    
        <button class="btn btn-outline-success" type="submit">Sign Up</button>
        <button class="btn btn-outline-success" type="submit">Log In</button>
      </form>
    </div>
  </div>
</nav>

        </div>
    )
}

export default navbar
