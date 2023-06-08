import g from './../../global.module.scss'
import s from './Photocard.module.scss'
import {FC} from "react";

type PropsType = {
  key: number
  photoUrl: string
  photoId: number
}

const PhotoCard: FC<PropsType> = ({photoUrl, photoId})=> {
  return (
    <>
      <div className={g.container}>
        <div className={s.photoCard__main}>
          <img className={s.photoCard__photo} src={photoUrl} alt={'photo'}/>
          <div>Photo ID: {photoId}</div>
        </div>
      </div>
    </>
  )
};

export {PhotoCard};