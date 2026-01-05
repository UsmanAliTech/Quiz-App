import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Components/Home.css';
import Quiz from '../Components/Quiz'; // Import your Quiz component

const Home = () => {
  // 1. Create state to track if the quiz has started
  const [isStarted, setIsStarted] = useState(false);

  // 2. If start is clicked, show the Quiz component instead
  if (isStarted) {
    return <Quiz />;
  }

  return (
    <div className='home-wrapper'>
      <div className="quiz-header d-flex align-items-center justify-content-center">
        <span className="back-arrow">←</span>
        <h2 className="mb-0 h5">Quiz App</h2>
      </div>

      <div className="container mt-lg-5">
        <div className="row align-items-center min-vh-75">
          
          <div className="col-md-6 text-center text-md-start order-2 order-md-1 mt-5 mt-md-0">
            <h1 className='display-4 fw-bold'>Test your <br /> knowledge</h1>
            <p className='text-muted fs-5 mt-3'>Challenge yourself with our exciting quizzes</p>
            
            <div className="d-grid gap-3 col-md-10 mt-5">
              {/* 3. Add the onClick handler here */}
              <button 
                className='btn btn-quiz-primary py-3 fw-bold'
                onClick={() => setIsStarted(true)}
              >
                Start
              </button>
              <button className='btn btn-quiz-secondary py-3 fw-bold'>Leaderboard</button>
            </div>
          </div>

          <div className="col-md-6 text-center order-1 order-md-2 mt-4 mt-md-0">
            <img 
              src="/boy-illustration.png" 
              alt="Boy taking quiz" 
              className="img-fluid quiz-illustration" 
            />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home;