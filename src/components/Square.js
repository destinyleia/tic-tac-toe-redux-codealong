import React from 'react'
import { useDispatch } from 'react-redux'
import { game } from 'reducers/game'
import { Player } from 'components/Player'

export const Square = ({ value, index }) => {
  const dispatch = useDispatch()
  // useDispatch allows us to trigger things inside our store. We dispatch from the folder "reducers" in game.js

  const handleClick = () => {
    dispatch(game.actions.captureSquare({ index }))
  }

  return (
    <button
      className={value === null ? 'square clickable' : 'square'}
      type="button"
      onClick={handleClick}>
      <Player value={value} />
    </button>
  )
}
