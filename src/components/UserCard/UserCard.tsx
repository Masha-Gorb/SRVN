import s from './UserCard.module.scss'
import g from './../../global.module.scss'
import {FC} from "react";
import {Link} from "react-router-dom";

type personPropsType = {
  id: number
  name: string
  username: string
  email: string
  phone: string
}
type companyPropsType = {
  name: string
  catchPhrase: string
  bs: string
}
type userCardPropsType = {
  key: number
  person: personPropsType
  company: companyPropsType
}

const UserCard: FC<userCardPropsType> = ({ person, company }) => {
  return (
    <>
      <div className={g.container}>
        <div className={s.userCard__main}>
          <h1>This is card of user </h1>

          <div>
            <ul>
              <li><Link to={`/user/${person.id}`}>{person.name}</Link></li>
              <li>username: {person.username} </li>
              <li>email: {person.email}</li>
              <li>phone: {person.phone}</li>
            </ul>
          </div>

          <div>
            <ul>
              <li>company name: {company.name}</li>
              <li>company bs: {company.bs}</li>
              <li>company catch phrase: {company.catchPhrase}</li>
            </ul>
          </div>

        </div>
      </div>

    </>
  )
};

export {UserCard};