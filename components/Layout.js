import HeaderLogo from "./HeaderLogo";
import Header from "./Header";
import Footer from "./Footer";

const Layout = props => (
  <div className="content-layout">
    <Header titulo={props.title} />
    <HeaderLogo />
    {props.children}
    <Footer />
  </div>
);

export default Layout;
