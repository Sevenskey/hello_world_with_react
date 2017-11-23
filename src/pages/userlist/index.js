import React, { Component } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie'

import {Input} from 'element-react'
import 'element-theme-default'
import './index.css';

class ResetPwd extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div classNmae="input-area">
            <input value={this.state.password} placeholder="输入当前密码" />
            <input value={this.state.rpassword} placeholder="再一次输入当前密码" />
            <input value={this.state.newpassword} placeholder="输入新密码" />
            </div>
        )
    }
}

