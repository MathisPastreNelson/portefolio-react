import React from 'react';

// Importation des composants
import Header from '../components/Header/Header';
import SelectionList from '../components/SelectionList/SelectionList';
import Present from '../components/Main/Present';


const Home = () => {
    return (
        <div>
            <Header />
            <SelectionList />
            <Present />
        </div>
    );
};

export default Home;