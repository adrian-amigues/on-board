import React from 'react'
import axios from 'axios'
import { useLazyQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const BOOKS = gql`
  {
    books {
      title
    }
  }
`

const Main = () => {
  const [getBooks, { data }] = useLazyQuery(BOOKS)
  console.log('Main -> data', data)

  const clickHandler = () => {
    // axios
    //   .get(
    //     'https://api.geekdo.com/api/hotness?geeksite=boardgame&nosession=1&objecttype=thing',
    //     { crossDomain: true }
    //   )
    //   // .then(({ data }) => parseStringPromise(data))
    //   .then(result => {
    //     console.log('clickHandler -> result', result)
    //   })
    //   .catch(error => {
    //     console.log('error: ', error)
    //   })
    getBooks()
  }

  return (
    <div>
      <div>Hell World!</div>
      <button onClick={clickHandler}>get some stuff</button>
    </div>
  )
}

export default Main
