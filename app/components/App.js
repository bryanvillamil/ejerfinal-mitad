import React, {Component} from 'react';
import Header from './Header';
import Search from './Search';
import Forecast from './Forecast';

import { BrowserRouter, Route} from 'react-router-dom';

class App extends Component {
    render () {
        return (
            <BrowserRouter>
                <div className='contenedor'>
                    <Header content="space-between"/>

                    <Route exact path='/' render={function (props) {
                        return (
                            <div className='home-container' >
                                <h2 className='Title-content'>
                                    Enter a City and State
                                </h2>
                                <Search
                                //PropsDefault para cambiar estilo flex
                                direction='column' 
                                //llama funcion de presionar buton
                                onSubmitcodigo={function(city){ 
                                    props.history.push({
                                        pathname: 'forecast',
                                        search: '?city=' + city
                                    })
                                }} 
                                //llama funcion de input de busqueda
                                //onUpdatecodigo={function(){}} 
                                search={1234} />
                            </div>
                        )
                    }} />

                    <Route path='/forecast' component={Forecast} />
                </div>

            </BrowserRouter>

        )
    }
}

export default App;


