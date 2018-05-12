import React,{PropTypes} from 'react';

const TextInput = ({name,label,onChange,placeholder,value,error}) => {
    let wrapperClas = 'form-group';
    if(error && error.length > 0){
        wrapperClas += " " + 'has-error';
    }

    return(
        <div className={wrapperClas}>
            <label htmlFor={name}>{label}</label>
            <div className="field">
                <input
                    type="text"
                    name={name}
                    className="form-control"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}/>
                {error && <div className="alert alert-danger">{error}</div>}
            </div>
        </div>
    );
};

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string
  };
  
  export default TextInput;