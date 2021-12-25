import React from 'react'

const RecommentCard = ({ album }) => {

    return (
        <span className='card' type="button">
            <img className='card__image' src={album.images[0].url} alt="abc" />
            <strong>{album.name.length > 17 ? album.name.substring(0, 13) + "..." : album.name}</strong>
            <p className='card__description'>{typeof album.description === 'undefined' ? "this album have no desciption. this ..." : "abc"}</p>
            <button type="button" class=" btn btn-circle "><i className="fas fa-play" style={{ color: "white" }}></i></button>

        </span>
    )
}

export default RecommentCard
