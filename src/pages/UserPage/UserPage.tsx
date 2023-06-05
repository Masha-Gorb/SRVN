import g from './../../global.module.scss'
import {PhotoCard} from "../../components/PhotoCard";

const UserPage = () => {
  return (
    <>
      <div className={g.container}>
        <h1>Here will be User Page</h1>
        <PhotoCard/>
      </div>

    </>
  )
};

export {UserPage};