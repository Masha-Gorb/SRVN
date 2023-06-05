
import g from "../../global.module.scss";
import {UserCard} from "../../components/UserCard";

const StartPage = () => {
  return (
    <>
      <div className={g.container}>
        <h1>Start Page</h1>
        <UserCard/>
      </div>
    </>
  )
};

export {StartPage};