import players from "./players";
import Player from "./Player";
const playersList=()=>{
    const playerObject = players.map((element, index)=>(<Player key={index} element={element}/>))

    return(
            <div style={{display:"flex",
            justifyContent:"space-around",
            alignItems:"center"}}> 
                {playerObject}
            </div>
    )
}
export default playersList;