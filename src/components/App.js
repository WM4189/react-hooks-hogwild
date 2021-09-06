import React, {useState} from "react";
import Nav from "./Nav";
import Tile from "./Tile"
import Filter from "./Filter"

import hogs from "../porkers_data";

function App() {
	console.log(hogs)
	const [greased, setGreased] = useState(false)
	const [sort,setSort] = useState("name")

	


	const sortedHogs = hogs.filter(hog => {
		return(
			greased ? hog.greased : true
		)
	})
	// .sort(hog => {
	// 	if(sort === "name"){
	// 		return hog.name
	// 	}else{
	// 		return hog.weight
	// 	}
	// })

	.sort((hog1, hog2) => {
		if (sort === "weight") {
		  return hog1.weight - hog2.weight;
		} else {
		  return hog1.name.localeCompare(hog2.name);
		}
	  })



	return (
		<div className="ui grid container">
			<Nav />
			<Filter sort={sort} setSort={setSort} greased={greased} setGreased={setGreased} />
			<Tile hogData={sortedHogs} />
		</div>
	);
}

export default App;
