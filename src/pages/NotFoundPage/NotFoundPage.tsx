import {Link} from "react-router-dom";
import g from './../../global.module.scss'

const NotFoundPage = () => {
  return (
    <>
      <div className={g.container}>
        <h1>Page not found</h1>
        <div>Please, go back to start <Link to="/">Start Page</Link></div>
      </div>

    </>
  )
};

export {NotFoundPage};