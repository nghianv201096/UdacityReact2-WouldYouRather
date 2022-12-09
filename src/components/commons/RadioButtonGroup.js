import { Fragment } from "react"
import { useState } from "react";

const RadioButton = (props) => {
    const {name, value, text, checked, onChange} = props;

    return <Fragment>
        <div>
            <label>
                <input checked={checked} name={name} type={"radio"} value={value} onChange={(e) => onChange && onChange(e.target.value)} /> {text}
            </label>
        </div>
    </Fragment>
}

const RadioButtonGroup = (props) => {
    
    const {name, onChange, initValue, options} = props;
    const [value, setValue] = useState(initValue);
    
    const validProps = Array.isArray(options) && !!options.length;    
    if(!validProps) {
        return <div>Render component error. In valid props!</div>
    }

    function handleChange(value) {
        setValue(value)
        onChange(value)
    }

    return (
        <Fragment>
            {
                <div>
                    {
                        options.map(option => (
                            <RadioButton
                                key={option.value} 
                                checked={value === option.value}
                                name={name} 
                                value={option.value}
                                text={option.text}
                                onChange={(value) => handleChange(value)}>    
                            </RadioButton>
                        ))
                    }
                </div>
            }
        </Fragment>
    )
}

/**
 * passing:
 * name: string,
 * onChange(value)
 * initValue: string
 * options: {value, text}
 */
export default RadioButtonGroup