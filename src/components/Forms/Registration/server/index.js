import fetch from 'isomorphic-fetch'

const asyncValidate = (values, dispatch, props, field) => {
    return fetch('http://localhost:3001/user/registration', {
            method: 'POST',
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nickname: values.nickname
            })
        }).then((res) => {
            return res.json()
        }).then((json) => {
            if (Boolean(json.userExist)) {
                throw { nickname: 'User with such nickname is already exsist' }
            }
        })
}

export default asyncValidate