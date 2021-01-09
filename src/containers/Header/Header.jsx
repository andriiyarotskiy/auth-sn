import React, {useState, useContext} from 'react';
import {Link} from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import Login from "../AuthenticationPage/login/Login";
import style from './Header.module.scss';
import {Context} from "../../App";

const Header = () => {

    const {state, dispatch} = useContext(Context)
    const isAuth = state.isAuth

    const [modalActive, setModalActive] = useState(false)

    const logOut = () => {
        dispatch({type: 'LOG_OUT'})
        localStorage.removeItem('token')
    }

    return (
        <header className={style.headerWrap}>
            <div className={style.header}>
                {isAuth
                    ? <button className={style.btn}
                              onClick={logOut}>Log Out</button>
                    : <Link to="/login" onClick={() => setModalActive(true)}>
                        <button className={style.btn}>Sign In</button>
                    </Link>}
                <Modal active={modalActive} setActive={setModalActive}>
                    <Login setActive={setModalActive}/>
                </Modal>
            </div>
        </header>
    );
};

export default Header;