import {Message} from 'element-react'

function httpErrorHandle(code) {
    code = parseInt(code, 10)
    switch (code) {
        case 401:
            Message.error('密码或用户名错误QAQ')
    }
}

function serverDefineErrorHandle(code) {
    code = parseInt(code, 10)
    switch (code) {
    }
}

export {
    httpErrorHandle,
    serverDefineErrorHandle,
}
