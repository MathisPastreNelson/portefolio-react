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
            <button className='navButton leftBorder' onClick={changeComponent1} >Article 1</button>
            <button className='navButton' onClick={changeComponent2} >Article 2</button>
            <button className='navButton' onClick={changeComponent3} >Article 3</button>
            <button className='navButton rightBorder' onClick={changeComponent4} >Article 4</button>
        </nav>
    );
}

export default SelectionListcomponent;