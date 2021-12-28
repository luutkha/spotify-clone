import React from 'react'
import RecommentCard from './RecommentCard'

const RecommentList = ({title,list,type}) => {
    const listExport = list.map((object,index) =>{
        
        return (
            <RecommentCard key={index} object={object} type={type}/>
        )
    })
    return (
        <div className=''> 
            <strong className='recommentTitle' >{title}</strong><br></br>
            {list.length > 0 && listExport}
        </div>
    )
}

export default RecommentList
