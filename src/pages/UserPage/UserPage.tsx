import g from './../../global.module.scss'
import s from './UserPage.module.scss'
import {PhotoCard} from "../../components/PhotoCard";
import {Link, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {useEffect, useState} from "react";
import {fetchPhotos} from "../../async/fetchPhotos";
import {fetchAlbums} from "../../async/fetchAlbums";
import {PhotosType} from "../../types/photosType";
import {AlbumsType} from "../../types/albumsType";

const UserPage = () => {
  const {id} = useParams();
  const userId = id;


  const dispatch = useAppDispatch();
  const status: string = useAppSelector(state => state.albums.status);
  const error : string = useAppSelector(state => state.albums.error);
  const albums : AlbumsType[] = useAppSelector(state => state.albums.albums);

  const photosStatus: string = useAppSelector(state => state.photos.status);
  const photosError: string = useAppSelector(state => state.photos.error);
  const photos : PhotosType[] = useAppSelector(state => state.photos.photos);

  const [croppedPhotos, setCroppedPhotos] = useState<PhotosType[]>([]);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState (10);


  useEffect(() => {
    dispatch(fetchAlbums(userId));
  }, [dispatch, userId]);

  useEffect(() => {
    if (status === 'resolved' && albums.length) {
      dispatch(fetchPhotos(String(albums[0].id)));
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

        <div>In this album {photos.length} photos</div>
        <div className={s.photos__buttons}>
          <button onClick={() => getPreviousTenPhotos()} disabled={start === 0}>&#8592; backward</button>
          <button onClick={() => getNextTenPhotos()} disabled={end === 50}>forward &#8594;</button>
        </div>

        {photosStatus === 'loading' && <h2>Loading...</h2>}
        {photosError &&  <h2>An error occured: {error}</h2>}
        {photosStatus === 'resolved' && (

          <div className={s.photos__container}>{croppedPhotos.map(m => <PhotoCard key={m.id}
                                                                                  photoUrl={m.url}
                                                                                  photoId={m.id}/>)}</div>
        )}

      </div>

    </>
  )
};

export {UserPage};