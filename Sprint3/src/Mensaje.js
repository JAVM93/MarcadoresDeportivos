export function Mensaje() {
    const evento = {
        nombre: "partido",
        marcador1 : 3,
        marcardor2 : 2
    }
    function ganador(r1 , r2){
        if(r1 === r2)
            return <div><h2>Empate</h2></div> 
        else
            if(r1 > r2)
                return <h2>Rival 1 Ganador</h2>
            else
                return <h2>Rival 2 Ganador</h2>
    }
    return <div>
        <h1>{ evento.nombre }</h1>
        <p>{ evento.marcador1 } - { evento.marcardor2 }</p>
        <div>{ ganador(evento.marcador1,evento.marcardor2) }</div>
    </div>

}

export function Registrados(){
    return <div>
        <ul>
            <li>Equipo 1</li>
            <li>Equipo 2</li>
            <li>Equipo 3</li>
        </ul>
    </div>
}

