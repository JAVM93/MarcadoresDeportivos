export function PgInicio() {
  return (
    <div class="bg-dark text-secondary px-4 py-5 text-center">
      <div class="py-5">
        <h1 class="display-5 fw-bold text-white">Bienvenido</h1>
        <div class="col-lg-6 mx-auto">
          <p class="fs-5 mb-4 text-white">
            Proximamente tendremos Informacion de todos los eventos deportivos
            actuales
          </p>
        </div><img
          src={process.env.PUBLIC_URL + "/images/gif/anim.gif"}
          alt="mdo"
          width="200"
          height="200"
          class="rounded-circle"
        />
      </div>
    </div>
  );
}
