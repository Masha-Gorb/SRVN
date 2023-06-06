import g from './../../global.module.scss'
import s from './UserPage.module.scss'
import {PhotoCard} from "../../components/PhotoCard";
import {Link, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {useEffect, useState} from "react";
import {fetchPhotos} from "../../async/fetchPhotos";
import {fetchAlbums} from "../../async/fetchAlbums";

const UserPage = () => {
  const {id} = useParams();
  const userId = id;


  const dispatch = useAppDispatch();
  const status = useAppSelector(state => state.albums.status);
  const error = useAppSelector(state => state.albums.error);
  const albums = useAppSelector(state => state.albums.albums);

  const photosStatus = useAppSelector(state => state.photos.status);
  const photosError = useAppSelector(state => state.photos.error);
  const photos = useAppSelector(state => state.photos.photos);

  const [croppedPhotos, setCroppedPhotos] = useState([]);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState (10);


  useEffect(() => {
    dispatch(fetchAlbums(userId));
  }, [dispatch, userId]);

  useEffect(() => {
    if (status === 'resolved' && albums.length) {
      dispatch(fetchPhotos(albums[0].id));
    }
  }, [status, dispatch, albums]);


  function getNextTenPhotos () {
    const tempStart = start + 10
    const tempEnd = end + 10
    setStart(tempStart);
    setEnd(tempEnd);
    setCroppedPhotos(photos.slice(tempStart, tempEnd))
  }

  function getPreviousTenPhotos () {
    const tempStart = start - 10
    const tempEnd = end - 10
    setStart(tempStart);
    setEnd(tempEnd);
    setCroppedPhotos(photos.slice(tempStart, tempEnd))
  }

  useEffect(()=>{
    setCroppedPhotos(photos.slice(start,end))
  },[photos.length, start, end, photos])

  return (
    <>
      <div className={g.container}>
        <Link to="/">Back to users</Link>
        <h1>This is user {id} page</h1>
        <div>
          {status === 'loading' && <h2>Loading...</h2>}
          {error &&  <h2>An error occured: {error}</h2>}
        </div>

        <hr/>

        <div>всего фото {photos.length}</div>

        {photosStatus === 'loading' && <h2>Loading...</h2>}
        {photosError &&  <h2>An error occured: {error}</h2>}
        {photosStatus === 'resolved' && (

          <div className={s.photos__container}>{croppedPhotos.map(m => <PhotoCard key={m.id}
                                                                                  photoUrl={m.url}
                                                                                  photoId={m.id}/>)}</div>
        )}

        <button onClick={() => getPreviousTenPhotos()} disabled={start === 0}>backward</button>
        <button onClick={() => getNextTenPhotos()} disabled={end === 50}>forward</button>
      </div>

    </>
  )
};

export {UserPage};