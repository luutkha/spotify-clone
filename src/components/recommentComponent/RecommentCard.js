import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setSelectedTrack } from '../../redux/action/actTrack'

const RecommentCard = ({ object, type }) => {
    const dispatch = useDispatch()
    
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
        {type ==='album' && <span className='card' type="button">
            <img className='card__image'  src={typeof object.images[0]?.url === 'undefined' ?  "https://cdn-icons-png.flaticon.com/512/174/174872.png" : object.images[0]?.url} alt="abc" />
            <strong>{object.name.length > 17 ? object.name.substring(0, 13) + "..." : object.name}</strong>
            <p className='card__description'>{typeof object.description === 'undefined' ? "This song have no desciption. If u ..." : object.description.substring(0,33)+"..."}</p>
           {isPlay===false ?
            <button type="button" className=" btn btn-circle " onClick={()=>trackPlayOncLick()}><i className="fas fa-play" style={{ color: "white" }}></i></button>
           : <button type="button" className=" btn btn-circle " onClick={()=>trackPlayOncLick()} ><i className="fas fa-pause" style={{ color: "white" }}></i></button>
           }
        </span> }
        {type ==='artist' && <span className='cardCircle' type="button">
            <img className='card__image__circle' src={typeof object.images[0]?.url === 'undefined' ?  "https://cdn-icons-png.flaticon.com/512/174/174872.png" : object.images[0]?.url} alt="abc" />
            <strong>{object.name.length > 17 ? object.name.substring(0, 13) + "..." : object.name}</strong>
            <p className='card__description'>{typeof object.description === 'undefined' ? "Artist" : "abc"}</p>
            {isPlay===false ?
            <button type="button" className=" btn btn-circle " onClick={()=>trackPlayOncLick()}><i className="fas fa-play" style={{ color: "white" }}></i></button>
           : <button type="button" className=" btn btn-circle " onClick={()=>trackPlayOncLick()} ><i className="fas fa-pause" style={{ color: "white" }}></i></button>
           }
        </span> }
        </>
    )
}

export default RecommentCard
