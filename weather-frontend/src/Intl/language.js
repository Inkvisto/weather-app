import * as uk from './uk.json'


const locale = window.navigator.userLanguage   || window.navigator.language;

export default locale
export const language = locale.slice(0,2)



const defaultWeatherLang = {
  wind:{
    0:'Speed',
    1:'Degrees',
    2:'Gust',
    3:'Pressure',
    4:'Humidity',
    5:'Rain',
    6:'Snow'
  },
    day:"Today is",
  months:{
          "0": "January",
          "1": "February",
          "2": "March",
          "3": "April",
          "4": "May",
          "5": "June",
          "6": "July",
          "7": "August",
          "8": "September",
          "9": "October",
          "10": "November",
          "11": "December"
        
  }
}


export const languageChange = () => {
    switch(language){
        case 'uk':
            return uk.default
            
     default:
        return defaultWeatherLang
    }
}
