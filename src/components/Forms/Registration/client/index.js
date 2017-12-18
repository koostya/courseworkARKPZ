const validate = values => {
    const errors = {}

    if (!values.nickname) {
        errors.nickname = 'Required'
    }

    if(!values.name) {
        errors.name = 'Required'
    }

    if(!values.surname) {
        errors.surname = 'Required'
    }

    if (!values.password) {
        errors.password = 'Required'
    } 

    if (!values.description) {
        errors.description = 'Required'
    } 
    
    return errors
}

export default validate