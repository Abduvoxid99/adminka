import React from "react"
import {Button} from "antd";
import './Navbar.scss'
import {signOut} from "../../server/auth/authRequest";
import LogoutOutlined from "@ant-design/icons/lib/icons/LogoutOutlined";
import foto from "../../icons/logo.png"


const Navbar = () => {
    return (
        <header>
                <div className="user">
                    <img width="40px" src={foto} alt=""/>
                    <h3>Username</h3>
                </div>
               <Button className="btn_out" onClick={signOut} icon={<LogoutOutlined />}>Sign Out</Button>
        </header>
    );
};

export default Navbar;