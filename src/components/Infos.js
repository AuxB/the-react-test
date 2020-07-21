import React from 'react'

function Infos (props) {
  return (
    <div>
      <p>{props.location && props.location.data.name}</p>
      <p>{props.location && props.location.data.firstname}</p>
      <p>{props.location && props.location.data.adress}</p>
    </div>
  )
}

export default Infos
