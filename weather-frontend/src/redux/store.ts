import {rootReducer} from './reducers/rootReducer'
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./redux-saga";
import {applyMiddleware, configureStore} from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware()




const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    [...getDefaultMiddleware({thunk:false, serializableCheck: false}),sagaMiddleware],
    devTools:true //composeWithDevTools
  })


sagaMiddleware.run(rootSaga)



export type AppDispatch = typeof store.dispatch


export default store