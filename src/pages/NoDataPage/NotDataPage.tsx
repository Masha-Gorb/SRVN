import {Link} from "react-router-dom";
import g from './../../global.module.scss'

const NotDataPage = () => {
  return (
    <>
      <div className={g.container}>
        <h1>Нет данных, извините 🥺</h1>
        <div>Please, go back to start <Link to="/">Start Page</Link></div>
      </div>

    </>
  )
};

export {NotDataPage};