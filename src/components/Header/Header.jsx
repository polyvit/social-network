import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://lh3.googleusercontent.com/proxy/iZYjq3Aer6uqJ9-HriY86EQ3svof8PVPARZh53CcH16Ph0vDal1efe0a1TQi-gQcURdL-e-NU-hmlI_TWVJlwSXKU18siVsMf9KESagBgBPF2QykfSgqyVBb-YIRrjnwBxUzDRP6kQ'/>
        <div className={s.loginBlock}>
            {props.isAuth
                ? <div>{props.login} <button onClick={props.logout}>Log out</button></div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header;