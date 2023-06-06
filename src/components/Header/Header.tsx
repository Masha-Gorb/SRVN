import s from './Header.module.scss'
import g from './../../global.module.scss'

const Header = () => {
  return (
    <>
        <div className={s.header}>
          <div className={g.container}>
            <div className={s.header__container}>
            </div>
          </div>

        </div>
    </>
  )
};

export {Header};