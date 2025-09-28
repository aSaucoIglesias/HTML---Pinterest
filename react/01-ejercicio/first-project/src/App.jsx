import './App.css'
import MyComponentAsync from './components/MyComponentAsync';

function App() {
  const name = "Antxon";
  const hour = 13;

  return (
    <>
      <h1>{hour < 12 ? "Buenos días " : "Buenas tardes "} {name}</h1>
      <MyComponentAsync />
    </>
  )
}

export default App
