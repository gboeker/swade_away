import React, {useState, useEffect} from 'react'
import './styles.css';
import logo from './one.png'

function App() {
  
  const [data, setData] = useState([{}])
  const [buttonClicked, setButtonClicked] = useState(false)



  useEffect(() => {
    fetch("/members").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])

  const handleClick = () => {
    setButtonClicked(true)
  }

  return (
    <div>
      <header>Swade Away</header>
      <button onClick={handleClick}>Show data</button>
      {buttonClicked && (typeof data.members === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        buttonClicked && data.members.map((member, i) => (
          <p key={i}>{member}</p>
        ))
      )}

      <img src={logo} className="App-logo" alt="logo" />

    </div>
  )
}

export default App
