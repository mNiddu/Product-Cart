import {combineReducers} from 'redux'
import CartReducer from './CartReducer'
const Reducer=combineReducers({
    cart:CartReducer
})

export default Reducer