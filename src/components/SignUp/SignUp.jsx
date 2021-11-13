import React, {useState} from 'react'
import "./signUp.scss"
import logo from "../../icons/logo.png"
import {Button, Form, Input} from "antd";
import LockOutlined from "@ant-design/icons/lib/icons/LockOutlined";
import MailOutlined from "@ant-design/icons/lib/icons/MailOutlined";
import UserOutlined from "@ant-design/icons/lib/icons/UserOutlined";


const Login = () => {

    const onFinish = () =>{
        console.log("hello")
    }


    return (
            <div className="sign_up">
                <img width="48px" src={logo} alt="logo"/>
                <h3>Sign Up</h3>

                <Form
                    colon={false}
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                >

                    <label htmlFor="username">UserName</label>
                    <Form.Item
                        htmlFor="username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Iltimos, pochtangizni kiriting!',
                            }
                        ]}
                    >
                        <Input
                            id="email"
                            prefix={<UserOutlined  className="site-form-item-icon" />}
                            placeholder="Email pochta"
                        />
                    </Form.Item>

                    <label htmlFor="phone">Telefon raqam</label>
                    <Form.Item
                        name="phone"
                        rules={[{ required: true, message: 'Iltimos telefon raqamingizni kiriting!' }]}
                    >
                        <Input
                            id="phone"
                            addonBefore="+998"
                            maxLength={9}
                        />
                    </Form.Item>


                    <label htmlFor="password">Parol</label>
                    <Form.Item
                        name="Parol"
                        rules={[
                            {
                                required: true,
                                message: 'Iltimos, parol kiriting!',
                            },
                        ]}
                    >
                        <Input.Password
                            id="password"
                            prefix={<LockOutlined/>}
                            type="password"
                            placeholder="Parol"
                        />
                    </Form.Item>

                    <div className="footer-btn">
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Ro'yxatdan o'tish
                            </Button>
                        </Form.Item>
                    </div>

                </Form>
            </div>
    )
}

export default Login