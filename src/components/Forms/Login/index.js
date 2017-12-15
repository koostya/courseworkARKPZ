import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './client/index'
import asyncValidate from './server/index'
import renderField from './field/index'
  
const SyncValidationForm = (props) => {
    const { handleSubmit, submitting } = props
    return (
      <form onSubmit={handleSubmit}>
        <Field name="nickname" type="text" component={renderField} placeholder="nickname" className='input' />
        <Field name="password" type="password" component={renderField} placeholder="password" className='input'/>
        <div>
          <button type="submit" className='form_button' disabled={submitting}>Log in</button>
        </div>
      </form>
    )
}

export default reduxForm({
    form: 'LoginForm', 
    validate,
    asyncValidate,
    asyncBlurFields: ['nickname', 'password']
  })(SyncValidationForm)