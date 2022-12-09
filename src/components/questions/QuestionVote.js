import { Fragment } from "react"
import { connect } from "react-redux"
import { useState } from "react";
import RadioButtonGroup from '../commons/RadioButtonGroup'
import {handleSaveQuestionAnswer} from '../../actions/questions'

const QuestionVote = (props) => {
    const {author, question, authedUser} = props;
    const optionValues = {
        optionOne: "optionOne",
        optionTwo: "optionTwo"
    }
    const optionList = [
        {
            value: optionValues.optionOne,
            text: question.optionOne.text
        },
        {
            value: optionValues.optionTwo,
            text: question.optionTwo.text
        }
    ]

    const [selectedOption, setSelectedOption] = useState(optionValues.optionOne)

    function handleOptionChange(value) {
        setSelectedOption(value)
    }

    function handleSubmit() {
        const {dispatch} = props;
        dispatch(handleSaveQuestionAnswer(authedUser, question.id, selectedOption))
    }
    
    return (
        <Fragment>
            <div className="card question-preview">
                <div className="card-header h2">
                    {author.name} asks:
                </div>
                <div className="card-body row">
                    <div className="col-4">
                        <img className="avatar" src={author.avatarURL} alt='avatar'></img>
                    </div>
                    <div className="col-8" style={{borderLeft: "1px black solid"}}>
                        <div className="h3 mb-3">Would you rather</div>
                        <div className="mb-4 ml-2">
                            <RadioButtonGroup 
                                name="question-answers" 
                                options={optionList} 
                                initValue={optionList[0].value}
                                onChange={handleOptionChange}>    
                            </RadioButtonGroup>
                        </div>
                        <div>
                            <button onClick={(e) => handleSubmit()} className="w-100 btn btn-lg btn-success">
                                Submit
                            </button>
                        </div>                               
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

function mapStateToProps({users, authedUser, questions}, ownProps) {
    const question = questions[ownProps.id]
    const author = users[question.author]

    return {
        author,
        authedUser,
        question
    }
}

export default connect(mapStateToProps)(QuestionVote)