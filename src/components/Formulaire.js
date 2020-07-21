import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

function Formulaire(props) {
  const [name, setName] = useState()
  const [firstname, setFirstName] = useState()
  const [adress, setAdress] = useState()

  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    history.push({ pathname: '/', data: { name: name, firstname: firstname, adress: adress } })
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit}>
        <label>
          Nom :
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Prénom :
          <input type="text" value={firstname} onChange={(e) => setFirstName(e.target.value)} />
        </label>
        <label>
          Adresse :
          <input type="text" value={adress} onChange={(e) => setAdress(e.target.value)} />
        </label>
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  )
}

export default Formulaire
