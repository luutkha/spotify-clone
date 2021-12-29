import React from 'react'
import TrackCard from './TrackCard'

const TrackList = ({list,type}) => {
    const listExport = list.map((object,index) =>{
        
        return (
            <TrackCard key={index} object={object} type={type}/>
        )
    })
    return (
        <div className=''> 
           
            {list.length > 0 && listExport}
        </div>
    )
}

export default TrackList
