import Layout from '../components/Layout'

function Home() {
  return (
  	<Layout>
	  <div className="row">
	  	 <div className="col-lg-12 text-center">
	  	   <h1 className="mt-5">Consulte aqui sus beneficios</h1>
	  	   <p className="lead">Aproveche las promociones!</p>
	  	   <ul className="list-unstyled">
	  	     <li>1 beneficio</li>
	  	     <li>2 beneficio</li>
	  	   </ul>
	  	 </div>
	  </div>
  	</Layout>
  )
}

export default Home