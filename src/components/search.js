import React, {useState} from 'react'
import "./search.css"
import {AsyncPaginate} from "react-select-async-paginate"

const Search = ({onSearchChange}) => {

    const [search, setSearch] = useState(null);

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }

    const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';
    const goptions = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '4d0bd115e6mshdee9716a61caf42p15b480jsn02ede33d9e44',
            'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
        }
    };

    const loadOptions = (input) => {
        return fetch(`${url}?namePrefix=${input}&minPoppulation=1000000`, goptions)
        .then(response => response.json()) 
        .then(response => {
            return {
                options: response.data.map((city) =>{
                    return {
                        value: `${city.latitude} ${city.longitude}`,
                        label:`${city.name}, ${city.region}, ${city.country}`,
                    }
                })
            }
        })
        .catch(err => console.err(err));

    };

  return (
    <AsyncPaginate className = "bar"
    placeholder= "Search for a city!" 
    debounceTimeout = {600} 
    value={search}
    onChange = {handleOnChange}
    loadOptions={loadOptions}
    />
  )
}

export default Search;