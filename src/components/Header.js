import React from 'react';
//stateless arrow function instead of regular class Header extends React.Component
const Header = (props) => (
    <header className="top">
        <h3 className="tagline">
            <span>{props.tagline}</span>
        </h3>
    </header>
)
 
export default Header;