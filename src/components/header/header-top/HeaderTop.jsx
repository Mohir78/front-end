import { Link } from 'react-router-dom';
// CSS
import c from './HeaderTop.module.css';
//images
import logo from '../../../assets/logo/logo.png';

const HeaderTop = () => {
  return (
    <div className={c["header-top"]}>
      <div className="container">
        <div className={c["header-top-inner"]}>
          <div className={c["header-top__logo"]}>
            <Link to="/">
              <img className={c["header-top__logo"]} src={logo} alt="Site logo" />
            </Link>
          </div>
          <Link className={c["header-top__link"]} to="/deans-system">
            Online dean's system
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeaderTop