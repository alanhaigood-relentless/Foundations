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
        obscuredAnswer: "That we are not our [own] but [belong] to [God].",
        adultAnswer: "[That we are not our own but belong], body and soul, both in life and death, [to God] and to our Savior Jesus Christ.",
        scriptureReference: "Romans 14:7-8",
        scriptureVerse: "For none of us lives to himself, and none of us dies to himself. For if we live, we live to the Lord, and if we die, we die to the Lord. So then, whether we live or whether we die, we are the Lord's."  
    },
    {
        group: "Questions 1-5 (8/19-9/16)",
        question: "What is God?",
        answer: "God is the creator of everyone and everything.",
        obscuredQuestion: "What is God?",
        obscuredAnswer: "God is the [creator] of [everyone] and [everything].",
        adultAnswer: "[God is the creator] and sustainer [of everyone and everything]. He is eternal, infinite, and unchangeable in his power and perfection, goodness and glory, wisdom, justice, and truth. Nothing happens except through him and by his will.",
        scriptureReference: "Psalm 86:8-10, 15",
        scriptureVerse: "There is none like you among the gods, O Lord, nor are there any works like yours. All the nations you have made shall come and worship before you, O Lord, and shall glorify your name. For you are great and do wondrous things; you alone are God... But you, O Lord, are a God merciful and gracious, slow to anger and abounding in steadfast love and faithfulness."  
    },
    {
        group: "Questions 1-5 (8/19-9/16)",
        question: "How many persons are there in God?",
        answer: "There are three persons in one God: the Father, the Son, and the Holy Spirit.",
        obscuredQuestion: "How many [persons] are there in God?",
        obscuredAnswer: "There are [three] persons in [one] God: the [Father], the [Son], and the [Holy Spirit].",
        adultAnswer: "[There are three persons in] the [one] true and living [God: the Father, the Son, and the Holy Spirit.]  They are the same in substance, equal in power and glory.",
        scriptureReference: "2 Corinthians 13:14",
        scriptureVerse: "The grace of the Lord Jesus Christ and the love of God and the fellowship of the Holy Spirit be with you all."  
    },
    {
        group: "Questions 1-5 (8/19-9/16)",
        question: "How and why did God create us?",
        answer: "God created us male and female in his own image to glorify Him.",
        obscuredQuestion: "How and why did God [create] us?",
        obscuredAnswer: "God created us [male] and [female] in his own [image] to [glorify] Him.",
        adultAnswer: "[God created us male and female in his own image to] know him, love him, live with him, and [glorify Him.] And it is right that we who were created by God should live to his glory.",
        scriptureReference: "Genesis 1:27",
        scriptureVerse: "So God created man in his own image, in the image of God he created him; male and female he created them."  
    },
    {
        group: "Questions 1-5 (8/19-9/16)",
        question: "What else did God create?",
        answer: "God created all things and all his creation was very good.",
        obscuredQuestion: "What else did God [create]?",
        obscuredAnswer: "God created [all] things and [all] his [creation] was very [good].",
        adultAnswer: "[God created all things] by his powerful Word, [and all his creation was very good]; everything flourished under his loving rule.",
        scriptureReference: "Genesis 1:31",
        scriptureVerse: "And God saw everything that he had made, and behold, it was very good."  
    },
    {
        group: "Questions 6-10 (9/30-10/28)",
        question: "How can we glorify God?",
        answer: "By loving Him and by obeying his commands and law.",
        obscuredQuestion: "How can we [glorify] God?",
        obscuredAnswer: "By [loving] Him and by [obeying] his [commands] and [law].",
        adultAnswer: "We glorify God [by] enjoying him, [loving Him], trusting him, [and by obeying his] will, [commands, and law].",
        scriptureReference: "Deuteronomy 11:1",
        scriptureVerse: "You shall therefore love the Lord your God and keep his charge, his statutes, his rules, and his commandments always."  
    },
    {
        group: "Questions 6-10 (9/30-10/28)",
        question: "What does the Law of God require?",
        answer: "That we love God with all our heart, soul, mind, and strength, and love our neighbors as ourselves.",
        obscuredQuestion: "What does the [Law] of God require?",
        obscuredAnswer: "That we [love] God with [all] our [heart], [soul], [mind], and [strength], and [love] our [neighbors] as [ourselves].",
        adultAnswer: "Personal, perfect, and perpetual obedience; [that we love God with all our heart, soul, mind, and strength, and love our neighbors as ourselves.] What God forbids should never be done and what God commands should always be done.",
        scriptureReference: "Matthew 22:37-40",
        scriptureVerse: 'And [Jesus] said to him, "You shall love the Lord your God with all your heart and with all your soul and with all your mind. This is the great and first commandment. And a second is like it: You shall love your neighbor as yourself. On these two commandments depend all the Law and the Prophets."'  
    },
    {
        group: "Questions 6-10 (9/30-10/28)",
        question: "What is the Law of God stated in the Ten Commandments?",
        answer: "You shall have no other gods before me. You shall not make for yourself an idol. You shall not misuse the name of the Lord your God. Remember the Sabbath Day by keeping it holy. Honor your father and mother. You shall not murder. You shall not commit adultery. You shall not steal. You shall not give false testimony. You shall not covet.",
        obscuredQuestion: "What is the [Law] of [God] stated in the [Ten] [Commandments]?",
        obscuredAnswer: "You shall have no other [gods before me]. You shall not make for [yourself] an [idol]. You shall not misuse the [name] of the [Lord] your [God]. Remember the [Sabbath] [Day] by keeping it [holy]. Honor your [father] and your [mother]. You shall not [murder]. You shall not [commit] [adultery]. You shall not [steal]. You shall not give [false] [testimony]. You shall not [covet].",
        adultAnswer: "[You shall have no other gods before me. You shall not make for yourself an idol] in the form of anything in heaven above or on the earth beneath or in the waters below--you shall not bow down to them or worship them. [You shall not misuse the name of the Lord your God. Remember the Sabbath Day by keeping it holy. Honor your father and your mother. You shall not murder. You shall not commit adultery. You shall not steal. You shall not give false testimony. You shall not covet.]",
        scriptureReference: "Exodus 20:3",
        scriptureVerse: "You shall have no other gods before me."  
    },
    {
        group: "Questions 6-10 (9/30-10/28)",
        question: "What does God require in the first, second, and third commandments?",
        answer: "First, that we know God as the only true God. Second, that we avoid all idolatry. Third, that we treat God's name with fear and reverence.",
        obscuredQuestion: "What does God require in the first, second, and third commandments?",
        obscuredAnswer: "First, that we [know] God as the only [true] God. Second, that we [avoid] all [idolatry]. Third, that we [treat] God's [name] with [fear] and [reverence].",
        adultAnswer: "[First, that we know] and trust [God as the only true] and living [God. Second, that we avoid all idolatry] and do not worship God improperly. [Third, that we treat God's name with fear and reverence] honoring also his Word and works.",
        scriptureReference: "Deuteronomy 6:13-14",
        scriptureVerse: "It is the Lord your God you shall fear. Him you shall serve and by his name you shall swear. You shall not go after other gods, the gods of the peoples who are around you."  
    },
    {
        group: "Questions 6-10 (9/30-10/28)",
        question: "What does God require in the fourth and fifth commandments?",
        answer: "Fourth, that on the Sabbath day we spend time in worship of God. Fifth, that we love and honor our father and our mother.",
        obscuredQuestion: "What does God require in the fourth and fifth commandments?",
        obscuredAnswer: "Fourth, that on the [Sabbath] [day] we spend time in [worship] of God. Fifth, that we [love] and [honor] our [father] and our [mother].",
        adultAnswer: "[Fourth, that on the Sabbath day we spend time in] public and private [worship of God], rest from routine employment, serve the Lord and others, and so anticipate the eternal Sabbath. [Fifth, that we love and honor our father and our mother] submitting to their godly discipline and direction.",
        scriptureReference: "Leviticus 19:3",
        scriptureVerse: "Every one of you shall revere his mother and his father, and you shall keep my Sabbaths: I am the Lord your God."  
    },
    {
        group: "Questions 11-13 (11/11-12/2)",
        question: "What does God require in the sixth, seventh, and eighth commandments?",
        answer: "Sixth, that we do not hurt or hate our neighbor. Seventh, that we live purely and faithfully. Eighth, that we do not take without permission that which belongs to someone else.",
        obscuredQuestion: "What does God require in the sixth, seventh, and eighth commandments?",
        obscuredAnswer: "Sixth, that we do not [hurt] or [hate] our [neighbor]. Seventh, that we [live] [purely] and [faithfully]. Eighth, that we do not [take] without [permission] that which [belongs] to [someone] [else].",
        adultAnswer: "[Sixth, that we do not hurt or hate], or be hostile to [our neighbor], but be patient and peaceful, pursuing even our enemies with love. [Seventh, that we] abstain from sexual immorality and [live purely and faithfully], whether in marriage or in single life, avoiding all impure actions, looks, words, thoughts, or desires, and whatever might lead to them. [Eighth, that we do not take without permission that which belongs to someone else], nor withhold any good from someone we might benefit.",
        scriptureReference: "Romans 13:9",
        scriptureVerse: 'For the commandments, "You shall not commit adultery, You shall not murder, You shall not steal, You shall not covet," and any other commandment, are summed up in this word: "You shall love your neighbor as yourself."'  
    },
    {
        group: "Questions 11-13 (11/11-12/2)",
        question: "What does God require in the ninth and tenth commandments?",
        answer: "Ninth, that we do not lie or deceive. Tenth, that we are content, not envying anyone.",
        obscuredQuestion: "What does God require in the ninth and tenth commandments?",
        obscuredAnswer: "Ninth, that we do not [lie] or [deceive]. Tenth, that we are [content], not [envying] [anyone].",
        adultAnswer: "[Ninth, that we do not lie or deceive], but speak the truth in love. [Tenth, that we are content, not envying anyone] or resenting what God has given them or us.",
        scriptureReference: "James 2:8",
        scriptureVerse: 'If you really fulfill the royal law according to the Scripture, "You shall love your neighbor as yourself," you are doing well.'
    },
    {
        group: "Questions 11-13 (11/11-12/2)",
        question: "Can anyone keep the Law of God perfectly?",
        answer: "Since the fall, no human has been able to keep the Law of God perfectly.",
        obscuredQuestion: "Can anyone [keep] the Law of God [perfectly]?",
        obscuredAnswer: "Since the [fall], no [human] has been able to [keep] the [Law] of [God] [perfectly].",
        adultAnswer: "[Since the fall, no] mere [human has been able to keep the Law of God perfectly], but consistently breaks it in thought, word, and deed.",
        scriptureReference: "Romans 3:10-12",
        scriptureVerse: "None is righteous, no, not one: no one understands; no one seeks for God. All have turned aside; together they have become worthless; no one does good, not even one."  
    },
    {
        group: "Questions 14-17 (1/13-2/3)",
        question: "Did God create us unable to keep his law?",
        answer: "No, but because of the disobedience of Adam and Eve we are all born in sin and guilt, unable to keep God's Law.",
        obscuredQuestion: "Did God [create] us [unable] to keep his [law]?",
        obscuredAnswer: "[No], but because of the [disobedience] of [Adam] and [Eve] we are all [born] in [sin] and [guilt], [unable] to keep [God's] [Law].",
        adultAnswer: "[No, but because of the disobedience of] our first parents, [Adam and Eve], all of creation is fallen; [we are all born in sin and guilt,] corrupt in our nature and [unable to keep God's Law.]",
        scriptureReference: "Romans 5:12",
        scriptureVerse: "Therefore, just as sin came into the world through one man, and death through sin, and so death spread to all men because all sinned."  
    },
    {
        group: "Questions 14-17 (1/13-2/3)",
        question: "Since no one can keep the law, what is its purpose?",
        answer: "That we may know the holy nature of God, and the sinful nature of our hearts; and thus our need of a savior.",
        obscuredQuestion: "Since no one can [keep] the law, what is its [purpose]?",
        obscuredAnswer: "That we may [know] the [holy] [nature] of God, and the [sinful] [nature] of our [hearts]; and thus our [need] of a [savior].",
        adultAnswer: "[That we may know the holy nature] and will [of God, and the sinful nature] and disobedience [of our hearts; and thus our need of a savior.] The law also teaches and exhorts us to live a life worthy of our Savior.",
        scriptureReference: "Romans 3:20",
        scriptureVerse: "For by works of the law no human being will be justified in his sight, since through the law comes knowledge of sin."  
    },
    {
        group: "Questions 14-17 (1/13-2/3)",
        question: "What is sin?",
        answer: "Sin is rejecting or ignoring God in the world he created, not being or doing what he requires in his law.",
        obscuredQuestion: "What is sin?",
        obscuredAnswer: "[Sin] is [rejecting] or [ignoring] God in the [world] he [created], not [being] or [doing] what he [requires] in his [law].",
        adultAnswer: "[Sin is rejecting or ignoring God in the world he created,] rebelling against him by living without reference to him, [not being or doing what he requires in his law]--resulting in our death and the disintegration of all creation.",
        scriptureReference: "1 John 3:4",
        scriptureVerse: "Everyone who makes a practice of sinning also practices lawlessness; sin is lawlessness."  
    },
    {
        group: "Questions 14-17 (1/13-2/3)",
        question: "What is idolatry?",
        answer: "Idolatry is trusting in created things rather than the Creator.",
        obscuredQuestion: "What is idolatry?",
        obscuredAnswer: "[Idolatry] is [trusting] in [created] [things] rather than the [Creator].",
        adultAnswer: "[Idolatry is trusting in created things rather than the Creator] for our hope and happiness, significance and security.",
        scriptureReference: "Romans 1:21, 25",
        scriptureVerse: "For although they knew God, they did not honor him as God or give thanks to him but they became futile in their thinking, and their foolish hearts were darkened.... They exchanged the truth about God for a lie and worshiped and served the creature rather than the Creator."  
    },
    {
        group: "Questions 18-21 (2/17-3/10)",
        question: "Will God allow our disobedience and idolatry to go unpunished?",
        answer: "No, God is righteously angry with our sins and will punish them both in this life, and in the life to come.",
        obscuredQuestion: "Will God [allow] our [disobedience] and [idolatry] to go [unpunished]?",
        obscuredAnswer: "[No], God is [righteously] [angry] with our [sins] and will [punish] them [both] in this [life], and in the [life] to [come].",
        adultAnswer: "[No,] every sin is against the sovereignty, holiness, and goodness of God, and against his righteous law, and [God is righteously angry with our sins and will punish them] in his just judgment [both in this life, and in the life to come.]",
        scriptureReference: "Ephesians 5:5-6",
        scriptureVerse: "For you may be sure of this, that everyone who is sexually immoral or impure, or who is covetous (that is, an idolater), has no inheritance in the kingdom of Christ and God. Let no one deceive you with empty words, for because of these things the wrath of God comes upon the sons of disobedience."  
    },
    {
        group: "Questions 18-21 (2/17-3/10)",
        question: "Is there any way to escape punishment and be brought back into God's favor?",
        answer: "Yes, God reconciles us to himself by a redeemer.",
        obscuredQuestion: "Is there any way to [escape] [punishment] and be [brought] back into God's [favor]?",
        obscuredAnswer: "[Yes], God [reconciles] us to [himself] by a [redeemer].",
        adultAnswer: "[Yes,] to satisfy his justice, [God] himself, out of mere mercy, [reconciles us to himself] and delivers us from sin and from the punishment for sin, [by a redeemer.]",
        scriptureReference: "Isaiah 53:10-11",
        scriptureVerse: "Yet it was the will of the Lord to crush him; he has put him to grief; when his soul makes an offering for guilt, he shall see his offspring; he shall prolong his days; the will of the Lord shall prosper in his hand. Out of the anguish of his soul he shall see and be satisfied; by his knowledge shall the righteous one, my servant, make many to be accounted righteous, and he shall bear their iniquities."  
    },
    {
        group: "Questions 18-21 (2/17-3/10)",
        question: "Who is the Redeemer?",
        answer: "The only redeemer is the Lord Jesus Christ.",
        obscuredQuestion: "Who is the [Redeemer]?",
        obscuredAnswer: "The only [redeemer] is the [Lord] [Jesus] [Christ].",
        adultAnswer: "[The only redeemer is the Lord Jesus Christ], the eternal Son of God, in whom God became man and bore the penalty for sin himself.",
        scriptureReference: "1 Timothy 2:5",
        scriptureVerse: "For there is one God, and there is one mediator between God and men, the man Christ Jesus."  
    },
    {
        group: "Questions 18-21 (2/17-3/10)",
        question: "What sort of redeemer is needed to bring us back to God?",
        answer: "One who is truly human and also truly God.",
        obscuredQuestion: "What sort of [redeemer] is [needed] to bring us [back] to [God]?",
        obscuredAnswer: "One who is [truly] [human] and also [truly] [God].",
        adultAnswer: "[One who is truly human and also truly God.]",
        scriptureReference: "Isaiah 9:6",
        scriptureVerse: "For to us a child is born, to us a son is given; and the government shall be upon his shoulder, and his name shall be called Wonderful Counselor, Mighty God, Everlasting Father, Prince of Peace."  
    },
    {
        group: "Questions 22-26 (3/31-4/28)",
        question: "Why must the Redeemer be truly human?",
        answer: "That in human nature he might on our behalf perfectly obey the whole law and suffer the punishment for human sin.",
        obscuredQuestion: "Why must the [Redeemer] be [truly] human?",
        obscuredAnswer: "That in [human] [nature] he might on our behalf [perfectly] [obey] the [whole] [law] and [suffer] the [punishment] for [human] [sin].",
        adultAnswer: "[That in human nature he might on our behalf perfectly obey the whole law and suffer the punishment for human sin]; and also that he might sympathize with our weaknesses.",
        scriptureReference: "Hebrews 2:17",
        scriptureVerse: "Therefore he had to be made like his brothers in every respect, so that he might become a merciful and faithful high priest in the service of God, to make propitiation for the sins of the people."  
    },
    {
        group: "Questions 22-26 (3/31-4/28)",
        question: "Why must the Redeemer be truly God?",
        answer: "That because of his divine nature his obedience and suffering would be perfect and effective.",
        obscuredQuestion: "Why must the [Redeemer] be [truly] God?",
        obscuredAnswer: "That because of his [divine] [nature] his [obedience] and [suffering] would be [perfect] and [effective].",
        adultAnswer: "[That because of his divine nature his obedience and suffering would be perfect and effective]; and also that he would be able to bear the righteous anger of God against sin and yet overcome death.",
        scriptureReference: "Acts 2:24",
        scriptureVerse: "God raised him up, loosing the pangs of death, because it was not possible for him to be held by it."  
    },
    {
        group: "Questions 22-26 (3/31-4/28)",
        question: "Why was it necessary for Christ, the Redeemer, to die?",
        answer: "Christ died willingly in our place to deliver us from the power and penalty of sin and bring us back to God.",
        obscuredQuestion: "Why was it [necessary] for [Christ], the [Redeemer], to [die]?",
        obscuredAnswer: "Christ [died] willingly in our [place] to [deliver] us from the [power] and [penalty] of [sin] and [bring] us back to [God].",
        adultAnswer: "Since death is the punishment for sin, [Christ died willingly in our place to deliver us from the power and penalty of sin and bring us back to God.] By his substitutionary atoning death, he alone redeems us from hell and gains for us forgiveness of sin, righteousness, and everlasting life.",
        scriptureReference: "Colossians 1:21-22",
        scriptureVerse: "And you, who once were alienated and hostile in mind, doing evil deeds, he has now reconciled in his body of flesh by his death, in order to present you holy and blameless and above reproach before him."  
    },
    {
        group: "Questions 22-26 (3/31-4/28)",
        question: "Does Christ's death mean all our sins can be forgiven?",
        answer: "Yes, because Christ's death on the cross fully paid the penalty for our sin, God will remember our sins no more.",
        obscuredQuestion: "Does [Christ's] [death] mean all our [sins] can be [forgiven]?",
        obscuredAnswer: "Yes, because [Christ's] [death] on the [cross] fully [paid] the [penalty] for our [sin], God will [remember] our [sins] no more.",
        adultAnswer: "[Yes, because Christ's death on the cross fully paid the penalty for our sin, God] graciously imputes Christ's righteousness to us as if it were our own and [will remember our sins no more.]",
        scriptureReference: "2 Corinthians 5:21",
        scriptureVerse: "For our sake he made him to be sin who knew no sin, so that in him we might become the righteousness of God"  
    },
    {
        group: "Questions 22-26 (3/31-4/28)",
        question: "What else does Christ's death redeem?",
        answer: "Every part of fallen creation.",
        obscuredQuestion: "What else does [Christ's] [death] [redeem]?",
        obscuredAnswer: "Every [part] of [fallen] [creation].",
        adultAnswer: "Christ's death is the beginning of the redemption and renewal of [every part of fallen creation], as he powerfully directs all things for his own glory and creation's good.",
        scriptureReference: "Colossians 1:19-20",
        scriptureVerse: "For in him all the fullness of God was pleased to dwell, and through him to reconcile to himself all things, whether on earth or in heaven, making peace by the blood of his cross."  
    },
];
