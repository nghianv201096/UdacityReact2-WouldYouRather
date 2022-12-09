import { connect } from "react-redux"
import { useState } from "react"
import { handleCreateQuestion } from "../../actions/questions";
import { Redirect } from "react-router-dom";

const NewQuestion = (props) => {
    const {authedUser} = props;
    const [toHome, setToHome] = useState(false);
    const [question, setQuestion] = useState({
        optionOneText: '',
        optionTwoText: ''
    });

    function handleCreate(e) {
        e.preventDefault()

        props.dispatch(handleCreateQuestion(question.optionOneText, question.optionTwoText, authedUser, (question) => {
            setToHome(true)
        }))
    }

    function handleOptionTextChange(name, value) {
        setQuestion({
            ...question,
            [name]: value
        })
    }

    if(toHome) {
        console.log('Redirect to home')
        return <Redirect to='/'></Redirect>
    }

    return <form onSubmit={(e) => handleCreate(e)}>
        <div className="card question-preview">
            <div className="card-header h2">
                Create New Question
            </div>
            <div className="card-body">
                <div>
                    Complete the questions:
                </div>
                <div className="h3">
                    Would you rather...
                </div>
                <div className="input-group mb-2">
                        <input 
                            value={question.optionOneText}
                            onChange={(e) => handleOptionTextChange('optionOneText', e.target.value)}
                            type="text" 
                            className="form-control" 
                            aria-describedby="basic-addon1" />
                    </div>
                    <div className="text-center mb-2">OR</div>
                    <div className="input-group mb-3">
                        <input 
                            value={question.optionTwoText}
                            onChange={(e) => handleOptionTextChange('optionTwoText', e.target.value)} 
                            type="text" 
                            className="form-control" 
                            aria-describedby="basic-addon1" />
                    </div>            
                    <div>
                        <input type={"submit"} className="w-100 btn btn-lg btn-success" value="Submit"/>
                    </div>    
                </div>

        </div>
    </form>
}

function mapStateToProps({authedUser}) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(NewQuestion);