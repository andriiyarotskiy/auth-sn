import React from 'react';
import style from './FacebookBtn.module.scss';
import fb_logo from './fb_logo.svg'

const FacebookBtn = ({onClick}) => {
    return (
        <button
            onClick={onClick}
            className={style.facebookBtn}>
            <img src={fb_logo} alt="fb_logo" width="32" height="32"/>
            Facebook</button>
    );
};

export default FacebookBtn;