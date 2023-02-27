import React from 'react'
import { useDispatch } from 'react-redux'
import { logOut } from '../../pages/store/slices/nameTrainer.slice'
import "./styles/Header.css"

const Header = () => {

    const dispatch = useDispatch()

    const handleClickLogOut = () => {
        dispatch(logOut())
    }

  return (
    <header className='header'>
        <div className='header__red'>
            <div className='header__img'>
                <img src="/images/Pokedex.png" alt="img pokedex" />
            </div>
        </div>
        <div className='header__black'>
            <div className='header__pokeball'>
                <button className='header__btn' onClick={handleClickLogOut}>
                <i className='bx bx-log-out'></i>
                </button>
            </div>
        </div>
    </header>
  )
}

export default Header