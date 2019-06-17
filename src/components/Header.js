import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => (
    <header>
        <h1 class="text-center">{props.title}</h1>
    </header>
)

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header