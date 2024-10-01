
export default [{
    title: 'Basic Information', questions: [
        // Part 1: Basic Information
        {
            title: 'What is your gender?',
            type: 'RADIO',
            options: [
                { value: 'Male' },
                { value: 'Female' },
                { value: 'Other/Prefer not to say' }
            ],
            required: true
        },
        {
            title: 'What is your age?',
            type: 'TEXT',
            required: true
        },
        {
            title: 'How many children do you have?',
            type: 'TEXT',
            required: true
        },
        {
            title: 'What is your highest level of education?',
            type: 'RADIO',
            options: [
                { value: 'No formal education' },
                { value: 'Primary education' },
                { value: 'Secondary education' },
                { value: 'Vocational training' },
                { value: 'Bachelor’s degree' },
                { value: 'Master’s degree' },
                { value: 'PhD/Doctorate' }
            ],
            required: true
        },
        {
            title: 'What is your current occupation?',
            type: 'TEXT',
            required: true
        },
        {
            title: 'How would you describe your family\'s financial situation?',
            type: 'RADIO',
            options: [
                { value: 'Struggling' },
                { value: 'Stable' },
                { value: 'Comfortable' },
                { value: 'Wealthy' }
            ],
            required: true
        },
        {
            title: 'What is your height?',
            type: 'TEXT',
            required: false
        },
        {
            title: 'What is your weight?',
            type: 'TEXT',
            required: false
        },
        {
            title: 'Do you have any chronic health conditions?',
            type: 'RADIO',
            options: [
                { value: 'Yes' },
                { value: 'No' }
            ],
            required: false
        },
        {
            title: 'Do you have any allergies?',
            type: 'RADIO',
            options: [
                { value: 'Yes' },
                { value: 'No' }
            ],
            required: false
        },

        // Part 2: Parenting and Family Dynamics
        {
            title: 'How do you and your partner typically make decisions about parenting?',
            type: 'RADIO',
            options: [
                { value: 'We discuss and agree together' },
                { value: 'One of us usually decides' },
                { value: 'We each handle different aspects' },
                { value: 'Other: [ ]' }
            ],
            required: true
        },
        {
            title: 'How often do you and your partner have disagreements about parenting?',
            type: 'RADIO',
            options: [
                { value: 'Very often' },
                { value: 'Sometimes' },
                { value: 'Rarely' },
                { value: 'Never' }
            ],
            required: true
        },
        {
            title: 'When disagreements arise, how are they typically resolved?',
            type: 'RADIO',
            options: [
                { value: 'Open discussion' },
                { value: 'Compromise' },
                { value: 'One partner usually defers' },
                { value: 'Other: [ ]' }
            ],
            required: true
        },
        {
            title: 'In general, how would you describe your relationship with your partner?',
            type: 'RADIO',
            options: [
                { value: 'Very supportive' },
                { value: 'Somewhat supportive' },
                { value: 'Neutral' },
                { value: 'Strained' }
            ],
            required: true
        },
        {
            title: 'What are the most important values you want to instill in your children?',
            type: 'CHECKBOX',
            options: [
                { value: 'Respect' },
                { value: 'Responsibility' },
                { value: 'Independence' },
                { value: 'Compassion' },
                { value: 'Other: [ ]' }
            ],
            required: true
        },
        {
            title: 'How involved are you in your children’s education and extracurricular activities?',
            type: 'RADIO',
            options: [
                { value: 'Very involved' },
                { value: 'Moderately involved' },
                { value: 'Not very involved' },
                { value: 'Not involved at all' }
            ],
            required: true
        },
        {
            title: 'Do you encourage your children to pursue higher education or other forms of training?',
            type: 'RADIO',
            options: [
                { value: 'Yes' },
                { value: 'No' },
                { value: 'Depends on their interests' },
                { value: 'Not sure yet' }
            ],
            required: true
        },
        {
            title: 'How often do you talk to your children about their future and career aspirations?',
            type: 'RADIO',
            options: [
                { value: 'Frequently' },
                { value: 'Sometimes' },
                { value: 'Rarely' },
                { value: 'Never' }
            ],
            required: true
        },

        // Part 3: Children's Experiences and Development
        {
            title: 'How would you describe your children\'s performance at school?',
            type: 'RADIO',
            options: [
                { value: 'Excellent' },
                { value: 'Above average' },
                { value: 'Average' },
                { value: 'Below average' },
                { value: 'Not sure' }
            ],
            required: true
        },
        {
            title: 'Do your children participate in group activities (e.g., sports, clubs, etc.)?',
            type: 'RADIO',
            options: [
                { value: 'Yes' },
                { value: 'No' },
                { value: 'Sometimes' }
            ],
            required: true
        },
        {
            title: 'How do your children typically handle conflicts or challenges with peers?',
            type: 'RADIO',
            options: [
                { value: 'They resolve them on their own' },
                { value: 'They seek help from parents or teachers' },
                { value: 'They struggle with conflict resolution' },
                { value: 'Other: [ ]' }
            ],
            required: true
        },
        {
            title: 'How would you describe your children\'s social skills?',
            type: 'RADIO',
            options: [
                { value: 'Very social and outgoing' },
                { value: 'Somewhat social' },
                { value: 'Shy and reserved' },
                { value: 'Struggles with social interactions' }
            ],
            required: true
        },
        {
            title: 'Do your children feel comfortable talking to you about personal issues or concerns?',
            type: 'RADIO',
            options: [
                { value: 'Yes, very comfortable' },
                { value: 'Somewhat comfortable' },
                { value: 'Not comfortable' }
            ],
            required: true
        },
        {
            title: 'How often do you have family activities or quality time together?',
            type: 'RADIO',
            options: [
                { value: 'Daily' },
                { value: 'Weekly' },
                { value: 'Occasionally' },
                { value: 'Rarely' }
            ],
            required: true
        },
        {
            title: 'What are some of your children’s favorite family activities?',
            type: 'TEXT',
            required: false
        },

        // Part 4: Broader Family Environment
        {
            title: 'How often do your children interact with extended family (e.g., grandparents, aunts/uncles)?',
            type: 'RADIO',
            options: [
                { value: 'Frequently' },
                { value: 'Occasionally' },
                { value: 'Rarely' },
                { value: 'Never' }
            ],
            required: true
        },
        {
            title: 'What role do extended family members play in your children’s lives?',
            type: 'RADIO',
            options: [
                { value: 'Strong influence' },
                { value: 'Moderate influence' },
                { value: 'Little to no influence' }
            ],
            required: true
        },
        {
            title: 'How would you describe your family’s social circle (friends, community)?',
            type: 'RADIO',
            options: [
                { value: 'Close-knit and supportive' },
                { value: 'Friendly but not close' },
                { value: 'Small social circle' },
                { value: 'Isolated' }
            ],
            required: true
        },
        {
            title: 'Do your children have friends from different types of families or backgrounds?',
            type: 'RADIO',
            options: [
                { value: 'Yes, many' },
                { value: 'Some' },
                { value: 'Not really' },
                { value: 'I’m not sure' }
            ],
            required: true
        },

        // Questions about Partner
        {
            title: 'What is your partner’s gender?',
            type: 'RADIO',
            options: [
                { value: 'Male' },
                { value: 'Female' },
                { value: 'Other/Prefer not to say' }
            ],
            required: true
        },
        {
            title: 'What is your partner’s highest level of education?',
            type: 'RADIO',
            options: [
                { value: 'No formal education' },
                { value: 'Primary education' },
                { value: 'Secondary education' },
                { value: 'Vocational training' },
                { value: 'Bachelor’s degree' },
                { value: 'Master’s degree' },
                { value: 'PhD/Doctorate' }
            ],
            required: true
        },
        {
            title: 'What is your partner’s current occupation?',
            type: 'TEXT',
            required: true
        },
        {
            title: 'How would you describe your partner’s involvement in parenting decisions?',
            type: 'RADIO',
            options: [
                { value: 'Very involved' },
                { value: 'Somewhat involved' },
                { value: 'Not very involved' },
                { value: 'Not involved at all' }
            ],
            required: true
        },
        {
            title: 'How would you describe your partner’s approach to handling family finances?',
            type: 'RADIO',
            options: [
                { value: 'Very proactive' },
                { value: 'Somewhat proactive' },
                { value: 'Reactive' },
                { value: 'Not involved' }
            ],
            required: true
        },

        // Questions about Children
        {
            title: 'How many children do you and your partner have?',
            type: 'TEXT',
            required: true
        },
        {
            title: 'What are the ages of your children?',
            type: 'TEXT',
            required: true
        },
        {
            title: 'What are your children’s educational levels or grades?',
            type: 'TEXT',
            required: true
        },
        {
            title: 'Do your children have any special needs or conditions?',
            type: 'RADIO',
            options: [
                { value: 'Yes' },
                { value: 'No' }
            ],
            required: false
        },
        {
            title: 'Do your children participate in any extracurricular activities?',
            type: 'RADIO',
            options: [
                { value: 'Yes' },
                { value: 'No' }
            ],
            required: true
        },
        {
            title: 'How often do you and your children have family outings or vacations?',
            type: 'RADIO',
            options: [
                { value: 'Frequently' },
                { value: 'Occasionally' },
                { value: 'Rarely' },
                { value: 'Never' }
            ],
            required: true
        },

        // Additional Biological Questions about Health
        {
            title: 'Do you or your children have any chronic illnesses or conditions?',
            type: 'RADIO',
            options: [
                { value: 'Yes, myself' },
                { value: 'Yes, my children' },
                { value: 'Yes, both' },
                { value: 'No' }
            ],
            required: false
        },
        {
            title: 'How would you rate your family\'s overall physical health?',
            type: 'RADIO',
            options: [
                { value: 'Excellent' },
                { value: 'Good' },
                { value: 'Average' },
                { value: 'Poor' }
            ],
            required: true
        }
    ]
},
{
    title: 'Parenting and Family Dynamics', questions: [
        {
            title: 'How do you and your partner typically make decisions about parenting?',
            type: 'RADIO',
            options: [
                { value: 'We discuss and agree together' },
                { value: 'One of us usually decides' },
                { value: 'We each handle different aspects' },
                { value: 'Other' }
            ],
            required: true
        },
        {
            title: 'If you selected \'Other\' for the previous question, please specify.',
            type: 'TEXT',
            required: false
        },
        {
            title: 'How often do you and your partner have disagreements about parenting?',
            type: 'RADIO',
            options: [
                { value: 'Very often' },
                { value: 'Sometimes' },
                { value: 'Rarely' },
                { value: 'Never' }
            ],
            required: true
        },
        {
            title: 'When disagreements arise, how are they typically resolved?',
            type: 'RADIO',
            options: [
                { value: 'Open discussion' },
                { value: 'Compromise' },
                { value: 'One partner usually defers' },
                { value: 'Other' }
            ],
            required: true
        },
        {
            title: 'If you selected \'Other\' for the previous question, please specify.',
            type: 'TEXT',
            required: false
        },
        {
            title: 'In general, how would you describe your relationship with your partner?',
            type: 'RADIO',
            options: [
                { value: 'Very supportive' },
                { value: 'Somewhat supportive' },
                { value: 'Neutral' },
                { value: 'Strained' }
            ],
            required: true
        },
        {
            title: 'What are the most important values you want to instill in your children?',
            type: 'CHECKBOX',
            options: [
                { value: 'Respect' },
                { value: 'Responsibility' },
                { value: 'Independence' },
                { value: 'Compassion' },
                { value: 'Other' }
            ],
            required: true
        },
        {
            title: 'If you selected \'Other\' for the previous question, please specify.',
            type: 'TEXT',
            required: false
        },
        {
            title: 'How involved are you in your children’s education and extracurricular activities?',
            type: 'RADIO',
            options: [
                { value: 'Very involved' },
                { value: 'Moderately involved' },
                { value: 'Not very involved' },
                { value: 'Not involved at all' }
            ],
            required: true
        },
        {
            title: 'Do you encourage your children to pursue higher education or other forms of training?',
            type: 'RADIO',
            options: [
                { value: 'Yes' },
                { value: 'No' },
                { value: 'Depends on their interests' },
                { value: 'Not sure yet' }
            ],
            required: true
        },
        {
            title: 'How often do you talk to your children about their future and career aspirations?',
            type: 'RADIO',
            options: [
                { value: 'Frequently' },
                { value: 'Sometimes' },
                { value: 'Rarely' },
                { value: 'Never' }
            ],
            required: true
        },
        // Part 2: Parenting and Family Dynamics

        {
            title: 'How do you and your partner typically make decisions about parenting?',
            type: 'RADIO',
            options: [
                { value: 'We discuss and agree together' },
                { value: 'One of us usually decides' },
                { value: 'We each handle different aspects' },
                { value: 'Other' }
            ],
            required: true
        },
        {
            title: 'If you selected \'Other\' for the previous question, please specify.',
            type: 'TEXT',
            required: false
        },
        {
            title: 'How often do you and your partner have disagreements about parenting?',
            type: 'RADIO',
            options: [
                { value: 'Very often' },
                { value: 'Sometimes' },
                { value: 'Rarely' },
                { value: 'Never' }
            ],
            required: true
        },
        {
            title: 'When disagreements arise, how are they typically resolved?',
            type: 'RADIO',
            options: [
                { value: 'Open discussion' },
                { value: 'Compromise' },
                { value: 'One partner usually defers' },
                { value: 'Other' }
            ],
            required: true
        },
        {
            title: 'If you selected \'Other\' for the previous question, please specify.',
            type: 'TEXT',
            required: false
        },
        {
            title: 'In general, how would you describe your relationship with your partner?',
            type: 'RADIO',
            options: [
                { value: 'Very supportive' },
                { value: 'Somewhat supportive' },
                { value: 'Neutral' },
                { value: 'Strained' }
            ],
            required: true
        },
        {
            title: 'How do you and your partner handle family finances and budgeting?',
            type: 'RADIO',
            options: [
                { value: 'We handle it jointly' },
                { value: 'One of us manages it primarily' },
                { value: 'We have a shared budget but separate spending' },
                { value: 'Other' }
            ],
            required: true
        },
        {
            title: 'If you selected \'Other\' for the previous question, please specify.',
            type: 'TEXT',
            required: false
        },
        {
            title: 'What are the most important values you want to instill in your children?',
            type: 'CHECKBOX',
            options: [
                { value: 'Respect' },
                { value: 'Responsibility' },
                { value: 'Independence' },
                { value: 'Compassion' },
                { value: 'Honesty' },
                { value: 'Perseverance' },
                { value: 'Other' }
            ],
            required: true
        },
        {
            title: 'If you selected \'Other\' for the previous question, please specify.',
            type: 'TEXT',
            required: false
        },
        {
            title: 'How involved are you in your children’s education and extracurricular activities?',
            type: 'RADIO',
            options: [
                { value: 'Very involved' },
                { value: 'Moderately involved' },
                { value: 'Not very involved' },
                { value: 'Not involved at all' }
            ],
            required: true
        },
        {
            title: 'Do you encourage your children to pursue higher education or other forms of training?',
            type: 'RADIO',
            options: [
                { value: 'Yes' },
                { value: 'No' },
                { value: 'Depends on their interests' },
                { value: 'Not sure yet' }
            ],
            required: true
        },
        {
            title: 'How often do you talk to your children about their future and career aspirations?',
            type: 'RADIO',
            options: [
                { value: 'Frequently' },
                { value: 'Sometimes' },
                { value: 'Rarely' },
                { value: 'Never' }
            ],
            required: true
        },
        {
            title: 'How do you and your partner manage household responsibilities and chores?',
            type: 'RADIO',
            options: [
                { value: 'We divide tasks evenly' },
                { value: 'One of us handles most tasks' },
                { value: 'We handle tasks as needed' },
                { value: 'Other' }
            ],
            required: true
        },
        {
            title: 'If you selected \'Other\' for the previous question, please specify.',
            type: 'TEXT',
            required: false
        },
        {
            title: 'How do you ensure that both partners have time for personal interests or self-care?',
            type: 'RADIO',
            options: [
                { value: 'We schedule time for each other' },
                { value: 'We handle it informally' },
                { value: 'It’s not a priority' },
                { value: 'Other' }
            ],
            required: true
        },
        {
            title: 'If you selected \'Other\' for the previous question, please specify.',
            type: 'TEXT',
            required: false
        }
    ]
}, {
    title: 'School and Social Life', questions: [
        {
            title: 'How would you describe your children\'s performance at school?',
            type: 'RADIO',
            options: [
                { value: 'Excellent' },
                { value: 'Above average' },
                { value: 'Average' },
                { value: 'Below average' },
                { value: 'Not sure' }
            ],
            required: true
        },
        {
            title: 'Do your children participate in group activities (e.g., sports, clubs, etc.)?',
            type: 'RADIO',
            options: [
                { value: 'Yes' },
                { value: 'No' },
                { value: 'Sometimes' }
            ],
            required: true
        },
        {
            title: 'How do your children typically handle conflicts or challenges with peers?',
            type: 'RADIO',
            options: [
                { value: 'They resolve them on their own' },
                { value: 'They seek help from parents or teachers' },
                { value: 'They struggle with conflict resolution' },
                { value: 'Other' }
            ],
            required: true
        },
        {
            title: 'If you selected \'Other\' for the previous question, please specify.',
            type: 'TEXT',
            required: false
        },
        {
            title: 'How would you describe your children\'s social skills?',
            type: 'RADIO',
            options: [
                { value: 'Very social and outgoing' },
                { value: 'Somewhat social' },
                { value: 'Shy and reserved' },
                { value: 'Struggles with social interactions' }
            ],
            required: true
        },
        {
            title: 'Do your children feel comfortable talking to you about personal issues or concerns?',
            type: 'RADIO',
            options: [
                { value: 'Yes, very comfortable' },
                { value: 'Somewhat comfortable' },
                { value: 'Not comfortable' }
            ],
            required: true
        },
        {
            title: 'How often do you have family activities or quality time together?',
            type: 'RADIO',
            options: [
                { value: 'Daily' },
                { value: 'Weekly' },
                { value: 'Occasionally' },
                { value: 'Rarely' }
            ],
            required: true
        },
        {
            title: 'What are some of your children’s favorite family activities?',
            type: 'TEXT',
            required: false
        },
        {
            title: 'How often do your children interact with peers outside of school (e.g., playdates, weekend activities)?',
            type: 'RADIO',
            options: [
                { value: 'Very often' },
                { value: 'Sometimes' },
                { value: 'Rarely' },
                { value: 'Never' }
            ],
            required: true
        },
        {
            title: 'Do your children have any close friends they frequently spend time with?',
            type: 'RADIO',
            options: [
                { value: 'Yes, many' },
                { value: 'A few' },
                { value: 'Not really' },
                { value: 'I’m not sure' }
            ],
            required: true
        },
        {
            title: 'How do your children feel about their school environment (e.g., teachers, classmates, facilities)?',
            type: 'RADIO',
            options: [
                { value: 'Very positive' },
                { value: 'Somewhat positive' },
                { value: 'Neutral' },
                { value: 'Somewhat negative' },
                { value: 'Very negative' }
            ],
            required: true
        },
        {
            title: 'How often do your children receive help with their homework or school projects from you?',
            type: 'RADIO',
            options: [
                { value: 'Very often' },
                { value: 'Sometimes' },
                { value: 'Rarely' },
                { value: 'Never' }
            ],
            required: true
        },
        {
            title: 'Do you think your children are well-prepared for upcoming transitions (e.g., moving to a new grade, starting a new school)?',
            type: 'RADIO',
            options: [
                { value: 'Yes, very prepared' },
                { value: 'Somewhat prepared' },
                { value: 'Not very prepared' },
                { value: 'Not prepared at all' }
            ],
            required: true
        },
        {
            title: 'How do your children typically cope with academic stress or pressure?',
            type: 'RADIO',
            options: [
                { value: 'They manage well on their own' },
                { value: 'They seek support from parents or teachers' },
                { value: 'They struggle with stress management' },
                { value: 'Other' }
            ],
            required: true
        },
        {
            title: 'If you selected \'Other\' for the previous question, please specify.',
            type: 'TEXT',
            required: false
        },
        {
            title: 'How would you describe your children\'s performance at school?',
            type: 'RADIO',
            options: [
                { value: 'Excellent' },
                { value: 'Above average' },
                { value: 'Average' },
                { value: 'Below average' },
                { value: 'Not sure' }
            ],
            required: true
        },
        {
            title: 'Do your children participate in group activities (e.g., sports, clubs, etc.)?',
            type: 'RADIO',
            options: [
                { value: 'Yes' },
                { value: 'No' },
                { value: 'Sometimes' }
            ],
            required: true
        },
        {
            title: 'How do your children typically handle conflicts or challenges with peers?',
            type: 'RADIO',
            options: [
                { value: 'They resolve them on their own' },
                { value: 'They seek help from parents or teachers' },
                { value: 'They struggle with conflict resolution' },
                { value: 'Other' }
            ],
            required: true
        },
        {
            title: 'If you selected \'Other\' for the previous question, please specify.',
            type: 'TEXT',
            required: false
        },
        {
            title: 'How would you describe your children\'s social skills?',
            type: 'RADIO',
            options: [
                { value: 'Very social and outgoing' },
                { value: 'Somewhat social' },
                { value: 'Shy and reserved' },
                { value: 'Struggles with social interactions' }
            ],
            required: true
        },
        {
            title: 'Do your children feel comfortable talking to you about personal issues or concerns?',
            type: 'RADIO',
            options: [
                { value: 'Yes, very comfortable' },
                { value: 'Somewhat comfortable' },
                { value: 'Not comfortable' }
            ],
            required: true
        },
        {
            title: 'How often do you have family activities or quality time together?',
            type: 'RADIO',
            options: [
                { value: 'Daily' },
                { value: 'Weekly' },
                { value: 'Occasionally' },
                { value: 'Rarely' }
            ],
            required: true
        },
        {
            title: 'What are some of your children’s favorite family activities?',
            type: 'TEXT',
            required: false
        },
        {
            title: 'How often do your children interact with peers outside of school (e.g., playdates, weekend activities)?',
            type: 'RADIO',
            options: [
                { value: 'Very often' },
                { value: 'Sometimes' },
                { value: 'Rarely' },
                { value: 'Never' }
            ],
            required: true
        },
        {
            title: 'Do your children have any close friends they frequently spend time with?',
            type: 'RADIO',
            options: [
                { value: 'Yes, many' },
                { value: 'A few' },
                { value: 'Not really' },
                { value: 'I’m not sure' }
            ],
            required: true
        },
        {
            title: 'How do your children feel about their school environment (e.g., teachers, classmates, facilities)?',
            type: 'RADIO',
            options: [
                { value: 'Very positive' },
                { value: 'Somewhat positive' },
                { value: 'Neutral' },
                { value: 'Somewhat negative' },
                { value: 'Very negative' }
            ],
            required: true
        },
        {
            title: 'How often do your children receive help with their homework or school projects from you?',
            type: 'RADIO',
            options: [
                { value: 'Very often' },
                { value: 'Sometimes' },
                { value: 'Rarely' },
                { value: 'Never' }
            ],
            required: true
        },
        {
            title: 'Do you think your children are well-prepared for upcoming transitions (e.g., moving to a new grade, starting a new school)?',
            type: 'RADIO',
            options: [
                { value: 'Yes, very prepared' },
                { value: 'Somewhat prepared' },
                { value: 'Not very prepared' },
                { value: 'Not prepared at all' }
            ],
            required: true
        },
        {
            title: 'How do your children typically cope with academic stress or pressure?',
            type: 'RADIO',
            options: [
                { value: 'They manage well on their own' },
                { value: 'They seek support from parents or teachers' },
                { value: 'They struggle with stress management' },
                { value: 'Other' }
            ],
            required: true
        },
        {
            title: 'If you selected \'Other\' for the previous question, please specify.',
            type: 'TEXT',
            required: false
        },
        {
            title: 'Do your children participate in any school-related leadership roles (e.g., class president, club leader)?',
            type: 'RADIO',
            options: [
                { value: 'Yes, actively' },
                { value: 'Yes, occasionally' },
                { value: 'No' },
                { value: 'Not applicable' }
            ],
            required: true
        },
        {
            title: 'How does your child feel about their involvement in school activities?',
            type: 'RADIO',
            options: [
                { value: 'Very enthusiastic' },
                { value: 'Somewhat enthusiastic' },
                { value: 'Neutral' },
                { value: 'Not very enthusiastic' },
                { value: 'Not at all enthusiastic' }
            ],
            required: true
        },
        {
            title: 'How do your children balance their time between school, extracurricular activities, and leisure?',
            type: 'RADIO',
            options: [
                { value: 'Very well' },
                { value: 'Somewhat well' },
                { value: 'Not very well' },
                { value: 'Struggle significantly' }
            ],
            required: true
        },
        {
            title: 'What support systems are available to your children at school (e.g., counseling, academic help)?',
            type: 'TEXT',
            required: false
        },
        {
            title: 'Do your children have any concerns about their school experience that they have shared with you?',
            type: 'RADIO',
            options: [
                { value: 'Yes, several concerns' },
                { value: 'Yes, a few concerns' },
                { value: 'No concerns' },
                { value: 'Not sure' }
            ],
            required: true
        },
        {
            title: 'If you selected \'Yes\' for the previous question, please specify.',
            type: 'TEXT',
            required: false
        }
    ]
}, {
    title: 'School and Education', questions: [
        {
            title: 'How often do you ask your parents for help with your schoolwork?',
            type: 'RADIO',
            options: [
                { value: 'Very often' },
                { value: 'Sometimes' },
                { value: 'Rarely' },
                { value: 'Never' }
            ],
            required: true
        },
        {
            title: 'Do you enjoy learning new things?',
            type: 'RADIO',
            options: [
                { value: 'Yes, I love learning' },
                { value: 'Sometimes' },
                { value: 'Not really' },
                { value: 'No, I don’t like it' }
            ],
            required: true
        },
        {
            title: 'Do you think your parents are proud of your school achievements?',
            type: 'RADIO',
            options: [
                { value: 'Yes, very proud' },
                { value: 'Somewhat proud' },
                { value: 'Not sure' },
                { value: 'No, I don’t think so' }
            ],
            required: true
        },
        {
            title: 'How would you rate your relationship with your teachers?',
            type: 'RADIO',
            options: [
                { value: 'Very good' },
                { value: 'Good' },
                { value: 'Neutral' },
                { value: 'Poor' }
            ],
            required: true
        },
        {
            title: 'How often do you participate in school-related activities (e.g., clubs, sports)?',
            type: 'RADIO',
            options: [
                { value: 'Very often' },
                { value: 'Sometimes' },
                { value: 'Rarely' },
                { value: 'Never' }
            ],
            required: true
        },
        {
            title: 'Do you feel that you have a good balance between schoolwork and leisure time?',
            type: 'RADIO',
            options: [
                { value: 'Yes, I balance well' },
                { value: 'Somewhat balanced' },
                { value: 'Not very balanced' },
                { value: 'Not balanced at all' }
            ],
            required: true
        },
        {
            title: 'What subjects or areas of study do you find most interesting?',
            type: 'TEXT',
            required: false
        },
        {
            title: 'What subjects or areas of study do you find most challenging?',
            type: 'TEXT',
            required: false
        },
        {
            title: 'Do you receive extra help or tutoring for any subjects?',
            type: 'RADIO',
            options: [
                { value: 'Yes, regularly' },
                { value: 'Yes, occasionally' },
                { value: 'No, but I would like some' },
                { value: 'No, I don’t need any' }
            ],
            required: true
        },
        {
            title: 'How do you feel about the amount of homework you get?',
            type: 'RADIO',
            options: [
                { value: 'Just right' },
                { value: 'Too much' },
                { value: 'Too little' },
                { value: 'Not sure' }
            ],
            required: true
        },
        {
            title: 'How often do you have projects or assignments that require collaboration with classmates?',
            type: 'RADIO',
            options: [
                { value: 'Very often' },
                { value: 'Sometimes' },
                { value: 'Rarely' },
                { value: 'Never' }
            ],
            required: true
        },
        {
            title: 'Do you feel that you get adequate feedback from your teachers on your work?',
            type: 'RADIO',
            options: [
                { value: 'Yes, always' },
                { value: 'Yes, sometimes' },
                { value: 'No, not often' },
                { value: 'No, never' }
            ],
            required: true
        },
        {
            title: 'How would you describe your current motivation towards school and learning?',
            type: 'RADIO',
            options: [
                { value: 'Very high' },
                { value: 'High' },
                { value: 'Moderate' },
                { value: 'Low' }
            ],
            required: true
        },
        {
            title: 'Do you have any career aspirations or dreams you are working towards?',
            type: 'TEXT',
            required: false
        },
        {
            title: 'How do you usually prepare for exams or important assignments?',
            type: 'TEXT',
            required: false
        },
        {
            title: 'Do you have a study routine or strategy that works well for you?',
            type: 'TEXT',
            required: false
        },
        {
            title: 'What resources do you use to help with your schoolwork (e.g., books, internet, study groups)?',
            type: 'TEXT',
            required: false
        },
        {
            title: 'How do you feel about your school’s facilities and resources (e.g., library, sports equipment)?',
            type: 'RADIO',
            options: [
                { value: 'Very good' },
                { value: 'Good' },
                { value: 'Neutral' },
                { value: 'Poor' }
            ],
            required: true
        },
        {
            title: 'Do you participate in any school leadership or volunteer roles?',
            type: 'RADIO',
            options: [
                { value: 'Yes, actively' },
                { value: 'Yes, occasionally' },
                { value: 'No' },
                { value: 'Not applicable' }
            ],
            required: true
        },
        {
            title: 'How do you feel about the level of support you receive from your school for your academic and personal development?',
            type: 'RADIO',
            options: [
                { value: 'Very supportive' },
                { value: 'Somewhat supportive' },
                { value: 'Neutral' },
                { value: 'Not very supportive' },
                { value: 'Not supportive at all' }
            ],
            required: true
        },
        {
            title: 'Are there any additional comments or concerns you have about your school experience?',
            type: 'TEXT',
            required: false
        },
        // Part 4: School and Education (Extended)

        {
            title: 'How often do you ask your parents for help with your schoolwork?',
            type: 'RADIO',
            options: [
                { value: 'Very often' },
                { value: 'Sometimes' },
                { value: 'Rarely' },
                { value: 'Never' }
            ],
            required: true
        },
        {
            title: 'Do you enjoy learning new things?',
            type: 'RADIO',
            options: [
                { value: 'Yes, I love learning' },
                { value: 'Sometimes' },
                { value: 'Not really' },
                { value: 'No, I don’t like it' }
            ],
            required: true
        },
        {
            title: 'Do you think your parents are proud of your school achievements?',
            type: 'RADIO',
            options: [
                { value: 'Yes, very proud' },
                { value: 'Somewhat proud' },
                { value: 'Not sure' },
                { value: 'No, I don’t think so' }
            ],
            required: true
        },
        {
            title: 'How would you rate your relationship with your teachers?',
            type: 'RADIO',
            options: [
                { value: 'Very good' },
                { value: 'Good' },
                { value: 'Neutral' },
                { value: 'Poor' }
            ],
            required: true
        },
        {
            title: 'How often do you participate in school-related activities (e.g., clubs, sports)?',
            type: 'RADIO',
            options: [
                { value: 'Very often' },
                { value: 'Sometimes' },
                { value: 'Rarely' },
                { value: 'Never' }
            ],
            required: true
        },
        {
            title: 'Do you feel that you have a good balance between schoolwork and leisure time?',
            type: 'RADIO',
            options: [
                { value: 'Yes, I balance well' },
                { value: 'Somewhat balanced' },
                { value: 'Not very balanced' },
                { value: 'Not balanced at all' }
            ],
            required: true
        },
        {
            title: 'What subjects or areas of study do you find most interesting?',
            type: 'TEXT',
            required: false
        },
        {
            title: 'What subjects or areas of study do you find most challenging?',
            type: 'TEXT',
            required: false
        },
        {
            title: 'Do you receive extra help or tutoring for any subjects?',
            type: 'RADIO',
            options: [
                { value: 'Yes, regularly' },
                { value: 'Yes, occasionally' },
                { value: 'No, but I would like some' },
                { value: 'No, I don’t need any' }
            ],
            required: true
        },
        {
            title: 'How do you feel about the amount of homework you get?',
            type: 'RADIO',
            options: [
                { value: 'Just right' },
                { value: 'Too much' },
                { value: 'Too little' },
                { value: 'Not sure' }
            ],
            required: true
        },
        {
            title: 'How often do you have projects or assignments that require collaboration with classmates?',
            type: 'RADIO',
            options: [
                { value: 'Very often' },
                { value: 'Sometimes' },
                { value: 'Rarely' },
                { value: 'Never' }
            ],
            required: true
        },
        {
            title: 'Do you feel that you get adequate feedback from your teachers on your work?',
            type: 'RADIO',
            options: [
                { value: 'Yes, always' },
                { value: 'Yes, sometimes' },
                { value: 'No, not often' },
                { value: 'No, never' }
            ],
            required: true
        },
        {
            title: 'How would you describe your current motivation towards school and learning?',
            type: 'RADIO',
            options: [
                { value: 'Very high' },
                { value: 'High' },
                { value: 'Moderate' },
                { value: 'Low' }
            ],
            required: true
        },
        {
            title: 'Do you have any career aspirations or dreams you are working towards?',
            type: 'TEXT',
            required: false
        },
        {
            title: 'How do you usually prepare for exams or important assignments?',
            type: 'TEXT',
            required: false
        },
        {
            title: 'Do you have a study routine or strategy that works well for you?',
            type: 'TEXT',
            required: false
        },
        {
            title: 'What resources do you use to help with your schoolwork (e.g., books, internet, study groups)?',
            type: 'TEXT',
            required: false
        },
        {
            title: 'How do you feel about your school’s facilities and resources (e.g., library, sports equipment)?',
            type: 'RADIO',
            options: [
                { value: 'Very good' },
                { value: 'Good' },
                { value: 'Neutral' },
                { value: 'Poor' }
            ],
            required: true
        },
        {
            title: 'Do you participate in any school leadership or volunteer roles?',
            type: 'RADIO',
            options: [
                { value: 'Yes, actively' },
                { value: 'Yes, occasionally' },
                { value: 'No' },
                { value: 'Not applicable' }
            ],
            required: true
        },
        {
            title: 'How do you feel about the level of support you receive from your school for your academic and personal development?',
            type: 'RADIO',
            options: [
                { value: 'Very supportive' },
                { value: 'Somewhat supportive' },
                { value: 'Neutral' },
                { value: 'Not very supportive' },
                { value: 'Not supportive at all' }
            ],
            required: true
        },
        {
            title: 'Are there any additional comments or concerns you have about your school experience?',
            type: 'TEXT',
            required: false
        },
        {
            title: 'Do you feel that you have enough opportunities to develop your interests and talents at school?',
            type: 'RADIO',
            options: [
                { value: 'Yes, plenty of opportunities' },
                { value: 'Some opportunities' },
                { value: 'Few opportunities' },
                { value: 'No opportunities' }
            ],
            required: true
        },
        {
            title: 'How would you describe the level of academic pressure you experience at school?',
            type: 'RADIO',
            options: [
                { value: 'Very high' },
                { value: 'High' },
                { value: 'Moderate' },
                { value: 'Low' }
            ],
            required: true
        },
        {
            title: 'Do you feel that your school adequately prepares you for future academic or career goals?',
            type: 'RADIO',
            options: [
                { value: 'Yes, very well' },
                { value: 'Yes, somewhat' },
                { value: 'No, not really' },
                { value: 'No, not at all' }
            ],
            required: true
        },
        {
            title: 'How often do you feel stressed about school-related issues?',
            type: 'RADIO',
            options: [
                { value: 'Very often' },
                { value: 'Sometimes' },
                { value: 'Rarely' },
                { value: 'Never' }
            ],
            required: true
        },
        {
            title: 'What type of support do you wish you had more of at school (e.g., emotional support, academic resources)?',
            type: 'TEXT',
            required: false
        }
    ]
}, {
    title: 'Friendship and Social Life', questions: [
        {
            title: 'How many close friends do you have?',
            type: 'RADIO',
            options: [
                { value: '1–2' },
                { value: '3–5' },
                { value: 'More than 5' },
                { value: 'None' }
            ],
            required: true
        },
        {
            title: 'Do you feel comfortable making new friends?',
            type: 'RADIO',
            options: [
                { value: 'Yes, very comfortable' },
                { value: 'Sometimes' },
                { value: 'Not really' },
                { value: 'No, I find it difficult' }
            ],
            required: true
        },
        {
            title: 'What do you and your friends do together?',
            type: 'TEXT',
            required: false
        },
        {
            title: 'Do you feel that your friends understand and support you?',
            type: 'RADIO',
            options: [
                { value: 'Yes, they understand and support me' },
                { value: 'Somewhat' },
                { value: 'Not really' },
                { value: 'No, they don’t' }
            ],
            required: true
        },
        {
            title: 'How do you typically spend your free time with friends?',
            type: 'TEXT',
            required: false
        },
        {
            title: 'How often do you hang out with your friends outside of school?',
            type: 'RADIO',
            options: [
                { value: 'Very often' },
                { value: 'Sometimes' },
                { value: 'Rarely' },
                { value: 'Never' }
            ],
            required: true
        },
        {
            title: 'How do you handle conflicts or disagreements with your friends?',
            type: 'RADIO',
            options: [
                { value: 'Talk it out' },
                { value: 'Ask parents or teachers for help' },
                { value: 'Avoid the situation' },
                { value: 'Other: [ ]' }
            ],
            required: true
        },
        {
            title: 'Do you feel that your friendships have a positive impact on your life?',
            type: 'RADIO',
            options: [
                { value: 'Yes, very positive' },
                { value: 'Somewhat positive' },
                { value: 'Neutral' },
                { value: 'Not really positive' }
            ],
            required: true
        },
        {
            title: 'How often do you feel excluded or left out by your peers?',
            type: 'RADIO',
            options: [
                { value: 'Very often' },
                { value: 'Sometimes' },
                { value: 'Rarely' },
                { value: 'Never' }
            ],
            required: true
        },
        {
            title: 'Do you have friends from different cultural or ethnic backgrounds?',
            type: 'RADIO',
            options: [
                { value: 'Yes, many' },
                { value: 'Some' },
                { value: 'Not really' },
                { value: 'I’m not sure' }
            ],
            required: true
        },
        {
            title: 'How do you feel about the diversity of your friend group?',
            type: 'RADIO',
            options: [
                { value: 'I enjoy it and find it enriching' },
                { value: 'I’m okay with it' },
                { value: 'I’d prefer more similarity' },
                { value: 'I don’t think about it' }
            ],
            required: true
        },
        {
            title: 'What qualities do you value most in your friends?',
            type: 'TEXT',
            required: false
        },
        {
            title: 'How do you feel about making friends in new social settings (e.g., new school, new neighborhood)?',
            type: 'RADIO',
            options: [
                { value: 'Very confident' },
                { value: 'Somewhat confident' },
                { value: 'Not very confident' },
                { value: 'Not confident at all' }
            ],
            required: true
        },
        {
            title: 'Do you feel that you have a support system among your friends when you need help or advice?',
            type: 'RADIO',
            options: [
                { value: 'Yes, very supportive' },
                { value: 'Somewhat supportive' },
                { value: 'Not very supportive' },
                { value: 'Not supportive at all' }
            ],
            required: true
        },
        {
            title: 'How often do you engage in activities with friends that help build or strengthen your relationships?',
            type: 'RADIO',
            options: [
                { value: 'Very often' },
                { value: 'Sometimes' },
                { value: 'Rarely' },
                { value: 'Never' }
            ],
            required: true
        },
        {
            title: 'Do you feel that your friends respect your personal boundaries and privacy?',
            type: 'RADIO',
            options: [
                { value: 'Yes, always' },
                { value: 'Yes, sometimes' },
                { value: 'No, not often' },
                { value: 'No, never' }
            ],
            required: true
        },
        {
            title: 'Are there any challenges you face in maintaining your friendships?',
            type: 'TEXT',
            required: false
        },
        {
            title: 'Do you feel that your friendships help you to feel more confident and secure?',
            type: 'RADIO',
            options: [
                { value: 'Yes, very much' },
                { value: 'Somewhat' },
                { value: 'Not really' },
                { value: 'No, not at all' }
            ],
            required: true
        },
        {
            title: 'What activities or hobbies do you enjoy sharing with your friends?',
            type: 'TEXT',
            required: false
        },
        // Part 5: Friendships and Social Life (Extended)

        {
            title: 'How would you describe the influence of your friends on your behavior and decisions?',
            type: 'RADIO',
            options: [
                { value: 'Very positive' },
                { value: 'Somewhat positive' },
                { value: 'Neutral' },
                { value: 'Somewhat negative' },
                { value: 'Very negative' }
            ],
            required: true
        },
        {
            title: 'How do you feel when you are not able to spend time with your friends for an extended period?',
            type: 'RADIO',
            options: [
                { value: 'I feel fine and manage well' },
                { value: 'I miss them but cope' },
                { value: 'I feel lonely and upset' },
                { value: 'I feel anxious and stressed' }
            ],
            required: true
        },
        {
            title: 'Do you think your friendships have affected your performance in school?',
            type: 'RADIO',
            options: [
                { value: 'Yes, positively' },
                { value: 'Yes, negatively' },
                { value: 'No, not much' },
                { value: 'I’m not sure' }
            ],
            required: true
        },
        {
            title: 'How do you feel about your ability to make new friends in different environments (e.g., moving to a new school)?',
            type: 'RADIO',
            options: [
                { value: 'Very confident' },
                { value: 'Somewhat confident' },
                { value: 'Not very confident' },
                { value: 'Not confident at all' }
            ],
            required: true
        },
        {
            title: 'What role do your friends play in helping you cope with stress or challenges?',
            type: 'TEXT',
            required: false
        },
        {
            title: 'How do you feel about the amount of time you spend with your friends compared to time spent on other activities (e.g., family time, homework)?',
            type: 'RADIO',
            options: [
                { value: 'I spend the right amount of time' },
                { value: 'I spend too much time with friends' },
                { value: 'I spend too little time with friends' },
                { value: 'I’m not sure' }
            ],
            required: true
        },
        {
            title: 'How often do you feel that your friends are a source of support during difficult times?',
            type: 'RADIO',
            options: [
                { value: 'Very often' },
                { value: 'Sometimes' },
                { value: 'Rarely' },
                { value: 'Never' }
            ],
            required: true
        },
        {
            title: 'How do you feel about discussing personal problems with your friends?',
            type: 'RADIO',
            options: [
                { value: 'I feel very comfortable' },
                { value: 'I feel somewhat comfortable' },
                { value: 'I feel uncomfortable' },
                { value: 'I do not discuss personal problems with friends' }
            ],
            required: true
        },
        {
            title: 'In what ways do you feel your friends influence your hobbies and interests?',
            type: 'TEXT',
            required: false
        },
        {
            title: 'How do your friends react when you have different opinions or interests compared to them?',
            type: 'RADIO',
            options: [
                { value: 'They are very accepting' },
                { value: 'They are somewhat accepting' },
                { value: 'They are not very accepting' },
                { value: 'They are not accepting at all' }
            ],
            required: true
        },
        {
            title: 'How often do you feel pressured by your friends to act in certain ways or participate in certain activities?',
            type: 'RADIO',
            options: [
                { value: 'Very often' },
                { value: 'Sometimes' },
                { value: 'Rarely' },
                { value: 'Never' }
            ],
            required: true
        },
        {
            title: 'How do you balance maintaining friendships with other responsibilities such as school and family obligations?',
            type: 'TEXT',
            required: false
        },
        {
            title: 'What qualities do you appreciate most in a friend?',
            type: 'TEXT',
            required: false
        },
        {
            title: 'How do you feel about the level of understanding and empathy from your friends?',
            type: 'RADIO',
            options: [
                { value: 'Very high' },
                { value: 'High' },
                { value: 'Average' },
                { value: 'Low' },
                { value: 'Very low' }
            ],
            required: true
        },
        {
            title: 'How do you think your friendships will change as you grow older?',
            type: 'TEXT',
            required: false
        }
    ]
}, {
    title: 'Future Goals', questions: [
        {
            title: 'How clear are you about your future career or life goals?',
            type: 'RADIO',
            options: [
                { value: 'Very clear' },
                { value: 'Somewhat clear' },
                { value: 'Not very clear' },
                { value: 'Not clear at all' }
            ],
            required: true
        },
        {
            title: 'What steps are you currently taking to achieve your future goals?',
            type: 'TEXT',
            required: false
        },
        {
            title: 'How often do you think about your future goals and aspirations?',
            type: 'RADIO',
            options: [
                { value: 'Very often' },
                { value: 'Sometimes' },
                { value: 'Rarely' },
                { value: 'Never' }
            ],
            required: true
        },
        {
            title: 'How do you feel about the support you receive from your family regarding your future goals?',
            type: 'RADIO',
            options: [
                { value: 'Very supportive' },
                { value: 'Somewhat supportive' },
                { value: 'Neutral' },
                { value: 'Somewhat unsupportive' },
                { value: 'Very unsupportive' }
            ],
            required: true
        },
        {
            title: 'What are your biggest concerns about achieving your future goals?',
            type: 'TEXT',
            required: false
        },
        {
            title: 'Do you have a mentor or someone you look up to for guidance in achieving your future goals?',
            type: 'RADIO',
            options: [
                { value: 'Yes, definitely' },
                { value: 'Yes, somewhat' },
                { value: 'No, not really' },
                { value: 'No, not at all' }
            ],
            required: true
        },
        {
            title: 'How do you plan to overcome obstacles or challenges in reaching your future goals?',
            type: 'TEXT',
            required: false
        },
        {
            title: 'What role do your friends play in supporting your future aspirations?',
            type: 'TEXT',
            required: false
        },
        {
            title: 'How important is it for you to have a clear plan for your future goals?',
            type: 'RADIO',
            options: [
                { value: 'Very important' },
                { value: 'Somewhat important' },
                { value: 'Not very important' },
                { value: 'Not important at all' }
            ],
            required: true
        },
        {
            title: 'How do you prioritize your future goals in relation to other aspects of your life (e.g., education, hobbies, social activities)?',
            type: 'TEXT',
            required: false
        },
        {
            title: 'What are you most excited about in your future, and why?',
            type: 'TEXT',
            required: false
        },
        {
            title: 'Do you think your future goals will change as you grow older? If so, how?',
            type: 'TEXT',
            required: false
        },
        {
            title: 'How confident are you in your ability to achieve your future goals?',
            type: 'RADIO',
            options: [
                { value: 'Very confident' },
                { value: 'Somewhat confident' },
                { value: 'Not very confident' },
                { value: 'Not confident at all' }
            ],
            required: true
        },
        // Part 6: Future Goals (Extended)

        {
            title: 'How do you plan to balance pursuing your future goals with other interests and responsibilities?',
            type: 'TEXT',
            required: false
        },
        {
            title: 'What specific skills or qualifications do you believe are necessary for achieving your future goals?',
            type: 'TEXT',
            required: false
        },
        {
            title: 'How often do you discuss your future goals with your family or friends?',
            type: 'RADIO',
            options: [
                { value: 'Very often' },
                { value: 'Sometimes' },
                { value: 'Rarely' },
                { value: 'Never' }
            ],
            required: true
        },
        {
            title: 'What role does feedback from your family or teachers play in shaping your future goals?',
            type: 'TEXT',
            required: false
        },
        {
            title: 'Do you have a plan for overcoming potential setbacks or failures in your pursuit of future goals?',
            type: 'RADIO',
            options: [
                { value: 'Yes, I have a detailed plan' },
                { value: 'Yes, but it\'s not very detailed' },
                { value: 'No, I don\'t have a plan' },
                { value: 'I\'m not sure yet' }
            ],
            required: true
        },
        {
            title: 'How do you measure progress towards your future goals?',
            type: 'TEXT',
            required: false
        },
        {
            title: 'What motivates you the most to work towards your future goals?',
            type: 'TEXT',
            required: false
        },
        {
            title: 'How do you handle feelings of doubt or uncertainty about your future goals?',
            type: 'TEXT',
            required: false
        },
        {
            title: 'What resources or support systems do you rely on to help you stay focused on your future goals?',
            type: 'TEXT',
            required: false
        },
        {
            title: 'How do you stay informed about changes or trends in the areas related to your future goals?',
            type: 'TEXT',
            required: false
        },
        {
            title: 'Do you think your future goals will impact your personal relationships? If so, how?',
            type: 'TEXT',
            required: false
        },
        {
            title: 'How do you plan to adapt your future goals if your interests or circumstances change?',
            type: 'TEXT',
            required: false
        },
        {
            title: 'What advice would you give to someone who is struggling to set or achieve their future goals?',
            type: 'TEXT',
            required: false
        }
    ]
}];