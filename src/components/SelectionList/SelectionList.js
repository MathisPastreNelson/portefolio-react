import React from 'react';

function SelectionListcomponent(component) {
    function changeComponent1() {
        component.setComponent(1)
    }
    function changeComponent2() {
        component.setComponent(2)
    }
    function changeComponent3() {
        component.setComponent(3)
    }
    function changeComponent4() {
        component.setComponent(4)
    }
    return (
        <nav className="nav_container">
            <button onClick={changeComponent1} >Présentation</button>
            <button onClick={changeComponent2} >Skills</button>
            <button onClick={changeComponent3} >Portefolio</button>
            <button onClick={changeComponent4} >Contact</button>
        </nav>
    );
}

export default SelectionListcomponent;