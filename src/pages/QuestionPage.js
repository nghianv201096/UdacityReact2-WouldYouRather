import { connect } from "react-redux";
import { Redirect, useParams} from "react-router-dom";
import QuestionDetail from '../components/questions/QuestionDetail';
import QuestionVote from '../components/questions/QuestionVote';


const QuestionPage = (props) => {
    const params = useParams()
    const question = (props.questions || {})[params.id]
    if(!question) {
        return <Redirect to='/not-found'></Redirect>
    }

    const isAnswered = question.optionOne.votes.includes(props.authedUser)
        || question.optionTwo.votes.includes(props.authedUser);

    return isAnswered 
        ? <QuestionDetail id={question.id}></QuestionDetail>
        : <QuestionVote id={question.id}></QuestionVote>
}

function mapStateToProps({authedUser, questions}) {
    return {
        authedUser,
        questions
    }
}

export default connect(mapStateToProps)(QuestionPage)