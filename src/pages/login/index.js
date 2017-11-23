import React, { Component } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie'

import {httpErrorHandle} from '../../utils/http'
import {API} from '../../api'

import {Input, Button, Tabs, Message, Form} from 'element-react'
import 'element-theme-default'
import './index.css';

const cookies = new Cookies()

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {
                username: '',
                nick: '',
                password: '',
                rpassword: ''
            },
            rules: {
                username: [
                    {required: true, message: '请输入邮箱', trigger: 'blur'}
                ],
                nick: [
                    {required: true, message: '请输入昵称', trigger: 'blur'}
                ],
                password: [
                    {required: true, message: '请输入密码', trigger: 'blur'},
                ]
            }
        }
        this.rBtnAction = this.rBtnAction.bind(this)
    }

    render() {
        return (
            <div className="input-area">
                <Form ref="form" model={this.state.form} rules={this.state.rules}>
                    <Form.Item prop="username">
                        <Input value={this.state.form.username} placeholder="请输入邮箱"/>
                    </Form.Item>
                    <Form.Item prop="nick">
                        <Input value={this.state.form.nick} placeholder="请输入昵称"/>
                    </Form.Item>
                    <Form.Item prop="password">
                        <Input value={this.state.form.password} placeholder="请输入密码"/>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" onClick={this.rBtnAction}>注册</Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }

    rBtnAction() {
        this.refs.form.validate((valid) => {
            if (valid) {
                axios.post(API.REGISTER, {
                    username: this.state.username,
                    nick: this.state.nick,
                    password: this.state.password,
                })
                .then((res) => {
                    console.log(res.data)
                    this.setState({info: res.data.user.id})
                    cookies.set('id', res.data.user.id, {path: '/'})
                    cookies.set('username', res.data.user.username, {path: '/'})
                    console.log(res)
                })
                .catch((error) => {
                    console.log(error)
                    this.setState({error: error.data})
                })
            } else {
                return false;
            }
        })
    }
}

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            logining: false
        }
        this.lBtnAction = this.lBtnAction.bind(this)
    }
    render() {
        return (
            <div className="input-area">
                <Input value={this.state.username} placeholder="请输入邮箱" />
                <Input value={this.state.password} placeholder="请输入邮箱" />
                <div className="input-btn-group">
                    <Button type="primary" onClick={this.lBtnAction} loading={this.state.logining}>{this.state.logining ? '登录中' : '登录'}</Button>
                </div>
            </div>
        )
    }
    lBtnAction() {
        this.setState({logining: true})
        axios.post(API.LOGIN, {
            username: this.state.username,
            password: this.state.password
        })
        .then((res) => {
            this.setState({logining: false})
            var data = res.data
            console.log(data)

            //cookies.set('id', res.data.user.id, {path: '/'})
            //cookies.set('username', res.data.user.username, {path: '/'})
        })
        .catch((error) => {
            this.setState({logining: false})
            console.log(error.response)
            httpErrorHandle(error.response.status)
        })
    }
}

class Article extends Component {
    constructor(props) {
        super(props)
        this.state = {}

    }

    render() {
        return (
            <div>
                <Tabs activeName="2" onTabClick={function(){}}>
                    <Tabs.Pane label="登录" name="1">
                        <Login />
                    </Tabs.Pane>
                    <Tabs.Pane label="注册" name="2">
                        <Register />
                    </Tabs.Pane>
                </Tabs>
            </div>
        )
    }
}

export default Article
