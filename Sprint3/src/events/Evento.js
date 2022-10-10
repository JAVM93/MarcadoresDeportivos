
export function Evento(props) {
  return (<div className="bg-dark">
    <div id="contenedor" className="bg-dark">
      <hr />
      <div className="m-lg-auto p-1 d-inline-block text-white">
          <img
          src={process.env.PUBLIC_URL + "/images/01.png"}
          alt="mdo"
          width="200"
          height="200"
          class="rounded-circle"
        />
        <h4 align="center">Equipo 1</h4>
      </div>

      <div className="m-lg-auto p-1 d-inline-block text-white">
        <h3>4</h3>
      </div><div className="m-lg-auto p-1 d-inline-block text-white">
        <h3>vs</h3>
      </div><div className="m-lg-auto p-1 d-inline-block text-white">
        <h3>6</h3>
      </div>

      <div className="m-lg-auto p-1 d-inline-block text-white">
        
        <img
          src={process.env.PUBLIC_URL + "/images/02.png"}
          alt="mdo"
          width="200"
          height="200"
          class="rounded-circle"
        />
        <h4 align="center">Equipo 2</h4>
      </div>
      <hr />
      
      <hr />
    </div>
    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
    <button
      type="button"
      class="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
    >
      Anterior
    </button>
    <button type="button" class="btn btn-outline-light btn-lg px-4">
      Siguiente
    </button>
    
  </div><hr /></div>
  );
}
