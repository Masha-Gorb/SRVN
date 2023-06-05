import g from './../../global.module.scss'
import s from './Photocard.module.scss'

const PhotoCard = () => {
  return (
    <>
      <div className={g.container}>
        <div className={s.photoCard__main}>
          <h1>Photo id is</h1>
          <img className={s.photoCard__photo}
               src={'https://avatars.mds.yandex.net/i?id=4f13dd9ec981bad8a4743cf261aa77cda1e97358-7551053-images-thumbs&n=13'}
               alt={'users photo'}/>
        </div>
      </div>
    </>
  )
};

export {PhotoCard};