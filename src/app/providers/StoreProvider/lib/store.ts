import {type ReducersMapObject, configureStore} from '@reduxjs/toolkit';
import {type StateSchema} from './StateSchema';
import {userReducer} from 'entities/User';
import {loginReducer} from 'features/AuthByUsername';

export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        user: userReducer,
        loginForm: loginReducer,
    };
    return configureStore({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
