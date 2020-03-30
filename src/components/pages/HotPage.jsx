import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

import GameCard from '~components/GameCard'

const HOT_GAMES_QUERY = gql`
  {
    hotGames {
      id
      name
      bggHref
      imageUrl
      description
      yearPublished
      rank
      minPlayers
      maxPlayers
    }
  }
`

const HotPage = () => {
  const { data } = useQuery(HOT_GAMES_QUERY)

  return (
    <div>
      {data?.hotGames.map(game => (
        <GameCard
          key={game.id}
          name={game.name}
          image={game.imageUrl}
          bggHref={game.bggHref}
          description={game.description}
          yearPublished={game.yearPublished}
          rank={game.rank}
          minPlayers={game.minPlayers}
          maxPlayers={game.maxPlayers}
        />
      ))}
    </div>
  )
}

export default HotPage
