import React, { useEffect, useRef, useState } from 'react'
import { createRequest, deleteRequest, editRequest, getRequest } from "../../redux/action/action"
import { useDispatch, useSelector } from "react-redux"
import './crud.scss'

import { createMessage, deleteMessage, editMessage, errorMessage } from "../../components/notifications"

import { CREATE, DELETE, EDIT, GET } from "../../redux/types"
import { Form, Input, Modal, Table, Space, Dropdown, Menu } from "antd"


const Crud = () => {
    const [loading, setLoading] = useState(false)
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [edited, setEdited] = useState(null)
    const formRef = useRef(null)

    const dispatch = useDispatch()
    const { students } = useSelector(state => state.students)

    const onReset = () => {
        formRef.current.resetFields()
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    }


    const showModal = () => {
        setIsModalVisible(true);
        if (formRef.current) {
            formRef.current.setFieldsValue({
                fullname: null,
                username: null,
                password: null,
                groupId: null,
                address: null,
            })
        }
    }

    const handleOk = () => {
        setIsModalVisible(false);
        setEdited(null)
    }

    const handleCancel = () => {
        onReset()
        setIsModalVisible(false);
        setEdited(null)
    }

    useEffect(() => {
        GetRequest()
    }, [])

    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            key: '1',
        },
        {
            title: 'Username',
            dataIndex: 'username',
            key: '2',
        },
        {
            title: 'Fullname',
            dataIndex: 'fullname',
            key: '3',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: '4',
        },

        {
            title: 'Action',
            key: 'action',
            fixed: 'right',
            width: 75,

            render: student => (
                <div key={student.id}>
                    <Space wrap>
                        <Dropdown overlay={
                            <Menu>
                                <button className="blue_btn" type="primary" onClick={() => EditRequest(student)}
                                    >Edit</button>
                                <button className="red_btn" type="danger" onClick={() => {
                                    DeleteRequest(student.id)
                                }} >Delete</button>
                            </Menu>
                        } placement="bottomLeft" arrow
                        >
                            <p>. . .</p>
                        </Dropdown>
                    </Space>
                </div>
            )
        }
    ]

    const GetRequest = () => {
        setLoading(true)
        getRequest().then(res => {
            res && Array.isArray(res.data) && dispatch({ type: GET, payload: res.data })
        })
            .catch(err => {
                errorMessage('error')
                handleCancel()
            })
            .finally(() => {
                setLoading(false)
            })
    }

    const DeleteRequest = (id) => {
        deleteRequest(id).then(res => {
            res && dispatch({ type: DELETE, payload: id })
            deleteMessage('warning')
        })
            .catch(err => {
                errorMessage('error')
                handleCancel()
            })
            .finally(() => {
                setLoading(false)
                GetRequest()
            })
    }

    const EditRequest = (value) => {
        setEdited(value)
        showModal()
        setTimeout(() => {
            formRef.current && formRef.current.setFieldsValue({
                address: value.address,
                fullname: value.fullname,
                groupId: 0,
                password: value.id,
                username: value.username
            })
        }, 0)
    }

    const onFinish = (values) => {
        setLoading(true)
        if (!edited) {
            createRequest(values).then(res => {
                dispatch({ type: CREATE, payload: res.data })
                createMessage('success')
                handleOk()
                GetRequest()
            }).catch(() => {
                errorMessage('error')
                handleCancel()
            })
                .finally(() => setLoading(false))
        }
        else {
            editRequest(edited.id, values).then(res => {
                dispatch({ type: EDIT, payload: res.data })
                editMessage('info')
                handleOk()
                GetRequest()
            }).catch(() => {
                errorMessage('error')
                handleCancel()
            })
                .finally(() => setLoading(false))
        }
    }

    return (
                <>
                    <button className="my_btn" onClick={showModal}>
                        Create
                    </button>
                    <Modal
                        title={edited ? "EDIT" : "CREATE"}
                        visible={isModalVisible}
                        footer={false}
                        onOk={handleOk}
                        onCancel={handleCancel}>
                        <Form
                            name="basic"
                            initialValues={{
                                remember: true
                            }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            ref={formRef}
                        >
                            <Form.Item
                                label="Fullname"
                                name="fullname"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your fullname!',
                                    },
                                ]}
                            >
                                <Input disabled={loading} />
                            </Form.Item>

                            <Form.Item
                                label="Username"
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your username!',
                                    },
                                ]}
                            >
                                <Input disabled={loading}/>
                            </Form.Item>


                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                            >
                                <Input.Password disabled={loading}/>
                            </Form.Item>


                            <Form.Item
                                label="Group"
                                name="groupId"
                                rules={[{ required: true, message: 'Select Group!' }]}
                            >
                                <Input disabled={loading}/>
                            </Form.Item>

                            <Form.Item
                                label="Address"
                                name="address"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                            >
                                <Input disabled={loading}/>
                            </Form.Item>

                            <Form.Item>
                                <div className="buttons">
                                    <button disabled={loading} className="modal_btn" type={"submit"}>
                                        {edited ? "EDIT" : "CREATE"}
                                    </button>
                                    <button className="modal_btn_red" onClick={handleCancel} >
                                        Cancel
                                    </button>
                                </div>
                            </Form.Item>
                        </Form>
                    </Modal>


                    <Table
                        loading={loading}
                        bordered
                        className="dataTable"
                        columns={columns}
                        dataSource={students}
                        scroll={{ x: 800 }}
                        pagination={{ pageSize: 5 }}
                    />
                </>

    )
}

export default Crud