import React from 'react'
import { useSelector } from 'react-redux'
import { PokemonCard }   from '../components/pokedex/PokemonCard'
import { usePokedex } from '../hooks/usePokedex'



export const Pokedex = () => {

  const nameTrainer = useSelector(store => store.nameTrainer)

  const {handleSubmit, handleChangeSelect, types, pokemonInPage, handleNextPage, handlePreviousPage, pagesInBlock, setCurrentPage} = usePokedex()
 
  return (
    <main>
      <p className='principalText'><span className='principalTetx__span'>Welcome {nameTrainer},</span> here you can find your favorite pokemon </p>
      <form onSubmit={handleSubmit}>
        <div className='PrincipalText-containerInput'>
          <input type="text" id='pokemonName' placeholder='Search a pokemon'
          autoComplete="off"/>
          <button >Search</button>
        </div>
        <select onChange={handleChangeSelect}>
          <option value="">All</option>
            {
              types.map(type => <option key={type.url}>{type.name}</option>)
            }
          
        </select>
      </form>
      <section className='Pokedex__list'>
        {
          pokemonInPage.map(pokemon => (
            <PokemonCard pokemonUrl={pokemon.url} key={pokemon.url}/>
          ))
        }
      </section>
      <section>
        <div className='container__pagination'>
          <button className='btn__pagination-arrow' onClick={handlePreviousPage}>{"<<"}</button>
          <button className='btn__pagination' onClick={() => setCurrentPage(1)}>...</button>
        {
          pagesInBlock.map(page => <button className='btn__pagination-number' onClick={() => setCurrentPage(page)} key={page}>{page}</button>)
        }
        <button className='btn__pagination' onClick={() => setCurrentPage(lastPage)}>...</button>
        <button className='btn__pagination' onClick={handleNextPage}>{">>"}</button>
        </div>
      </section>
    </main>
  )
}
