import React from 'react';
import {Link} from 'react-router-dom'
function Header(){
    return <h2>Bienvenido a Marcadores</h2>
}

export function Menu(){
    return <header class="p-3 text-bg-dark">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
        <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="mdo" width="64" height="64" class="rounded-circle" />
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><Link className="nav-link px-2 text-white" to="/">Inicio</Link></li>
          <li><Link className="nav-link px-2 text-white" to="/eventos">Eventos</Link></li>
          <li><Link className="nav-link px-2 text-white" to="/equipos">Equipos</Link></li>
          <li><Link className="nav-link px-2 text-white" to="/faqs">FAQs</Link></li>
        </ul>

        <div class="text-end">
        <Link className="btn btn-outline-warning" to="/login">Login</Link>
        </div>
      </div>
    </div>
  </header> 
}


export default Header