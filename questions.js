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
        answer: "There are three persons in one God: the Father, the Son, and the Holy Spirit.",
        obscuredQuestion: "How many [persons] are there in God?",
        obscuredAnswer: "There are [three] persons in [one] God: the [Father], the [Son], and the [Holy Spirit]."
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
        answer: "First, that we know God as the only true God. Second, that we avoid all idolatry. Third, that we treat God's name with fear and reverence.",
        obscuredQuestion: "What does God require in the first, second, and third commandments?",
        obscuredAnswer: "First, that we [know] God as the only [true] God. Second, that we [avoid] all [idolatry]. Third, that we [treat] God's [name] with [fear] and [reverence]."
    },
    {
        group: "Questions 6-10 (9/30-10/28)",
        question: "What does God require in the fourth and fifth commandments?",
        answer: "Fourth, that on the Sabbath day we spend time in worship of God. Fifth, that we love and honor our father and our mother.",
        obscuredQuestion: "What does God require in the fourth and fifth commandments?",
        obscuredAnswer: "Fourth, that on the [Sabbath] [day] we spend time in [worship] of God. Fifth, that we [love] and [honor] our [father] and our [mother]."
    },
    {
        group: "Questions 11-13 (11/11-12/2)",
        question: "What does God require in the sixth, seventh, and eighth commandments?",
        answer: "Sixth, that we do not hurt or hate our neighbor. Seventh, that we live purely and faithfully. Eighth, that we do not take without permission that which belongs to someone else.",
        obscuredQuestion: "What does God require in the sixth, seventh, and eighth commandments?",
        obscuredAnswer: "Sixth, that we do not [hurt] or [hate] our [neighbor]. Seventh, that we [live] [purely] and [faithfully]. Eighth, that we do not [take] without [permission] that which [belongs] to [someone] [else]."
    },
    {
        group: "Questions 11-13 (11/11-12/2)",
        question: "What does God require in the ninth and tenth commandments?",
        answer: "Ninth, that we do not lie or deceive. Tenth, that we are content, not envying anyone.",
        obscuredQuestion: "What does God require in the ninth and tenth commandments?",
        obscuredAnswer: "Ninth, that we do not [lie] or [deceive]. Tenth, that we are [content], not [envying] [anyone]."
    },
    {
        group: "Questions 11-13 (11/11-12/2)",
        question: "Can anyone keep the Law of God perfectly?",
        answer: "Since the fall, no human has been able to keep the Law of God perfectly.",
        obscuredQuestion: "Can anyone [keep] the Law of God [perfectly]?",
        obscuredAnswer: "Since the [fall], no [human] has been able to [keep] the [Law] of [God] [perfectly]."
    },
    {
        group: "Questions 14-17 (1/13-2/3)",
        question: "Did God create us unable to keep His law?",
        answer: "No, but because of the disobedience of Adam and Eve we are all born in sin and guilt, unable to keep God's Law.",
        obscuredQuestion: "Did God [create] us [unable] to keep His [law]?",
        obscuredAnswer: "[No], but because of the [disobedience] of [Adam] and [Eve] we are all [born] in [sin] and [guilt], [unable] to keep [God's] [Law]."
    },
    {
        group: "Questions 14-17 (1/13-2/3)",
        question: "Since no one can keep the law, what is its purpose?",
        answer: "That we may know the holy nature of God, and the sinful nature of our hearts; and thus our need of a savior.",
        obscuredQuestion: "Since no one can [keep] the law, what is its [purpose]?",
        obscuredAnswer: "That we may [know] the [holy] [nature] of God, and the [sinful] [nature] of our [hearts]; and thus our [need] of a [savior]."
    },
    {
        group: "Questions 14-17 (1/13-2/3)",
        question: "What is sin?",
        answer: "Sin is rejecting or ignoring God in the world He created, not being or doing what He requires in His law.",
        obscuredQuestion: "What is sin?",
        obscuredAnswer: "[Sin] is [rejecting] or [ignoring] God in the [world] He [created], not [being] or [doing] what He [requires] in His [law]."
    },
    {
        group: "Questions 14-17 (1/13-2/3)",
        question: "What is idolatry?",
        answer: "Idolatry is trusting in created things rather than the Creator.",
        obscuredQuestion: "What is idolatry?",
        obscuredAnswer: "[Idolatry] is [trusting] in [created] [things] rather than the [Creator]."
    },
    {
        group: "Questions 18-21 (2/17-3/10)",
        question: "Will God allow our disobedience and idolatry to go unpunished?",
        answer: "No, God is righteously angry with our sins and will punish them both in this life, and in the life to come.",
        obscuredQuestion: "Will God [allow] our [disobedience] and [idolatry] to go [unpunished]?",
        obscuredAnswer: "[No], God is [righteously] [angry] with our [sins] and will [punish] them [both] in this [life], and in the [life] to [come]."
    },
    {
        group: "Questions 18-21 (2/17-3/10)",
        question: "Is there any way to escape punishment and be brought back into God's favor?",
        answer: "Yes, God reconciles us to Himself by a redeemer.",
        obscuredQuestion: "Is there any way to [escape] [punishment] and be [brought] back into God's [favor]?",
        obscuredAnswer: "[Yes], God [reconciles] us to [Himself] by a [redeemer]."
    },
    {
        group: "Questions 18-21 (2/17-3/10)",
        question: "Who is the Redeemer?",
        answer: "The only redeemer is the Lord Jesus Christ.",
        obscuredQuestion: "Who is the [Redeemer]?",
        obscuredAnswer: "The only [redeemer] is the [Lord] [Jesus] [Christ]."
    },
    {
        group: "Questions 18-21 (2/17-3/10)",
        question: "What sort of redeemer is needed to bring us back to God?",
        answer: "One who is truly human and also truly God.",
        obscuredQuestion: "What sort of [redeemer] is [needed] to bring us [back] to [God]?",
        obscuredAnswer: "One who is [truly] [human] and also [truly] [God]."
    },
    {
        group: "Questions 22-26 (3/31-4/28)",
        question: "Why must the Redeemer be truly human?",
        answer: "That in human nature He might on our behalf perfectly obey the whole law and suffer the punishment for human sin.",
        obscuredQuestion: "Why must the [Redeemer] be [truly] human?",
        obscuredAnswer: "That in [human] [nature] He might on our behalf [perfectly] [obey] the [whole] [law] and [suffer] the [punishment] for [human] [sin]."
    },
    {
        group: "Questions 22-26 (3/31-4/28)",
        question: "Why must the Redeemer be truly God?",
        answer: "That because of His divine nature His obedience and suffering would be perfect and effective.",
        obscuredQuestion: "Why must the [Redeemer] be [truly] God?",
        obscuredAnswer: "That because of His [divine] [nature] His [obedience] and [suffering] would be [perfect] and [effective]."
    },
    {
        group: "Questions 22-26 (3/31-4/28)",
        question: "Why was it necessary for Christ, the Redeemer, to die?",
        answer: "Christ died willingly in our place to deliver us from the power and penalty of sin and bring us back to God.",
        obscuredQuestion: "Why was it [necessary] for [Christ], the [Redeemer], to [die]?",
        obscuredAnswer: "Christ [died] willingly in our [place] to [deliver] us from the [power] and [penalty] of [sin] and [bring] us back to [God]."
    },
    {
        group: "Questions 22-26 (3/31-4/28)",
        question: "Does Christ's death mean all our sins can be forgiven?",
        answer: "Yes, because Christ's death on the cross fully paid the penalty for our sin, God will remember our sins no more.",
        obscuredQuestion: "Does [Christ's] [death] mean all our [sins] can be [forgiven]?",
        obscuredAnswer: "Yes, because [Christ's] [death] on the [cross] fully [paid] the [penalty] for our [sin], God will [remember] our [sins] no more."
    },
    {
        group: "Questions 22-26 (3/31-4/28)",
        question: "What else does Christ's death redeem?",
        answer: "Every part of fallen creation.",
        obscuredQuestion: "What else does [Christ's] [death] [redeem]?",
        obscuredAnswer: "Every [part] of [fallen] [creation]."
    },
];
