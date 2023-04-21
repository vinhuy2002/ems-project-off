import React from 'react';
import FormsNav from './src/navigation/FormsNavigation';
import { store } from './src/app/store'
import { Provider } from 'react-redux'

const App = () => {
    return(
        <Provider store={store}>
            <FormsNav/>
        </Provider>
    );
}

export default App;