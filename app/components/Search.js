import React, {Component} from 'react';
import PropTypes from 'prop-types';    
import { BrowserRouter, Route} from 'react-router-dom';
import ReactRouter from "react-dom";     


// inicio Componente Buscar
class Search extends Component {
    state = {
        // estado del buscador que viene vacio
        search: ''
    }
    // vamos a la api y buscamos el valor del search
    buttonSubmitcodigo = () => {

        this.props.onSubmitcodigo(this.state.search)

        this.setState(function () {
          return {
            search: ''
          }
        })
    }

    // agregamos el campo a buscar en una variable
    inputUpdatecodigo = (e) => {
        var busc = e.target.value;
        this.setState(function () {
            return {
                search: busc
            }
        });
    }

    // lo que se enviara para que muestre desde components App
    render() {
        return (
            <div className='search-container'
                style={{flexDirection: this.props.direction}}>
                <input // Campo para ingresar ciudad a buscar
                    className='form-control'
                    // donde se envia el valor del campo
                    onChange={this.inputUpdatecodigo}
                    placeholder='St. George, Utah'
                    type='text'
                    // guarda estado del value que por default esta ''
                    value={this.state.search} />

                <button // Button para buscar ciudad
                    type='button'
                    className='btn btn-success'
                    // llama funcion de 
                    onClick={this.buttonSubmitcodigo}>  
                    Get Weather
                </button>
            </div>
        )
    }
}

// PropsDefault para cambiar propiedades del componente
Search.defaultProps = {
  direction: 'column'
}

Search.propTypes = {
  direction: PropTypes.string,
}


// exportamos el modulo para que pueda ser llamado
module.exports = Search;