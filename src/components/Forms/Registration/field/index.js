import React from 'react'

const renderField = ({ input, placeholder, className, type, meta: { asyncValidating, touched, error, warning } }) => (
    <div className={asyncValidating ? className + 'async-validating' : className}>
        <input {...input} placeholder={placeholder} type={type} className={className}/>
        {touched && ((error && <span className="form_error">{error}</span>) || (warning && <span>{warning}</span>))}
        <span className='ajax-loader'></span>
    </div>
)

export default renderField