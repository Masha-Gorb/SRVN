import {Link} from "react-router-dom";
import g from './../../global.module.scss'
import badgerGif from './../../assets/honey-badger-dance.gif'

const SecretPage = () => {
  return (
    <>
      <div className={g.container}>
        <h1>You found secret page 😉</h1>
        <div style={{marginBottom: '100px'}}>Please, go back to start <Link to="/">All users</Link></div>
        <img src={badgerGif} alt={'badger gif'}/>
      </div>

    </>
  )
};

export {SecretPage};