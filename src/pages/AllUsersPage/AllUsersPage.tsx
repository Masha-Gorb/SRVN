import g from "../../global.module.scss";
import s from './AllUsersPage.module.scss'
import {UserCard} from "../../components/UserCard";
import {fetchUsers} from "../../async/fetchUsers";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../store/hooks";

const AllUsersPage = () => {

  const dispatch = useAppDispatch();
  const status = useAppSelector(state => state.users.status);
  const error = useAppSelector(state => state.users.error);
  const users = useAppSelector(state => state.users.users);


  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <div className={g.container}>
        <h1>All Users Page</h1>
        {status === 'loading' && <h2>Loading...</h2>}
        {error &&  <h2>An error occured: {error}</h2>}

        <div className={s.startPage__userCards}>
          {users.map(m => {
            return <UserCard
              key={m.id}
              person={{
                id: m.id,
                name: m.name,
                username: m.username,
                email: m.email,
                phone: m.phone
              }}
              company={{
                name: m.company.name,
                catchPhrase: m.company.catchPhrase,
                bs: m.company.bs}}
            />
          })}
        </div>

      </div>
    </>
  )
};

export {AllUsersPage};