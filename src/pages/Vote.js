import React from 'react'
import { connect } from "react-redux";
import { useParams} from "react-router-dom";


const Vote = (props) => {
    const params = useParams();
    const question = (props.questions || {})[params.id]

    return (
        <div>
            {question.id}
        </div>
    )
}

function mapStateToProps({questions}) {
    return {
        questions
    }
}

export default connect(mapStateToProps)(Vote)