import fetch from 'isomorphic-fetch'

const asyncValidate = (values, dispatch, props, field) => {
    return fetch('http://localhost:3001/user/login', {
            method: 'POST',
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nickname: values.nickname,
                password: values.password
            })
        }).then((res) => {
            return res.json()
        }).then((json) => {
            if (Boolean(json.userWithSuchNickIsNotDefined)) {
                throw { nickname: 'There is no user with such nickname' }
            }
            if (Boolean(json.userWithSuchPasswordIsNotDefined)) {
                throw { password: 'Password is wrong' }
            }
        })
}

export default asyncValidate