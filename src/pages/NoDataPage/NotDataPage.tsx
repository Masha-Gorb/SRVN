import {Link} from "react-router-dom";
import g from './../../global.module.scss'

const NotDataPage = () => {
  return (
    <>
      <div className={g.container}>
        <h1>Нет данных, извините 🥺</h1>
        <div>Please, go back to start <Link to="/">All users</Link></div>
      </div>

    </>
  )
};

export {NotDataPage};