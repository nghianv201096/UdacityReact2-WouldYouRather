import { useState } from "react"
import { handleCreateUser } from "../actions/users"

const { connect } = require("react-redux")

const UserPage = (props) => {
    const [state, setState] = useState({})

    function handleSubmit(e) {
        e.preventDefault()

        props.dispatch(handleCreateUser(state))
    }

    function handleChange(e) {        
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name
        
        setState({...state, [name]: value})
    }

    const formInfo = {
        header: 'Create New User'
    }

    return (
        <div className="nnh-form-container">
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="nnh-form">
                    <div className="nnh-form-header">
                        {formInfo.header}
                    </div>
                    <div className="nnh-form-body">
                        <div className="nnh-form-row">
                            <div className="nnh-form-label">
                                Name
                            </div>
                            <div className="nnh-form-control">
                                <input name="name" value={state.name} onChange={handleChange}/>
                            </div>
                        </div>
                        <div>
                        <div className="nnh-form-label">
                                Avatar URL
                            </div>
                            <div className="nnh-form-control">
                                <input name="avatarUrl" value={state.avatarUrl} onChange={handleChange}/>
                            </div>
                        </div>
                    </div>
                    <div className="nnh-form-footer">
                        <button className="nnh-btn nnh-btn-cancel">
                            Cancel
                        </button>
                        <input type={'submit'} className="nnh-btn nnh-btn-submit" value={'Submit'}/>
                    </div>
                </div>
            </form>
        </div>
    )
}

function mapStateToProps(store) {
    return {

    }
}

export default connect(mapStateToProps)(UserPage)