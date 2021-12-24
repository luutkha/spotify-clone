import React from 'react'
import RecommentCard from './RecommentCard'

const RecommentList = ({title,listAlbum}) => {
    
    const listAlbumExport = listAlbum.map((album,index) =>{
        return (
            <RecommentCard key={index} album={album}/>
        )
    })
    return (
        <div className=''> 
            <strong className='recommentTitle'>{title}</strong><br></br>
            {listAlbumExport}
        </div>
    )
}

export default RecommentList
