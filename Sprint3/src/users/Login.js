import "../css/login.css";
export function Login(){
    const handleChange = (ev)=>{
        console.log(ev.target.value) 
    } 
    const handleSubmit = (ev)=>{
        ev.preventDefault()
        console.log("enviando datos")
    }

    return <div id="contenedor">
		<main class="form-signin w-100 m-auto">
  <form onSubmit={handleSubmit }>
	<h1 class="h3 mb-3 fw-normal">Inicio de sesión </h1>
    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={ handleChange} on/>
      <label for="floatingInput">Correo Electronico</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Min 6 caracteres" />
      <label for="floatingPassword">Contraseña</label>
    </div>

    <div class="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me" /> Remember me
      </label>
    </div>
    <button class="w-100 btn btn-lg btn-primary" type="submit" onClick={function(){ console.log('Iniciar Sesion')}}>Iniciar Sesión</button>
    
  </form>
</main>
</div> 
}