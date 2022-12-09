import { connect } from "react-redux"

const LeaderBoardPage = (props) => {
    const userScores = Object.values(props.users)
        .map(user => {
            const anweredQuestionCount = Object.keys(user.answers).length
            const createdQuestionCount = Object.keys(user.questions).length
            return {
                userId: user.id,
                userName: user.name,
                avatarURL: user.avatarURL,
                anweredQuestionCount, 
                createdQuestionCount,
                total: anweredQuestionCount + createdQuestionCount
            }
        }).sort((u1, u2) => u2.total - u1.total)

    return (
        <div className="mb-5 pb-5 mt-5 home-container">
            {
                userScores.map(userScore => 
                    <div key={userScore.userId} className="card mt-5 question-preview">
                        <div className="card-body row">
                            <div className="col-4">
                                <img className="avatar" src={userScore.avatarURL} alt='avatar'></img>
                            </div>
                            <div className="col-5" style={{borderLeft: "1px black solid"}}>
                                <div className="h3 mb-3">{userScore.userName}</div>
                                <div className="mb-4">
                                    <div className="row">
                                        <div className="col-10 mb-3">
                                            Answered questions
                                        </div>
                                        <div className="col-2">
                                            {userScore.anweredQuestionCount}
                                        </div>    
                                    </div>
                                    <div className="row">
                                        <div className="col-10">
                                            Created questions
                                        </div>
                                        <div className="col-2">
                                            {userScore.createdQuestionCount}
                                        </div>    
                                    </div>
                                </div>                               
                            </div>
                            <div className="col-3">
                                <div className="card h-100">
                                    <div className="card-header h3">Score</div>
                                    <div className="score-total-container h-100">
                                        <div className="score-total">
                                            {userScore.total}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

function mapStateToProps({users}) {
    return {
        users
    }
}

export default connect(mapStateToProps)(LeaderBoardPage)