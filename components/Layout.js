import Link from 'next/link'
import Head from 'next/head'

export default ({ children, title = 'This is the default title' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
    </Head>
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
        <div className="container">
          <a className="navbar-brand" href="#">Club Vivamos ET</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <div className="navbar-nav ml-auto">
              <Link className="nav-item active" href="/">
                <a className="nav-link">Inicio
                </a>
              </Link>
              <Link className="nav-item" href="/about">
                <a className="nav-link">Nosotros</a>
              </Link>
              <Link className="nav-item" href="/services">
                <a className="nav-link">Servicios</a>
              </Link>
              <Link className="nav-item" href="/contact">
                <a className="nav-link">Contactenos</a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>

    <div className='container'>

    {children}

    </div>

    <footer className="footer">
      <div className="container">
        <p className="text-muted">{'Aqui tengo el footer'}</p>
      </div>
    </footer>
  </div>
)