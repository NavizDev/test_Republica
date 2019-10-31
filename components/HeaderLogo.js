import Link from "next/Link";
import Header from "./Header";

const HeaderLogo = props => {
  return (
    <div>
      <Header title={props.title} />
      <header>
        <div className="box-header" />
        <div className="father">
          <div className="brand">La republica</div>
        </div>
        <div className="nav">
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/articles">
                <a>Article</a>
              </Link>
            </li>
          </ul>
        </div>
        <style global jsx>
          {`
            body {
              margin: 0 150px;
            }
          `}
        </style>
        <style jsx>
          {`
            .box-header {
              height: 250px;
              background: url(https://tpc.googlesyndication.com/simgad/476501940626586732);
              background-size: cover;
            }
            header {
              background: #ff0102;
            }
            .brand {
              font-size: 50px;
              color: white;
            }
            .nav,
            .father {
              display: flex;
              justify-content: center;
            }
            ul {
              list-style: none;
              padding: 0;
            }
            li {
              display: inline-block;
              padding: 5px;
              font-size: 18px;
              color: white;
              background: #4d4d59;
            }
            li a {
              color: white;
            }
          `}
        </style>
      </header>
    </div>
  );
};

export default HeaderLogo;
