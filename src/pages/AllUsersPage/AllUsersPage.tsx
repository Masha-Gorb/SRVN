import g from "../../global.module.scss";
import s from './AllUsersPage.module.scss'
import {UserCard} from "../../components/UserCard";
import {fetchUsers} from "../../async/fetchUsers";
import {FC, useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {Link} from "react-router-dom";
import {UsersType} from "../../types/usersType";

const AllUsersPage:FC = () => {

  const dispatch = useAppDispatch();
  const status: string = useAppSelector(state => state.users.status);
  const error: string = useAppSelector(state => state.users.error);
  const users: UsersType[] = useAppSelector(state => state.users.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <div className={g.container}>
        <Link to="/secret" style={{textDecoration: 'none', color: '#FFFFFF'}}>
          Secret Page :)
        </Link>
        <h1>All Users</h1>
        {status === 'loading' && <h2>Loading...</h2>}
        {error && <h2>An error occured: {error}</h2>}

        <div>Source: jsonplaceholder.typicode.com</div>
        <br/>

        <div className={s.allUsersPage__userCards}>

          {users.map(m => {
            return <UserCard
              key={m.id}
              id={m.id}
              name={m.name}
              username={m.username}
              email={m.email}
              phone={m.phone}
              companyName={m.company.name}
              companyBs={m.company.bs}
              companyCatchPhrase={m.company.catchPhrase}
            />
          })}
        </div>
      </div>
    </>
  )
};

export {AllUsersPage};