function HogDetails ({specialty, weight, achievements, greased}){
    
    
    return(
        <div>
        {greased}<br></br> 
        Specialty: {specialty} <br></br> 
        Weight : {weight} lbs <br></br> 
        Achievements: {achievements}
        </div>
    )
}

export default HogDetails