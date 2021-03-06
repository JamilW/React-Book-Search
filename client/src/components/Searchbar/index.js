import React from "react";

function Searchbar(props) {
    return (
        <div className="searchbar">
            <form>
                <div className="input-group mb-3">
                    <input 
                    name="query"
                    type="text" 
                    className="form-control" 
                    placeholder="Search books" 
                    aria-describedby="button-addon2"
                    onChange={ props.handleInputChange }
                    value={ props.query }
                    />
                    <div className="input-group-append">
                        <button 
                        className="btn btn-primary" 
                        type="submit" 
                        id="button-addon2"
                        onClick={ props.searchBook }
                        style={{background: "green", border: "1px solid white"}}
                        >
                        Search
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Searchbar;