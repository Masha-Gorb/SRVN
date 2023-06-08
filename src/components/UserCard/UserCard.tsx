import s from './UserCard.module.scss'
import g from './../../global.module.scss'
import {Link} from "react-router-dom";

type userCardPropsType = {
  key: number
  id: number
  name: string
  username: string
  email: string
  phone: string
  companyName: string
  companyCatchPhrase: string
  companyBs: string
}

const UserCard = (props: userCardPropsType) => {
  return (
    <>
      <div className={g.container}>
        <div className={s.userCard__main}>
          <div>
            <ul>
              <li><h3><Link to={`/user/${props.id}`}>{props.name}</Link></h3></li>
              <li><b>Username</b> {props.username}</li>
              <li><b>Email</b> {props.email}</li>
              <li><b>Phone</b> {props.phone}</li>
            </ul>
          </div>

          <div className={s.userCard__onHoverMoreInfo}>More info</div>
          <div className={s.userCard__hiddenCompanyInfo}>
            <ul>
              <li><b>Company name</b><br/> {props.companyName}</li>
              <li><b>Company bs</b><br/>  {props.companyBs}</li>
              <li><b>Catch phrase</b><br/>  {props.companyCatchPhrase}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
};

export {UserCard};