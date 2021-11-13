import React, {useState} from 'react'
import {Button, Form, Input, Skeleton} from "antd"
import LockOutlined from "@ant-design/icons/lib/icons/LockOutlined"
import UserOutlined from "@ant-design/icons/lib/icons/UserOutlined"

//components
import SignUp from "../../components/SignUp/SignUp"
import {setLocalStorage} from "../../utilits"
import {signIn} from "../../server/auth/authRequest"
import {errorLogin} from "../../components/notifications"

import logo from "../../icons/logo.png"

import "./login.scss"


const Login = () => {
    const [showSignUp, setShowSignUp] = useState(false)
    const [loading, setLoading] = useState(false)


    const onFinish = (values) => {
        setLoading(true)
        signIn(values).then(res => {
            res && res.data && res.data.token &&
            setLocalStorage('token', res.data.token);
            window.location.replace(`${window.location.origin}`)
            // window.location.replace(`${window.location.origin}/over`);
        }).catch(err => {
            errorLogin('error')
        })
            .finally(() => {
                setLoading(false)
            })
    }

    return (

        <>{loading ? <Skeleton/> :
            <div className="container_login">

                {
                    !showSignUp  ? <div className="login">
                        <img width="48px" src={logo} alt="logo"/>
                        <h3>Sign in</h3>

                        <h2>Login Dashboard Kit</h2>

                        <p className="email_text"> Enter your email and password below</p>
                        <Form
                            colon={false}
                            name="normal_login"
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
                                    prefix={<UserOutlined className="site-form-item-icon"/>}
                                    placeholder="Email pochta"
                                />
                            </Form.Item>
                            <label htmlFor="password">Parol</label>
                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Iltimos, parol kiriting!',
                                    },
                                ]}
                            >
                                <Input.Password
                                    id="password"
                                    prefix={<LockOutlined className="site-form-item-icon"/>}
                                    type="password"
                                    placeholder="Parol"
                                />
                            </Form.Item>
                            <div className="footer-btn">
                                <Form.Item>
                                    <Button type="primary" htmlType="submit" className="login-form-button">
                                        Kirish
                                    </Button>
                                    Yoki foydalanuvchimisiz?
                                    <span className="footer_text"
                                          onClick={() => setShowSignUp(prev => !prev)}>
                                Ro'yxatdan o'tish!
                                </span>
                                </Form.Item>
                            </div>

                        </Form>
                    </div> : <SignUp/>
                }

            </div>
        }
        </>
    )

}

export default Login