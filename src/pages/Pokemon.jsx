import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./styles/Pokemon.css"

const Pokemon = () => {

  const [pokemon, setPokemon] = useState()

  const {id} = useParams()
  console.log(id)

  const getPercentBar = (stat) => {
    const percent = (stat * 100) / 255
    return `${percent}%`
  }

  useEffect (() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`
    axios.get(URL)
     .then((res) => setPokemon(res.data))
     .catch((err) => console.log(err))
  }, [])

  return (
    <main className='pokemon__main'>
      <section className={`pokemon__main-header bg-lg-${pokemon?.types[0].type.name}`} >
        <section className='pokemon__container-img '>
          <div className='pokemon__divImg'>
            <img className='pokemon__img' src={pokemon?.sprites.other["official-artwork"].front_default} alt="" />
          </div>
        </section>
      </section>

      <section className='pokemon__sectionAll'>

        <h2 className='pokemonId__id'># {pokemon?.id}</h2>
        <h2 className='pokemonId__tittle'> {pokemon?.name}</h2>
        <div className='pokemonId__wh'>
          <div className='pokemonId_w'>
            <h5>Weight</h5>
            <h4>{pokemon?.weight}</h4>
          </div>
          <div>
            <h5>Heigth</h5>
            <h4>{pokemon?.height}</h4>
          </div>
        </div>

        <div className='pokemonTA__container'>
          <div className='pokemonT__container'>
            <div>
              <h3 className='pokemonT__tittle'>Type</h3>
            </div>
            <div className= {'pokemonT__typeContainer '}>
                {
                  pokemon?.types.map(type => <div className={`pokemonT__type-div bgButton-${type.type.name}`} key={type.name}><span className="pokemonT__type">{type.type.name}</span></div>)
                }
            </div>
          </div>
          
          <div className='pokemonA__abilitySection'>
            <div>
              <h3 className='pokemonA__tittle'>Habilities</h3>
            </div>            
            <div className='pokemonA__ability-container'>
                  {
                    pokemon?.abilities.map(ability => <div className='pokemonA__ability-containerDiv' key={pokemon.abilities.name}><span className='pokemonA__type'>{ability.ability.name}</span>
            </div>)
                  }
          </div> 
        </div>

        </div>

        <section className='pokemon__stats'>
          <h2 className='pokemon__stats-title'>Stats</h2>
          <section className='pokemon__stats-info'>
            {
              pokemon?.stats.map(stat => (
                  <article className='pokemon__stat' key={stat.stat.name}>
                <div className='pokemon__stat-header'>
                  <h4 className='pokemon__stat-name'>{stat.stat.name}</h4>
                  <h5 className='pokemon__stat-value'>{stat.base_stat}/255</h5>
                </div>
                <div className='pokemon__stat-bar'>
                  <div className='pokemon__stat-barGray'>
                    <div className='pokemon__stat-barProgress' style={{width : getPercentBar(stat.base_stat)}}></div>
                  </div>
                </div>
              </article>
              ))
            }
            
          </section>
        </section>

      </section>
    </main>
  )
}

export default Pokemon