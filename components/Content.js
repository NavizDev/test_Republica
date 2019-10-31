import { news } from "../pages/news.json";

class Content extends React.Component {
  constructor() {
    super();
    this.state = {
      news //news:news
    };
  }

  render() {
    const news = this.state.news.map((noticia, i) => (
      <div className="card m-2">
        <div className="row no-gutters">
          <div className="col-md-4 color-card">
            <h3 className="card-title">
              {noticia.title}
              {i}
            </h3>
          </div>
          <div className="col-md-8">
            <div className="card-body p-0">
              <img src={noticia.img} className="card-img" alt="..." />
            </div>
          </div>
        </div>
        <style jsx>{`
          .color-card {
            background: #4d4d59;
            color: white;
          }
        `}</style>
      </div>
    ));

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8">{news}</div>
          <div className="col-md-4">
            <div className="card bg-dark text-white">
              <img src="..." className="card-img" />
              <div className="card-img-overlay">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">Last updated 3 mins ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
