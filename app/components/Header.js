import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Search from './Search';

class Header extends Component {
    render() {
        return (
            <header className="header" style={{justifyContent: this.props.content}}>
                <div className="header__left">
                    <h1>Clever Title</h1>
                </div>

                <div className="header__right">
                    <Search
                        //PropsDefault para cambiar estilo flex
                        direction='row' 
                        //llama funcion de presionar buton
                        onSubmitcodigo={function(city){ 
                            props.history.push({
                                pathname: 'forecast',
                                search: '?city=' + city
                            })
                        }} 
                        //llama funcion de input de busqueda
                        //onUpdatecodigo={function(){}} 
                        search={1234} 
                    />
                </div>
            </header>
        )
    }
}

// PropsDefault para cambiar propiedades del componente
Header.defaultProps = {
  content: 'space-around'
}

Header.propTypes = {
  content: PropTypes.string,
}


// exportamos el modulo para que pueda ser llamado
module.exports = Header;