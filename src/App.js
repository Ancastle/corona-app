import React from 'react';

import { Cards, Chart, CountryPicker} from './components'
import styles from './App.module.css'
import { fetchData } from './api' // You can call index.js files like this

class App extends React.Component {
    state = {
        data: {}
    };

    async componentDidMount () { //Best place to do the request for an api
        const fetchedData = await fetchData();
        this.setState({data : fetchedData});
    };

    render() {
        const { data } = this.state;

        return (
            <div className={ styles.container }>
                <Cards data={ data }/>
                <CountryPicker/>
                <Chart/>
            </div>
        );

    };
}

export default App;