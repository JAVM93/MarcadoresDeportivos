export function Equipo(props){
        return <div>
        <ul>
        <li>nombre : <p>{ props.nombre }</p></li>
        <li>partidos jugados: { props.jugados }</li>
        <li>promedio : { props.promedio }</li>
        <li>ultimo partido : { props.ultimo }</li>
        <li>record : gan { props.record[0] } / perd { props.record[1] }</li>
        <li>juega internacional: { props.internacional ? "Si" : "No" }</li>
        <li>ubicado en : ({ props.ubicado.pais } / { props.ubicado.ciudad }  ) </li></ul>
    </div>

}

