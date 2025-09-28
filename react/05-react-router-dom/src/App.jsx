import { Outlet } from 'react-router-dom'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

import Title from './components/Title'
import MainMenu from './components/MainMenu'

function App() {

  return (
    <>
      <header>
        <Title />
        <MainMenu />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        Created by Antxon Saúco
      </footer>
    </>
  )
}

export default App

