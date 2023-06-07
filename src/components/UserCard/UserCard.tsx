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
          <div>
            <ul>
              <li><h3><Link to={`/user/${person.id}`}>{person.name}</Link></h3></li>
              <li><b>Username</b> {person.username}</li>
              <li><b>Email</b> {person.email}</li>
              <li><b>Phone</b> {person.phone}</li>
            </ul>
          </div>

          <div className={s.userCard__onHoverMoreInfo}>More info</div>
          <div className={s.userCard__hiddenCompanyInfo}>
            <ul>
              <li><b>Company name</b><br/> {company.name}</li>
              <li><b>Company bs</b><br/>  {company.bs}</li>
              <li><b>Catch phrase</b><br/>  {company.catchPhrase}</li>
            </ul>
          </div>
        </div>

      </div>

    </>
  )
};

export {UserCard};