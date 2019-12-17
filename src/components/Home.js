import '../styles/App.scss';

import React from 'react';
import Header from './Header';
import Palette from './PaletteDesign';
import Fonts from './FontsDesign';
import CardPreview from './CardPreview';
import SharedForm from './SharedForm';
import Input from './InputForm';
import AppFooter from './Footer';

class Home extends React.Component {
    render() {
        return (
            <div className="Main">
                <Header></Header>
                <CardPreview></CardPreview>
                <Palette></Palette>
                <Fonts></Fonts>
                <Input></Input>
                <SharedForm></SharedForm>
                <AppFooter></AppFooter>
            </div >
        )
    }
}
export default Home;