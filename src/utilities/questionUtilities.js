


export const questionScore = question => {
    return question.optionOne.votes.length + question.optionTwo.votes.length
}

export const userScore = user => {
    return Object.keys(user.answers).length
}

export const formatPercentage = num => {
    return Math.round(num * 100).toString().concat('%')
}