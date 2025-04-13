import './index.css'

function App() {
  return (
    <div className="app">
      <h1 className="topic-title">Basic JSX</h1>
      <div className="card">
        <img src="https://avatars.githubusercontent.com/u/149268124?s=400&u=0b5abba4129432aad1ae8b94b25ebcc4a37d7469&v=4" />
        <div className='card-content'>
          <h2 className='name'>Ana Mohammed</h2>
          <p className='bio'>
            I am a software engineer with a passion for building scalable and
            efficient systems.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App