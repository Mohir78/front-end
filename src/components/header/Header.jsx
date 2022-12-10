import HeaderNav from "./header-nav/HeaderNav";
import HeaderTop from "./header-top/HeaderTop";

const Header = () => {
  return (
    <header className="header">
      <HeaderTop/>
      <HeaderNav/>
    </header>
  )
}

export default Header