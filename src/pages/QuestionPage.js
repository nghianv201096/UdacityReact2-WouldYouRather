import React, { Fragment } from 'react'
import { connect } from "react-redux";
import { Link, Redirect, useParams} from "react-router-dom";
import QuestionDetail from '../components/questions/QuestionDetail';
import QuestionNew from '../components/questions/QuestionNew';
import QuestionVote from '../components/questions/QuestionVote';

const formTypes = {
    CREATE: 1,
    DETAIL: 2,
    UPDATE: 3
}

const QuestionPage = (props) => {
    const params = useParams()
    const id = params.id
    
    let formType
    let question
    if(id === 'new') {
        formType = formTypes.CREATE    
    } else {
        question = (props.questions || {})[params.id]
        if(!question) {
            return <Redirect to='/not-found'></Redirect>
        }

        const isAnswered = question.optionOne.votes.includes(props.authedUser)
            || question.optionTwo.votes.includes(props.authedUser);
        formType = isAnswered ? formTypes.DETAIL
            : formTypes.UPDATE
    }

    const component = formType === formTypes.CREATE ? <QuestionNew></QuestionNew>
        : formType === formTypes.UPDATE ? <QuestionVote id={question.id}></QuestionVote>
            : <QuestionDetail id={question.id}></QuestionDetail>;

    return (
        <Fragment>
            {
                component
            }
        </Fragment>
    )
}

function mapStateToProps({authedUser, questions}) {
    return {
        authedUser,
        questions
    }
}

export default connect(mapStateToProps)(QuestionPage)