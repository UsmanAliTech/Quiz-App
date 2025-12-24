
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Components/Home.css'

const Home = () => {
  return (
    <div className='home-wrapper d-flex align-items-center' 
    // style={{ minHeight: '50vh' }}
    >
        <div className="container">
          <div className="header">Quiz App</div>
          <div className="row align-items-center">
            
          
            <div className="col-md-6 order-2 order-md-1 mt-5"  >
              
              <h1 className='mt-5'>Test your knowledge</h1>
              <h4 className='mt-4 h5 mb-5'>challenge yourself with this quiz</h4>
              <button className='mt-5 btn'>start</button>
            </div>
            <div className="mt-5 text-center col-md-6 mb-5 mb-md-0 order-1 order-md-1 items-center">
              <img 
                src="public/download.png" 
                alt="Description" 
                className="img-fluid mt-5" 
              />
            </div>

          </div>
        </div>
    </div>
  )
}

export default Home