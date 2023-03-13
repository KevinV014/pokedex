import React from 'react'
import { useDispatch } from 'react-redux'
import { setNameTrainerGlobal } from './store/slices/nameTrainer.slice'

const Home = () => {

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    const nameTrainer = e.target.nameTrainer.value
    dispatch(setNameTrainerGlobal(nameTrainer))
  }
  return (
    <main>
      <section className='pokedexHome'>
        <div className='pokedexHome__img'>
          <img src="/images/Pokedex.png" alt="Img" />
        </div>
        <div className='pokedexHome__containerText'>
          <div className='podedexHome__containerAsh'>
          <img className='podexHome__ash' src="/images/ash.png" alt="Img" />
          </div>
          <div className='pokedexHome__text'>
            <h2 className='pokedexHome__text-h2'>Hello Trainer!</h2>
            <p className='pokedexHome__text-p'>Give me your name to start</p>
            <form onSubmit={handleSubmit}>
              <input
              required
              type="text" 
              id='nameTrainer' 
              placeholder='Your name...'
              autoComplete="off"
              />
              <button>Start</button>
            </form>
          </div>
        </div>
        
      </section>
    </main>
  )
}

export default Home