import React from 'react';

const Search = (props) => {
    return (
        <div className="container" style={{ paddingTop: 30, paddingBottom: 30 }}>
            <div className="row">
                <section className="test col s4 offset-s4">
                    <form onSubmit={props.handleSubmit} action="">
                        <div className="input-field">
                            <input placeholder="Search Movie or TV Shows" onChange={props.handleChange} id="first_name2" type="text" className="validate" />
                        </div>
                    </form>
                </section>
            </div>
        </div>

    )
}

export default Search;
