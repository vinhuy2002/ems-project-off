import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../screen/login/authSlice'
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import { combineReducers } from '@reduxjs/toolkit';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch