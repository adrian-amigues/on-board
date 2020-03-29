import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

import GameCard from '~components/GameCard'

const HOT_GAMES_QUERY = gql`
  {
    hotGames {
      id
      name
      imageUrl
      description
      rank
    }
  }
`

const Main = () => {
  const { data } = useQuery(HOT_GAMES_QUERY)
  console.log('Main -> data', data)

  return (
    <div>
      <div>Hell World!</div>
      <div>
        {data?.hotGames.map(game => (
          <GameCard
            id={game.id}
            name={game.name}
            image={game.imageUrl}
            description={game.description}
          />
        ))}
      </div>
    </div>
  )
}

export default Main
