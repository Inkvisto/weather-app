import React from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { loadSearchValue } from '../../redux/features/weather/SearchInput';
import { FalloutWeather } from '../../weatherComponents/FalloutWeather';
import { Temperature } from '../../weatherComponents/Temperature';
import { SideSheet } from '../../weatherComponents/SideSheet';
import { RootState } from '../../redux/reducers/rootReducer';
import { AuthPopUp } from '../AuthPopUp';
import { languageChange } from '../../Intl/language';
import { Input } from '../Input'

import styles from './Header.module.scss'


export const Header = () => {

  const data = useSelector((state: RootState) => state.data)
  const dispatch = useDispatch()


  const inputText = (type: string) => {

    let switchInputText = {

      'emptyCityName':
        () => <div className={styles.emptyCityName}>City Name is empty :(</div>,

      'correctCityName':
        () => <div className={styles.filter}><Temperature /></div>,

      'wrongCityName':
        () => <div className={styles.wrongCityName}>Here must be a temperature,<br /> but you write wrong city name</div>

    }
    return (switchInputText[type as keyof typeof switchInputText] || switchInputText['wrongCityName'])()
  }


  const date = new Date()
  const day = date.getDate()
  const month = languageChange().months[date.getMonth()]


  const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      dispatch(loadSearchValue((event.currentTarget).value))
    }
  }


  const cityNameCheck= () => {
    switch (data.cod) {
      case 200:
        return inputText('correctCityName')
      case '404':
        return inputText('wrongCityName')
      case '400':
        return inputText('emptyCityName')
      default:
        break;
    }
  }


  return (
    <header className={styles.header}>
      <div className={styles.sideSheet}>
        <SideSheet />
      </div>
      <div className={styles.layer}>
        <div className={styles.flex}>
          <nav className={styles.location}>
            <Input inputStyle='search' onKeyPress={onKeyPress} />
            {cityNameCheck()}
          </nav>
          <div className={styles.fallout}>
            <FalloutWeather />
          </div>
          <div className={styles.auth}>
            <AuthPopUp />
            <div className={styles.date}>
              <h1>{day}</h1>
              <h2>{Object.values(languageChange().day)}
                <p>{month.charAt(0).toUpperCase() + month.slice(1)}</p>
              </h2>
            </div>
          </div>

        </div>
      </div>
      <div className={styles.background}></div>
    </header>
  )
}


export default Header
