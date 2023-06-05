import s from './UserCard.module.scss'
import g from './../../global.module.scss'

const UserCard = () => {
  return (
    <>
      <div className={g.container}>
        <div className={s.userCard__main}>
          <h1>This is card of user </h1>
          <div>
            <ul>
              <li>name</li>
              <li>username</li>
              <li>email</li>
              <li>phone</li>
            </ul>
          </div>
        </div>
      </div>

    </>
  )
};

export {UserCard};