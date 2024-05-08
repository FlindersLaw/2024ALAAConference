// Dictionary. Contains the information about each session.
// Main key is 'id' plus the session ID (eg: '!A', '3B' etc)
// Structure is this:
// id1A : {
//     title
//     presenters
//     abstractURL
//     learnURL
// }

// We assume we only have three parallel streams.
// Note: the table that displays the program also assumes this, so 
// if we increase or decrease the number of streams here we'll need to 
// alter the width of the table cells
export const sessionStreams = ['A', 'B', 'C'];
// A default entry in sessionData which is displayed if we have no session info for a supplied key
export const emptyKey = 'idNoSession';

export const sessionData = {
    idNoSession : {
        title: 'No session programmed',
        presenters: '',
        abstractURL: '',
        learnURL: '',
    },
    id1_A1 : {
        title: 'Automating Empirical Legal Research: the Case of British and Australian Judgments',
        presenters: 'Ben Chen',
        abstractURL: '/docs/abstracts/1a',
        learnURL: 'TBC1'
    },
    id1_A2 : {
        title: 'Enhancing Negotiation Skills in Legal Education: Harnessing Artificial Intelligence through a Chat Bot Approach',
        presenters: 'Dr Tammy Johnson',
        abstractURL: '/docs/abstracts/2a',
        learnURL: 'TBC2'
    },
    id1_A3 : {
        title: 'Building GenAI into Law Assessments: How do students use genAI when given the chance?',
        presenters: 'Samantha Kontra, Senior Lecturer, Flinders University',
        abstractURL: 'tbc',
        learnURL: 'TBC3'
    },
    id1_A4 : {
        title: 'Magic Defeat Magic? - An examination about AI plagiarism and the impact on legal education and research',
        presenters: 'Qinqing Xu, Lecturer (Assistant Professor), University of Manchester, UK',
        abstractURL: 'tbc',
        learnURL: 'TBC3'
    },
    id1_B1 : {
        title: 'One Legal Future Post-Referendum: South Australia’s First Nations Voice',
        presenters: 'Dr Anna Olijnyk, Cornelia Koch, Madeleine Perrett',
        abstractURL: '/docs/abstracts/1b',
        learnURL: 'TBC2'
    },
    id1_B2 : {
        title: 'Ngara: Embedding truth-telling about the legal system in the Sydney Law School curriculum',
        presenters: 'Dr Fady Aoun, Associate Professor, Elisa Arcioni, Dr Louise Boon-Kuo, Louisa Di Bartolomeo, University of Sydney',
        learnURL: 'TBC2'
    },
    id1_B3 : {
        title: "Embedding First Nations perspectives into the law curriculum, 'what do you do when it's all left up to you?'",
        presenters: "Dr Katie O'Bryan, Monash University",
        learnURL: 'TBC3'
    },
    id1_B4 : {
        title: "'Zero tolerance to racism' - building law teachers' anti-racism capacities",
        presenters: "Jennifer Nielsen",
        learnURL: 'TBC3'
    },
    id1_C1 : {
        title: "Developing Effective Law to Ban Planned Obsolescence in Goods?",
        presenters: "Dr Trish O'Sullivan, Senior Lecturer, Massey University, New Zealand",
        learnURL: 'TBC3'
    },
    id1_C2 : {
        title: "Environmental Law and Earth's Futures: Discussing the role of legal scholarship and education in addressing environmental challenges by promoting precautionary risk management in environmental law pedagogy.",
        presenters: "Rhett Martin",
        learnURL: 'TBC3'
    },
    id1_C3 : {
        title: "Sustainable Green Economy in the Era of Climate Change between Challenges and Hopes from Legal Perspective",
        presenters: "Ahmad Sabirin, Universitas Islam Internatsional, Indonesia",
        learnURL: 'TBC3'
    },
    id1_C4 : {
        title: 'International Enforcement of Environmental Laws via Private Law Applications: "Greenwashing downunder"',
        presenters: "Michael Adams",
        learnURL: 'TBC3'
    },
    id2_A1 : {
        title: "AI + Legal Education: a new 'Diamond Age' or a threat to rights and values?",
        presenters: "Rob Chalmers, Senior Lecturer, Flinders University",
        learnURL: 'TBC3'
    },
    id2_A2 : {
        title: "The use of AI in Legal Education: Superhero or Villain?",
        presenters: "Linda Telai, Victoria University",
        learnURL: 'TBC3'
    },
    id2_A3 : {
        title: "\"I don't know why I'm doing this\": Teaching tech skills to law students",
        presenters: "Mark Ferraretto, Senior Lecturer, Professor Tania Leiman, Dean of Law, Dr James Scheibner, Lecturer, Flinders University",
        learnURL: 'TBC3'
    },
    id2_A4 : {
        title: "Dissecting Factors Hindering the Establishment and Multiplicity of Digital Business Models of Law Practice in Kenya",
        presenters: "Consolata Maitha, Tutorial Fellow, Mount Kenya University",
        learnURL: 'TBC3'
    },
    id2_B1 : {
        title: "The Honest Politician's Guide to Crime Control, updated",
        presenters: "Rick Sarre, University of South Australia",
        learnURL: 'TBC3'
    },
    id2_B2 : {
        title: "An Interdisciplinary Approach to Understanding Assaults on Police: Enriching Criminal Laws and Sentencing Policy",
        presenters: "Kelley Burton, Kelly Hine, Catherine Creamer, Dimitra Lattas",
        learnURL: 'TBC3'
    },
    id2_B3 : {
        title: "Bringing sexual offence law back into the classroom:  an argument for a trauma-informed curriculum to better equip law graduates for practice",
        presenters: "Emma Henderson, Kirsty Duncanson, La Trobe University",
        learnURL: 'TBC3'
    },
    id2_B4 : {
        title: "Trauma-Informed Practice and the Criminal Trial: A Conceptual Framework for the 'Trauma-Informed Trial'",
        presenters: "Sarah Kendall",
        learnURL: 'TBC3'
    },
    id2_C1 : {
        title: "Indigenous law in climate-change litigation - reclamation of the law as a tool for indigenous legal assertions",
        presenters: "Dr Adrienne Paul, University of Canterbury, Metiria Stanton Turei, University of Otago",
        learnURL: 'TBC3'
    },
    id2_C2 : {
        title: "Developments, Opportunities, and Complexities in Global South Scholarship on Climate Litigation: Literature review of scholarship by authors based in or identifying from the Global South",
        presenters: "Jemima Roe",
        learnURL: 'TBC3'
    },
    id2_C3 : {
        title: "Bridging the Gap: Integrating Engineering, Law, and Indigenous Self-Determination in Infrastructure Development",
        presenters: "Rachel Evans, Lecturer, University of Cantebury",
        learnURL: 'TBC3'
    },
    id2_C4 : {
        title: "Interdisciplinary Relations of Law and Ethnology on the Issue of Indigenous Ethnic Group Recognition: A Case Study of the Taiwan Constitutional Court’s Judgment No 17 of 2022",
        presenters: "Chou Yu-Jie, Dr Chou Shih-Huang",
        learnURL: 'TBC3'
    },
    id3_A1 : {
        title: "Technology and Law: Evolving Paradigms affecting the Legal Research Process?",
        presenters: "Terry Hutchinson",
        learnURL: ''
    },
    id3_A2 : {
        title: "Navigating the Fourth Industrial Legal Revolution: Payoffs and Pitfalls for AI-informed Lawyers, Justice and Ethics",
        presenters: "Professor Simon Bronitt, Dean of Sydney Law School, University of Sydney",
        learnURL: ''
    },
    id3_B1 : {
        title: "Gen Z Lawyers: Cultural and generational shifts in legal education, work and professional identity?",
        presenters: "Professor Tania Leiman, Dean of Law, Flinders University",
        learnURL: ''
    },
    id3_C1 : {
        title: "PANEL: Civics Educators? Reflections on the Referendum on the Role and Limits of Legal Academics in Public Education",
        presenters: "Joe McIntyre, Melissa Castan, Catherine Renshaw, Cornelia Koch, Eddy Synott",
        learnURL: ''
    },
    id3_C2 : {
        title: "PANEL (continued)",
        presenters: "",
        learnURL: ''
    },
    id4_A1 : {
        title: "A Conversational AI: A Case Study on AI-Assisted Learning in a Criminal Law Subject",
        presenters: "Armin Alimardani, University of Woolongong, Emma Jane, University of NSW",
        learnURL: '',
    },
    id4_A2 : {
        title: "The Future Life of a Professional Law Academic in Australia: What to Think About Now",
        presenters: "Dr Louise Parsons, Bond University",
        learnURL: 'TBC3'
    },
    id4_B1 : {
        title: "Teaching legal ideas to the national security community",
        presenters: "Danielle Ireland-Piper",
        learnURL: '',
    },
    id4_C1 : {
        title: "Beyond Borders: Challenges in the Transnational Teaching of Introductory Law Units to Non-Law Students",
        presenters: "Dr Kenny Yang, University of Western Australia, Lance DuBos, Lecturer, James Cook University, Matthias Cheong, Adjunct Lecturer, James Cook University",
        learnURL: '',
    },

    id5_A1 : {
        title: "A Voyage Around John Merryman and the Development of Modern Legal Education - ‘Through legal education the legal culture is transferred from generation to generation’",
        presenters: "Emeritus Professor David Barker AM, University of Technology Sydney",
        learnURL: 'TBC3'
    },
    id5_A2 : {
        title: "PANEL: Becoming a Climate Conscious Lawyer - a grass roots approach to changing legal education",
        presenters: "Julia Dehm, Kate Galloway, Nicole Graham, Margaret Davies",
        learnURL: 'TBC3'
    },
    id5_A3 : {
        title: "PANEL: (continued)",
        presenters: "",
        learnURL: ''
    },
    id5_B1 : {
        title: "Law Schools as Agents of Change",
        presenters: "Indrani Bandyopadhyay, Australian Catholic University",
        learnURL: 'TBC3'
    },
    id5_B2 : {
        title: "Australian Law Schools, Collaborative Practice and the Future of Lawyering",
        presenters: "Charissa Tarzia, Lecturer, Flinders University",
        learnURL: 'TBC3'
    },
    id5_B3 : {
        title: "The Scholarship of Family Law: Essential learning for compassionate and socially aware lawyers",
        presenters: "Dr Michelle Fernando, Senior Lecturer, University of South Australia",
        learnURL: 'TBC3'
    },
    id4_B2 : {
        title: "So What’s Next? Enhancing the Employability of Law Students",
        presenters: "Professor Noeleen McNamara, Associate Professor Kerstin Braun, University of Southern Queensland",
        learnURL: 'TBC3'
    },
    id5_C1 : {
        title: "Exploring the (regulatory) space",
        presenters: "Peta Spender, Australian National University",
        learnURL: 'TBC3'
    },
    id5_C2 : {
        title: "Globalization and private law: Impact of globalization on the development of private law through the example of mass transactions",
        presenters: "Kseniia Tatarkina, Research Assistant, Helmut Schmidt University",
        learnURL: 'TBC3'
    },
    id5_C3 : {
        title: "Navigating the Nexus: Colonisation, Globalisation, and the Teaching of International Investment Law",
        presenters: "Dr Umair Ghori, Associate Professor, Bond University",
        learnURL: 'TBC3'
    },
    id4_C2 : {
        title: "Integrating Emerging Technology and Property Law Doctrine in Undergraduate and Postgraduate Property and Trusts Law Teaching",
        presenters: "Brendan Grigg, Senior Lecturer, Flinders University",
        learnURL: ''
    },
    id6_A1 : {
        title: "PANEL: Generative AI and the Courts",
        presenters: "Joe McIntyre, Constance Lee, Lisa Parker, University of South Australia, Anne Carter, University of Adelaide",
        learnURL: ''
    },
    id6_A2 : {
        title: "PANEL (continued)",
        presenters: "",
        learnURL: ''
    },
    id4_A3 : {
        title: "LEAD’s Peer Review of Teaching Program Pilot",
        presenters: "Judith Marychurch",
        learnURL: ''
    },
    id6_B1 : {
        title: "Can Australian Legal Education Meet the Challenge of Cross-Cultural Competence Training? Insights from Overseas Law Schools' Experience",
        presenters: "Dr Richard Wu, Dr Angus Young, University of Hong Kong, Dr Grace Li, University of Technology Sydney",
        learnURL: ''
    },
    id6_B2 : {
        title: "Reimagining International Student Engagement in a Globalised World",
        presenters: "Brenda Tronson, Senior Lecturer, Chantal Bostock, Senior Lecturer, Casey-Lee Hirst, Lecturer, Nicola Kozlina, Lecturer, University of NSW",
        learnURL: ''
    },
    id4_B3 : {
        title: "Improving the Student Experience of Class Participation: A Study of Enablers and Inhibitors",
        presenters: "Dr Bostock, Dr Rowe, Dr Gooi, Professor Vines, University of NSW",
        learnURL: ''
    },
    id6_C1 : {
        title: "Encouraging interdisciplinary and intercultural collaboration and exploring how insights from other disciplines and diverse cultures can enrich legal scholarship and education",
        presenters: "Dr Catherine Ordway, University of Canberra",
        learnURL: ''
    },
    id6_C2 : {
        title: "Oral history and discourse analysis as tools for empirical legal and linguistic research",
        presenters: "Professor Kim Rubenstein, Dr Anne Isaac, University of Canberra",
        learnURL: ''
    },
    id4_C3 : {
        title: "Gender imbalance and career opportunities for women in the aviation sector: Aviation Law and Bachelor of Aviation students",
        presenters: "Charles Giacco, Lecturer, University of South Australia, Dr Matt Harvey, Senior Lecturer, Victoria University",
        learnURL: ''
    },
    idX_XX : {
        title: "",
        presenters: "",
        learnURL: ''
    },
}