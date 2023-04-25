import React from 'react';
import {icons} from './icon';
import {NavLink} from 'react-bootstrap';

const IconLink = () => {
    return (
        <>
            {icons.map((icon) => <li><NavLink><img src={icon.icon} key={icon.key}/></NavLink></li> )}
        </>
    );
};

export default IconLink;