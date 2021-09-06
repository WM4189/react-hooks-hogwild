import React, {useState} from "react";
import HogDetails from "./HogDetails"

function Tile ({hogData}){
    // console.log(hogData)
    const [details , setDetails] = useState(true)
    
    function handleDetails(){
        setDetails(details => !details)
        }

        
    
    const hogTile = hogData.map(hog => {
        const greasedValue = hog.greased ? "Greased" : "Not Greased"
        const hogDetail = details ? <HogDetails specialty={hog.specialty} weight={hog.weight} greased={greasedValue} achievements={hog["highest medal achieved"]}  />  : null
        return(
            <div onClick={handleDetails} key={hog.name} className="pigTile">
                <img src={hog.image} alt="Pigs" />
                <h3>{hog.name}</h3>
                {hogDetail}
                <br></br>
                <br></br>
            </div>
        )
    })
    return(
        <div className="ui eight wide column">
            {hogTile}
        </div>
    )
}

export default Tile