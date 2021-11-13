import React from "react"
import {Layout, Menu} from "antd"
import {BranchesOutlined} from "@ant-design/icons"
import {BrowserRouter as Router, Link, Redirect, Route, Switch,} from "react-router-dom"

import Navbar from "./components/Navbar/Navbar"
import Overview from "./pages/Overview/Overview"
import Crud from "./pages/Crud/Crud"


import logo from "./icons/logo.png"
import Login from "./pages/Login/Login";
import {getToken} from "./utilits";


const App = () => {

    const {Content, Sider} = Layout

    return (
        <>
            <Router>
                <Switch>

                    {
                        getToken() ? <Layout style={{height: '100vh'}}>
                            <div className="sidebar_layout">
                                <Sider
                                    defaultCollapsed={false}
                                    breakpoint="lg"
                                    collapsedWidth="0"
                                >
                                    <div className="sidebar_img">
                                        <img src={logo} alt=""/>
                                    </div>

                                    <Menu theme="dark" mode="inline">
                                        <Menu.Item key="1" icon={<BranchesOutlined/>}>
                                            <Link to="/">OverView</Link>
                                        </Menu.Item>
                                        <Menu.Item key="2" icon={<BranchesOutlined/>}>
                                            <Link to="/table">Table</Link>
                                        </Menu.Item>
                                    </Menu>

                                </Sider>
                            </div>

                            <Layout>
                                <Content>
                                    <Navbar/>
                                    <div className="site-layout-background" style={{padding: 30}}>
                                        {/* <Routes/> */}
                                        <Route exact path="/">
                                            <Overview/>
                                        </Route>
                                        <Route path="/table">
                                            <Crud/>
                                        </Route>

                                    </div>
                                </Content>
                            </Layout>
                        </Layout> : <div>
                            <Redirect from="*" to="/login"/>
                            <Login/>
                        </div>
                    }

                </Switch>
            </Router>
        </>
    );
};

export default App;