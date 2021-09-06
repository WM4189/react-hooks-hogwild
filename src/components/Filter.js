import React from "react"

function Filter({greased, setGreased, sort, setSort}){

    return(
        <div className="filterWrapper">

            <input onChange={(e) => setGreased(e.target.checked)} type="checkbox" checked={greased} />
                Filter Only Greased Pigs
                <br></br>
            
            <select value={sort} onChange={(e) => setSort(e.target.value) } > 
            <option value="name">Name</option>
            <option value="weight">Weight</option>
            </select>
            <label>Sort By Name or Weight</label>
            
        </div>
    )
}

export default Filter