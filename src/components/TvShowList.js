import React from 'react';
import TvShow from './TvShow';

const TvShowList = (props) => {
    return (
        <div className="container">    
            <div className="row">
                <div className="col s12">    
                {
                props.tvShows.map((tvShow, i) => {
                    return (
                        <TvShow key={tvShow.id} viewTvShowInfo={props.viewTvShowInfo} tvShowId={tvShow.id} title={tvShow.name} overview={tvShow.overview} image={tvShow.poster_path} date={tvShow.first_air_date} />                    
                    )
                })
                }
                </div>
            </div>
        </div>
    )
}

export default TvShowList;