import { useState } from 'react'
import './App.css'
import Movie from './components/Movie'
import Review from './components/Review'


function App() {

  const [score, setScore] = useState(0);

  return (
    <>
      <Movie
        title="Guardines de la Galaxia"
        poster="https://m.media-amazon.com/images/M/MV5BYWI0NTNlN2MtMWRjNy00M2QwLWFlZTgtZTlkMTZiYTU2NTk1XkEyXkFqcGc@._V1_.jpg"
      />

      <hr />
      <label htmlFor="score">
        <input
          type="number"
          name="score"
          id="score"
          value={score}
          onChange={(e)=> {setScore(e.target.valueAsNumber)}}
        />
      </label>
      <Review
        title="Guardines de la Galaxia"
        score={score}
      />
    </>
  )
}

export default App
