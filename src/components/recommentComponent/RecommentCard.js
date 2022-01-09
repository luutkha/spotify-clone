import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedTrack } from '../../redux/action/actTrack'
import { toast } from 'react-toastify';

const RecommentCard = ({ object, type }) => {
    const dispatch = useDispatch()

    const [isPlay, setisPlay] = useState(false)
    const authentication = useSelector(state => state.authentication)
    const playDetail = useSelector(state => state.selectedTrack)

    const notify = () => {
        toast(<div >
            <div className="toast-custom__body">
                <div className="toast-custom__title">Vui lòng đăng nhập để nghe!</div>
                <div className="toast-custom__content">Do chính sách của spotify, bạn không thể nghe nhạc lúc chưa đăng nhập!</div>
                <div>            <a className="btn " style={{borderColor:"#1db954", backgroundColor:"#1db954"}}  href='https://accounts.spotify.com/authorize?client_id=aa81c8b08f9847ccb97d12ed03dccd34&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fredirect&scope=user-read-playback-state%20user-read-currently-playing%20user-read-private%20user-read-email%20user-follow-read%20streaming%20app-remote-control%20user-read-playback-position%20user-top-read%20user-read-recently-played%20playlist-modify-private%20playlist-read-collaborative%20playlist-read-private%20playlist-modify-public'  >SIGN IN</a></div>

            </div></div>, {
            position: toast.POSITION.BOTTOM_RIGHT,
            hideProgressBar: true,
            className: 'toast-custom toast--success',
            bodyClassName: 'toast-custom__body',
            autoClose: 5000,
        });
    };
    const trackPlayOncLick = () => {
        if (authentication.isLoggin === false) {

            //Will be build to a component later
            notify()
        }
        else {

            if (isPlay === true) {
                setisPlay(false)
                dispatch(setSelectedTrack(object.uri, false))

            }
            else {
                setisPlay(true)
                dispatch(setSelectedTrack(object.uri, true))


            }
        }

    }
    return (
        <>
            {type === 'album' && <span className='card' type="button">
                <img className='card__image' src={typeof object.images[0]?.url === 'undefined' ? "https://cdn-icons-png.flaticon.com/512/174/174872.png" : object.images[0]?.url} alt="abc" />
                <strong>{object.name.length > 17 ? object.name.substring(0, 13) + "..." : object.name}</strong>
                <p className='card__description'>{typeof object.description === 'undefined' ? "This song have no desciption. If u ..." : object.description.substring(0, 33) + "..."}</p>
                {isPlay === false ?
                    <button type="button" className=" btn btn-circle " onClick={() => trackPlayOncLick()}><i className="fas fa-play" style={{ color: "white" }}></i></button>
                    : <button type="button" className=" btn btn-circle " onClick={() => trackPlayOncLick()} ><i className="fas fa-pause" style={{ color: "white" }}></i></button>
                }
            </span>}

            {type === 'artist' && <span className='cardCircle' type="button">
                <img className='card__image__circle' src={typeof object.images[0]?.url === 'undefined' ? "https://cdn-icons-png.flaticon.com/512/174/174872.png" : object.images[0]?.url} alt="abc" />
                <strong>{object.name.length > 17 ? object.name.substring(0, 13) + "..." : object.name}</strong>
                <p className='card__description'>{typeof object.description === 'undefined' ? "Artist" : "abc"}</p>
                {isPlay === false ?
                    <button type="button" className=" btn btn-circle " onClick={() => trackPlayOncLick()}><i className="fas fa-play" style={{ color: "white" }}></i></button>
                    : <button type="button" className=" btn btn-circle " onClick={() => trackPlayOncLick()} ><i className="fas fa-pause" style={{ color: "white" }}></i></button>
                }
            </span>}
        </>
    )
}

export default RecommentCard
