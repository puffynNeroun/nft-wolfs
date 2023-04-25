import React from 'react';
import {icons} from './icon';
import {NavLink} from 'react-bootstrap';

const IconLink = () => {
    return (
        <>
            {icons.map((icon) => <li key={icon.key}><NavLink><img src={icon.icon}/></NavLink></li> )}
        </>
    );
};

export default IconLink;