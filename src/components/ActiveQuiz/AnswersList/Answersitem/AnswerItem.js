import React from 'react'
import './AnswerItem.css'
import AnswersList from '../AnswersList'


const AnswerItem = props => {
    return (
        <li className="AnswerItem">
            { props.answer.text }
        </li>
    )
}

export default AnswerItem