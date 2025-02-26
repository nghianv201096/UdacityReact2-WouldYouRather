import { Fragment } from "react"
import { connect } from "react-redux"
import ProgressBar from "@ramonak/react-progress-bar";

const QuestionDetail = (props) => {
    const {author, question, authedUser} = props;
    const voteOptionOne = question.optionOne.votes.length
    const voteOptionTwo = question.optionTwo.votes.length
    const total = voteOptionOne + voteOptionTwo
    const optionOnePercentage = Math.round(voteOptionOne*100/total)
    const optionTwoPercentage = 100 - optionOnePercentage
    const voteInfo = {

        total,
        votes: [
            {
                total: voteOptionOne,
                percentage: optionOnePercentage,
                text: question.optionOne.text,
                isVoted: question.optionOne.votes.includes(authedUser)
            },
            {
                total: voteOptionTwo,
                percentage: optionTwoPercentage,
                text: question.optionTwo.text,
                isVoted: question.optionTwo.votes.includes(authedUser)
            }
        ] 
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
                        <div className="h3 mb-3">Results:</div>
                        <div className="mb-4 ml-2">
                            {
                                voteInfo.votes.map(vote => (
                                    <div key={vote.text} className="vote-result mb-4">
                                        {
                                            vote.isVoted && <div className="vote">Your vote</div>
                                        }
                                        <div className="h5 text-success">
                                            Would you rather {vote.text}
                                        </div>

                                        <ProgressBar completed={vote.percentage} />

                                        <div className="h6 text-center">
                                            {vote.total} out of {voteInfo.total} votes
                                        </div>
                                    </div>
                                ))
                            }
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

export default connect(mapStateToProps)(QuestionDetail)