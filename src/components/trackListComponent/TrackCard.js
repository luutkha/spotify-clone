import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setSelectedTrack } from '../../redux/action/actTrack';
import { createAction, STORE_SELECTED_TRACK } from '../../redux/constants/constants';

const TrackCard = ({ object, type }) => {
    const dispatch = useDispatch()
    let listArtist = ""
     object.artists.forEach((art, index) => {

        if (index !== 0)
            listArtist += ", " + art.name
        else listArtist += art.name
    });
    const [isPlay, setisPlay] = useState(false)
    const trackPlayOncLick = () =>{
        if(isPlay===true) {
            setisPlay(false)
            dispatch(setSelectedTrack(object.uri,false))

        }
        else {
            setisPlay(true)
           dispatch(setSelectedTrack(object.uri,true))
            
            
        }
    } 
    return (
        <>
            <div className='card-tracks-matchest' >
                <div className='card-tracks-matchest__image-container'>
                    <img className='card-tracks-matchest__image-container__img' src={object.album.images[0]?.url} alt="" />
                    {/* <div className=' btn-circle'><i className="fas fa-play" style={{ color: "white" }}></i></div> */}

                </div>
               {isPlay===false ? <div className='btn btn-circle' onClick={()=> trackPlayOncLick()} ><i className="fas fa-play" style={{ color: "white" }}></i></div>
              :  <div className='btn btn-circle' onClick={()=> trackPlayOncLick()} ><i className="fas fa-pause" style={{ color: "white" }}></i></div>
    }
                <div>
                    <h6 className='card-tracks-matchest__title'>{object.name}</h6>
                    <h6 className='card-tracks-matchest__description'>{listArtist}</h6>
                </div>

            </div>
        </>
    )
}

export default TrackCard
