import React from 'react';

import { Cards, Chart, CountryPicker} from './components'
import styles from './App.module.css'
import { fetchData } from './api' // You can call index.js files like this

class App extends React.Component {
    async componentDidMount () { //Best place to do the request for an api
        const data = await fetchData();
        console.log(data);
    }
    render() {
        return (
            <div className={styles.container}>
                <Cards/>
                <CountryPicker/>
                <Chart/>
            </div>
        )

    }
}

export default App;