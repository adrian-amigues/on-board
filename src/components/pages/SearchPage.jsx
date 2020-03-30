import React, { useState, useEffect } from 'react'
import { useLazyQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const SEARCH_GAME = gql`
  query searchGame($name: String!) {
    searchGame(name: $name) {
      id
      name
      bggHref
      yearPublished
    }
  }
`

const SIMILAR_GAMES = gql`
  query similarGames($id: ID!) {
    similarGames(id: $id) {
      id
      bggHref
      name
      imageUrl
      rank
      rating
      weight
    }
  }
`

const SearchPage = () => {
  const [name, setName] = useState('')
  const [foundGameId, setFoundGameId] = useState()
  const [searchGame, searchGameData] = useLazyQuery(SEARCH_GAME)
  const [similarGames, similarGamesData] = useLazyQuery(SIMILAR_GAMES)

  useEffect(() => {
    console.log('SearchPage -> searchGameData.data', searchGameData.data)
    if (searchGameData.data?.searchGame) {
      similarGames({ variables: { id: searchGameData.data.searchGame.id } })
    }
  }, [searchGameData.data])

  const handleSubmit = e => {
    console.log('SearchPage -> handleSubmit')
    e.preventDefault()
    searchGame({
      variables: { name },
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Search for a game</h2>
        <input
          type="text"
          onChange={e => setName(e.target.value)}
          value={name}
        />
        <input type="submit" value="Submit" />
      </form>
      {searchGameData.data?.searchGame && (
        <div>
          <h3>Found Game:</h3>
          <p>
            {searchGameData.data.searchGame.name} -{' '}
            {searchGameData.data.searchGame.yearPublished}
          </p>
        </div>
      )}
      {similarGamesData.data?.similarGames && (
        <div>
          <h3>Similar Games:</h3>
          <ul>
            {similarGamesData.data.similarGames.map(game => (
              <li key={game.id}>
                {game.name} - rank: {game.rank}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default SearchPage
