import React, { Component, createContext } from 'react';

export const ColorContext = createContext();

class ColorContextProvider extends Component {
    state = {}

    colors_bg = [
        '#78C3FB', '#C28CAE', '#49475B', '#799496', '#4F646F',
        '#F87060', '#102542', '#137547', '#5BBA6F', '#F96F5D',
        '#F4AC32', '#2D93AD', '#43AA8B', '#383961', '#5F758E',
        '#995FA3', '#2D3047', '#419D78', '#E0A458', '#B7ADCF'
    ];
    colors_random = () => Math.floor(Math.random() * this.colors_bg.length);

    render() {
        return (
            <ColorContext.Provider value={{
                ...this.state,
                colors_bg: this.colors_bg,
                colors_random: this.colors_random,
            }}>
                {this.props.children}
            </ColorContext.Provider>
        );
    }
}

export default ColorContextProvider;