// Add or edit your training material here.
//
// Each item has:
//   group    = the group it belongs to
//   question = the complete question
//   answer   = the complete answer
//   obscuredQuestion = optional version of the question with words/phrases to hide in [square brackets]
//   obscuredAnswer = version of the answer with words/phrases to hide in [square brackets]
//   (The old 'obscured' property is still accepted as a shortcut for obscuredAnswer.)
//
// Example:
// {
//   group: "Group 1",
//   question: "What color is an apple?",
//   answer: "An apple is red, yellow, or green.",
//   obscuredQuestion: "What color is an [apple]?",
        obscuredAnswer: "An apple is [red], [yellow], or [green]."
// }

const trainingQuestions = [
    {
        group: "Questions 1-6",
        question: "What is our only hope in life and death?",
        answer: "That we are not our own but belong to God.",
        obscuredQuestion: "What is our only [hope] in [life] and [death]?",
        obscuredAnswer: "That we are not our [own] but [belong] to [God]."
    },
    {
        group: "Questions 1-6",
        question: "What is God?",
        answer: "God is the creator of everyone and everything.",
        obscuredQuestion: "What is God?",
        obscuredAnswer: "God is the [creator] of [everyone] and [everything]."
    },
    {
        group: "Questions 1-6",
        question: "How many persons are there in God?",
        answer: "There are three persons in one God: the Father, the Son, and the Holy Spirit",
        obscuredQuestion: "How many [persons] are there in God?",
        obscuredAnswer: "There are [three] persons in [one] God: the [Father], the [Son], and the [Holy Spirit]"
    },
    {
        group: "Questions 1-6",
        question: "How and why did God create us?",
        answer: "God created us male and female in His own image to glorify Him.",
        obscuredQuestion: "How and why did God [create] us?",
        obscuredAnswer: "God created us [male] and [female] in His own [image] to [glorify] Him."
    },
    {
        group: "Questions 1-6",
        question: "What else did God create?",
        answer: "God created all things and all His creation was very good.",
        obscuredQuestion: "What else did God [create]?",
        obscuredAnswer: "God created [all] things and [all] His [creation] was very [good]."
    },
    {
        group: "Questions 1-6",
        question: "How can we glorify God?",
        answer: "By loving Him and by obeying His commands and law.",
        obscuredQuestion: "How can we [glorify] God?",
        obscuredAnswer: "By [loving] Him and by [obeying] His [commands] and [law]."
    },
    {
        group: "Questions 7+",
        question: "What does the law of God require?",
        answer: "That we love God with all our heart, soul, mind, and strength, and love our neighbors as ourselves.",
        obscuredQuestion: "What does the [law] of God [require]?",
        obscuredAnswer: "That we [love] God with [all] our [heart], [soul], [mind], and [strength], and [love] our [neighbors] as [ourselves]."
    },
];
