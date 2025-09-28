import { useContext } from 'react'
import './App.css'
import ThemeSwitcher from './components/ThemeSwitcher'
import { ThemeContext } from './context/ThemeContext'

function App() {

  const{ theme } = useContext(ThemeContext)

  return (
    <div className={`color-${theme}`}>
      <header>
        <ThemeSwitcher />
      </header>
      <div className="body">
        <h2>Titular</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem aut laudantium repellat cumque commodi quisquam. Id ab nam magni ipsum autem. Modi cum, aperiam exercitationem fugit nostrum labore odio perspiciatis?</p>
      </div>
    </div>
  )
}

export default App
