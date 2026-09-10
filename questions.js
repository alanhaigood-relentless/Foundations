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
        group: "Questions 1-5 (8/19-9/16)",
        question: "What is our only hope in life and death?",
        answer: "That we are not our own but belong to God.",
        obscuredQuestion: "What is our only [hope] in [life] and [death]?",
        obscuredAnswer: "That we are not our [own] but [belong] to [God]."
    },
    {
        group: "Questions 1-5 (8/19-9/16)",
        question: "What is God?",
        answer: "God is the creator of everyone and everything.",
        obscuredQuestion: "What is God?",
        obscuredAnswer: "God is the [creator] of [everyone] and [everything]."
    },
    {
        group: "Questions 1-5 (8/19-9/16)",
        question: "How many persons are there in God?",
        answer: "There are three persons in one God: the Father, the Son, and the Holy Spirit",
        obscuredQuestion: "How many [persons] are there in God?",
        obscuredAnswer: "There are [three] persons in [one] God: the [Father], the [Son], and the [Holy Spirit]"
    },
    {
        group: "Questions 1-5 (8/19-9/16)",
        question: "How and why did God create us?",
        answer: "God created us male and female in His own image to glorify Him.",
        obscuredQuestion: "How and why did God [create] us?",
        obscuredAnswer: "God created us [male] and [female] in His own [image] to [glorify] Him."
    },
    {
        group: "Questions 1-5 (8/19-9/16)",
        question: "What else did God create?",
        answer: "God created all things and all His creation was very good.",
        obscuredQuestion: "What else did God [create]?",
        obscuredAnswer: "God created [all] things and [all] His [creation] was very [good]."
    },
    {
        group: "Questions 6-10 (9/30-10/28)",
        question: "How can we glorify God?",
        answer: "By loving Him and by obeying His commands and law.",
        obscuredQuestion: "How can we [glorify] God?",
        obscuredAnswer: "By [loving] Him and by [obeying] His [commands] and [law]."
    },
    {
        group: "Questions 6-10 (9/30-10/28)",
        question: "What does the Law of God require?",
        answer: "That we love God with all our heart, soul, mind, and strength, and love our neighbors as ourselves.",
        obscuredQuestion: "What does the [Law] of God require?",
        obscuredAnswer: "That we [love] God with [all] our [heart], [soul], [mind], and [strength], and [love] our [neighbors] as [ourselves]."
    },
    {
        group: "Questions 6-10 (9/30-10/28)",
        question: "What is the Law of God stated in the Ten Commandments?",
        answer: "You shall have no other gods before me. You shall not make for yourself an idol. You shall not misuse the name of the Lord your God. Remember the Sabbath Day by keeping it holy. Honor your father and mother. You shall not murder. You shall not commit adultery. You shall not steal. You shall not give false testimony. You shall not covet.",
        obscuredQuestion: "What is the [Law] of [God] stated in the [Ten] [Commandments]?",
        obscuredAnswer: "You shall have no other [gods before me]. You shall not make for [yourself] an [idol]. You shall not misuse the [name] of the [Lord] your [God]. Remember the [Sabbath] [Day] by keeping it [holy]. Honor your [father] and [mother]. You shall not [murder]. You shall not [commit] [adultery]. You shall not [steal]. You shall not give [false] [testimony]. You shall not [covet]."
    },
    {
        group: "Questions 6-10 (9/30-10/28)",
        question: "What does God require in the first, second, and third commandments?",
        answer: "First, that we know God as the only true God. Second, that we avoid all idolatry. Third, that we treat God's name with fear and reverance.",
        obscuredQuestion: "What does God require in the [first], second, and [third] commandments?",
        obscuredAnswer: "First, that we [know] God as the only [true] God. Second, that we [avoid] all [idolatry]. Third, that we [treat] God's [name] with [fear] and [reverance]."
    },
    {
        group: "Questions 6-10 (9/30-10/28)",
        question: "What does God require in the fourth and fifth commandments?",
        answer: "Fourth, that on the Sabbath day we spend time in worship of God. Fifth, that we love and honor our father and our mother.",
        obscuredQuestion: "What does God require in the fourth and [fifth] commandments?",
        obscuredAnswer: "Fourth, that on the [Sabbath] [day] we spend time in [worship] of God. Fifth, that we [love] and [honor] our [father] and our [mother]."
    },
];
