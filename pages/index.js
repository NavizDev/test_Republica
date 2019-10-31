import Layout from "../components/Layout";
import Content from "../components/Content";
export default class extends React.Component {
  render() {
    return (
      <Layout titulo="Noticias del Peru y el Mundo">
        <Content />
      </Layout>
    );
  }
}
//export default () => <Layout />;
