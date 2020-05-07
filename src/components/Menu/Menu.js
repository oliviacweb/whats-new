import React from 'react';
import './Menu.css'


const Menu = (props) => {
    return (
    <section className='menu'>
        <button name='local' onClick={(event) => props.displayNewsType(event, 'local')}>Local News</button>
        <button name='technology' onClick={(event) => props.displayNewsType(event, 'technology')}>Technology</button>
        <button name='entertainment' onClick={(event) => props.displayNewsType(event, 'entertainment')}>Entertainment</button>
        <button name='science' onClick={(event) => props.displayNewsType(event, 'science')}>Science</button>
        <button name='health' onClick={(event) => props.displayNewsType(event, 'health')}>Health</button>
    </section>
    );
}


export default Menu;
