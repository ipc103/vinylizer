import React from 'react'

export default (props) => {
  const {artists} = props

  if (!artists || !artists.length ) {
    return <div>Loading</div>
  }

  return (
    <div>
      <h2>Artist List</h2>
      <ul>
        {artists.map((artist, i) => <li key={i}>{artist.name}</li>)}
      </ul>
    </div>
  )
}
