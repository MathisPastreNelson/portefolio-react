import React from 'react';
import { useState } from 'react';

// Importation des composants
import Header from '../components/Header/Header';
import SelectionList from '../components/SelectionList/SelectionList';
import Present from '../components/Main/Present';
import Portefolio from '../components/Main/Portefolio';
import Contact from '../components/Main/Contact';
import Skills from '../components/Main/Skills';
import Footer from '../components/Footer/Footer';

const Home = () => {
    const [component, setComponent] = useState(1);

    return (
        <div>
            <Header />
            <SelectionList component={component} setComponent={setComponent} />
            {component === 1 && <Present />}
            {component === 2 && <Skills />}
            {component === 3 && <Portefolio />}
            {component === 4 && <Contact />}
            <Footer />
        </div>
    );
};

export default Home;