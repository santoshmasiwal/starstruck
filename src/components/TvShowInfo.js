import React from 'react';

const TvShowInfo = (props) => {      
    return (
        <div>
            <div className="container">
                <div className="row" onClick={props.closeTvShowInfo} style={{cursor: "pointer", paddingTop: 50}}>
                    <i className="fas fa-arrow-left"></i>
                    <span style={{marginLeft: 10}}>Go back</span>
                </div>
                <div className="row">
                    <div className="col s12 m4">
                        { props.currentTvShow.poster_path == null ? <img className="" src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`} alt="Card image cap" style={{ width: "100%",
                            height: 360}} /> : <img className="" src={`http://image.tmdb.org/t/p/w185${props.currentTvShow.poster_path}`} alt="Card image" style={{ width: "100%",
                            height: 360}} />}
                    </div>
                    <div className="col s12 m8">
                        <div className="info-container">
                            <p>{props.currentTvShow.name}</p>
                            <p>{props.currentTvShow.first_air_date} </p>
                            <p>{props.currentTvShow.overview}</p>
                            <p>{props.currentTvShow.vote_average}</p>
                        </div>
                    </div>            
                </div>
            </div>
        </div>
    )
}

export default TvShowInfo;