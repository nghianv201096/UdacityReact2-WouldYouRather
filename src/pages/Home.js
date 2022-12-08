import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Home extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            showAnswered: false
        }
    }

    handleSwitchTab(showAnswered) {
        if(showAnswered === this.state.showAnswered) {
            return;
        }

        this.setState({
            showAnswered: showAnswered
        });
    }

    getActiveClass(isActive) {
        let classes = 'question-tab';
        if(isActive === true) {
            classes += ' question-tab-active'
        }

        return classes;
    }

    isDisplay(showAnswered, answeredQuestionIds, questionId) {
        return showAnswered 
            ? answeredQuestionIds.includes(questionId) 
            : !answeredQuestionIds.includes(questionId)
    }

    render() {
        const users = this.props.users;
        const currentUser = users[this.props.authedUser]
        const answeredQuestionIds = Object.keys(currentUser.answers) || []
        console.log(answeredQuestionIds)
        
        let questions = Object.values(this.props.questions) || []
        console.log(questions)
        questions = questions.filter((question) => this.isDisplay(this.state.showAnswered, answeredQuestionIds, question.id))
            .sort((a,b) => a.timestamp - b.timestamp)

        return (
            <div className="mb-5 mt-5 home-container">
                <div className="question-tab-header">
                    <div className={this.getActiveClass(!this.state.showAnswered)} onClick={(e) => {this.handleSwitchTab(false)}}>
                        Unanswered Questions
                    </div>
                    <div className={this.getActiveClass(this.state.showAnswered)} onClick={(e) => {this.handleSwitchTab(true)}}>
                        Answered Questions
                    </div>
                </div>
                <div className="mb-5">
                {                
                    questions.map(question => 
                        <div key={question.id} className="card mt-5 question-preview">
                            <div className="card-header h2">
                                {users[question.author].name} asks:
                            </div>
                            <div className="card-body row">
                                <div className="col-4">
                                    <img className="avatar" src={users[question.author].avatarURL} alt='avatar'></img>
                                </div>
                                <div className="col-8" style={{borderLeft: "1px black solid"}}>
                                    <div className="h3 mb-3">Would you rather</div>
                                    <div className="mb-4">...{question.optionOne.text}...</div>
                                    <div>
                                        <Link to={`questions/${question.id}`} className="btn btn-lg w-100 btn-success">View Poll</Link>
                                    </div>                               
                                </div>
                            </div>
                        </div>
                    )
                }
                </div>
            </div>
        )
    }
}

function mapStateToProps({questions, users, authedUser}) {
    return {
        questions,
        users,
        authedUser
    }
}

export default connect(mapStateToProps)(Home);