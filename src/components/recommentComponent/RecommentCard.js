import React from 'react'

const RecommentCard = ({ object, type }) => {

    return (
        <>
        {type ==='album' && <span className='card' type="button">
            <img className='card__image' src={object.images[0].url} alt="abc" />
            <strong>{object.name.length > 17 ? object.name.substring(0, 13) + "..." : object.name}</strong>
            <p className='card__description'>{typeof object.description === 'undefined' ? "this object have no desciption. this ..." : "abc"}</p>
            <button type="button" className=" btn btn-circle "><i className="fas fa-play" style={{ color: "white" }}></i></button>

        </span> }
        {type ==='artist' && <span className='cardCircle' type="button">
            <img className='card__image__circle' src={object.images[0]?.url} alt="abc" />
            <strong>{object.name.length > 17 ? object.name.substring(0, 13) + "..." : object.name}</strong>
            <p className='card__description'>{typeof object.description === 'undefined' ? "Artist" : "abc"}</p>
            <button type="button" className=" btn btn-circle "><i className="fas fa-play" style={{ color: "white" }}></i></button>

        </span> }
        </>
    )
}

export default RecommentCard
