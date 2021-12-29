import React from 'react'
import TrackList from '../../components/trackListComponent/TrackList'

const MatchestResult = ({ artist,listTrack }) => {
    return (
        <div className='matches-result'>

            <div className='matches-result__child'>
                <h4 className='matches-result__title'>Matchest Result</h4>
                    <div className='card-matchest' type="button">
                        <img className='card-matchest__image__circle' src={typeof artist.images[0]?.url === 'undefined' ? "https://cdn-icons-png.flaticon.com/512/174/174872.png" : artist.images[0]?.url} alt="abc" />
                        <strong><h4 className='card-matchest__title'>{artist.name.length > 17 ? artist.name.substring(0, 13) + "..." : artist.name}</h4></strong>
                        <p className='card-matchest__description'>{typeof artist.description === 'undefined' ? "Artist" : "abc"}</p>
                        <button type="button" className=" btn btn-circle "><i className="fas fa-play" style={{ color: "white" }}></i></button>

                    </div>
            </div>
            <div className='matches-result__child-type2'>
            <h4 className='matches-result__title'>Matchest Songs</h4>
            <div className='matches-result__child-type2__card-container'><TrackList  list={listTrack}/></div>
            



            </div>
        </div>
    )
}

export default MatchestResult
