import React, { Component, createContext } from 'react';

export const ColorContext = createContext();

class ColorContextProvider extends Component {
    state = {}

    colors_bg = ['#78C3FB', '#C28CAE', '#49475B', '#799496', '#4F646F', '#F87060', '#102542'];
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