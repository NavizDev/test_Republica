class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="footer">
          <p>© Todos los derechos reservados.</p>
          <p>Juan Silupu - Frontend Developer</p>
        </div>
        <style jsx>
          {`
            footer {
              background: #e4e4e4;
              display: flexbox;
              justify-content: center;
            }
          `}
        </style>
      </footer>
    );
  }
}

export default Footer;

{
  /*
  Cuando los componentes se crean asi: en la vista de extensiones se crean como <unknown></unknown>
  cuando deberia crearse asi:<div></div>
  export default () => (<div></div>);
  */
}
