import { combineReducers } from 'redux'
import esercitazioneReducer from './esercitazione/esercitazioneReducer'
/*import cakeReducer from './cake/cakeReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'
import userReducer from './user/userReducer'*/

const rootReducer = combineReducers({
    esercitazione: esercitazioneReducer
  /*cake: cakeReducer,
  iceCream: iceCreamReducer,
  user: userReducer*/
})

export default rootReducer