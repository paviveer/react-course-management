import React from "react";
const Search=({search2,setsearch2})=>
{
    return(
        <div>
            <input value={search2}
            onChange={(k) => setsearch2(k.target.value)}
            placeholder="search...." />
        </div>
    )
}
export default Search;