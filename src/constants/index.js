import {
    industry,
    banking,
    logistics,
    retail,
    government,
    utilities,
    telco,
    xiva,
    b3,
    dfd,
    digitaleye,
    alfalahDigitalBranch,
    cement,
    ChequeClearing,
    fbrInvoice,
    iverify,
    railways,
    shootingRange,
    speechbotApp,
    research1,
    research2,
    research3,
    research4,
    research5,
    dummy,
    ashar,
    ashan,
    aiSummit22,
    aiSummit23,
    bankAlfalah,
    comsats,
    eocean,
    bankingSummit21,
    bankingSummit23,
    mobileCommerce23,
    nift,
    nust,
    pasha,
    testTrace,
    tourismFest,
    nationalAssembly,
    facebook,
    instagram,
    youtube,
    twitter,
    eocean1,
    kElectricLogo,
    kwsbLogo,
    jazzCashLogo,
    alfalahLogo,
    fbrLogo,
    shootingRangesPDF,
    speechbotPDF,
    railwayPDF,
    POSSystemPDF,
    manufacturingPDF,
    digitalLifestyleBranchPDF,
    digitalBankingPDF,
    chequeClearingPDF,
    b3Screen,
    dfdScreen,
    digitalEyeScreen,
    xivaScreen,
    b3PDF,
    dfdPDF,
    digitaleyePDF,
    odinPDF,
    xivaPDF,
} from "../assets/index"

export const navLinks = [
    {
        link: "/#AIApplications",
        title: "ISSM AI Applications",
        subLinks: []
    },
    {
        link: "/#ProductApplications",
        title: "Products",
        subLinks: []
    },
    {
        link: "",
        title: "Industries",
        subLinks: [
            [
                "Manufacturing Industry",
                industry,
                0
            ],
            [
                "Logistics Industry",
                logistics,
                1
            ],
            [
                "Utilities Companies",
                utilities,
                2
            ],
            [
                "Banking and Financial Institutions",
                banking,
                3
            ],
            [
                "Government",
                government,
                4
            ],
            [
                "Retail",
                retail,
                5
            ],
            [
                "Teleco",
                telco,
                6
            ],
        ]
    },
    {
        link: "/#Research",
        title: "Research Papers",
        subLinks: []
    },
    {
        link: "/#NewsBlogs",
        title: "News & Blogs",
        subLinks: []
    },
    {
        link: "/team",
        title: "Team",
        subLinks: []
    },
]

//to be completed
export const IndustriesDetailed = [
    {
        title: "Automation Solution for Utilities Companies",
        img: utilities,
        subTitle: "Empowering Utility Companies with Cutting-Edge OCR Meter Reading and Automation",
        desc: [
            "In this digital age, field workers are becoming essential stakeholders in the utility sector. The OCR meter reading software equips them with a user-friendly platform to receive work orders, track scanned meters, and maintain a meticulous record of meter readings. This transformation streamlines their work processes, making them more efficient and productive.",
            "Power of Digitizing: ",
            "One of the standout features of this software is automated meter reading. By leveraging OCR technology, the software can automatically extract meter readings from images or scanned documents. This groundbreaking automation reduces the reliance on manual data entry, saving valuable time and significantly reducing the risk of human errors.",
            "Perhaps one of the most significant advantages is the software's ability to store and manage vast volumes of meter data. Utility companies can harness this treasure trove of information to gain insights into consumption patterns. This data-driven approach facilitates better load management and empowers utility providers to forecast demand accurately.",
        ],
        issues: [
            "Redefine the way customers interact",
            "Provides instant assistance",
            "Provide real-time responses",
            "Tailored to individual customer preferences",
        ],
        news: [
            // {
            //     img: kElectricLogo,
            //     title: "ISSM Revolutionizing Cement Manufacturing Industry"
            // }
        ],
        deployments: [
            {
                img: kElectricLogo,
                brief: "ISSM working with K-Electric to automate their processes. ",
                desc: "A leap towards automating processes with data induced analytics."
            }
        ],
        bulletpoints: [

        ],
        desc2: [

        ]

    },
    {
        title: "Digital Eye for Manufacturing Industry",
        img: utilities,
        subTitle: "Unlocking Manufacturing Excellence with ISSM's Innovative Technology Suite",
        desc: [
            "ISSM Labelling Solutions has embarked on a transformative journey within the manufacturing industry, starting with a pioneering collaboration in the cement manufacturing sector. By partnering with Bestway Cement and the Federal Board of Revenue (FBR) Pakistan, ISSM has introduced state-of-the-art computer vision technology to optimize production lines, monitor manufacturing processes, and enhance taxation and invoicing accuracy.",
            "Through the deployment of cutting-edge cameras and digital eye technology, ISSM's solutions capture real-time data on production quantities, quality control, and distribution logistics on the cement production conveyor belt. This technology not only optimizes production operations but also enables FBR Pakistan to ensure taxation compliance and eliminate financial fraud in tax filings.",
        ],
        issues: [
            "Improved production efficiency",
            "Improved tax compliance",
            "Improved quality control",
            "Captures real-time distribution logistics",
            "Reduced product and financial fraud",

        ],
        news: [
            {
                img: kElectricLogo,
                title: "ISSM Revolutionizing Cement Manufacturing Industry"
            }
        ],
        deployments: [
        ],
        bulletpoints: [

        ],
        desc2: [

        ]

    },
    {
        title: "Tax Compliance Management for Retail Industry",
        img: utilities,
        subTitle: "Revolutionalising Retail Industry: Improving financial transparency and tax compliance",
        desc: [
            "ISSM and FBR Pakistan are working together to usher in a new era of digital transformation for the retail industry. With a focus on enhancing transparency and tax compliance, this partnership integrates state-of-the-art Point of Sale (POS) systems with FBR's extensive database.  This transformative partnership seeks to enhance financial transparency, improve tax compliance, and drive innovation in the retail sector."
        ],
        issues: [
            "Integrated system with FBR",
            "Automatic Invoice Data Gathering",
            "Inventory Management",
            "Procurement Management",
            "Complete Financial Management"
        ],
        news: [
            // {
            //     img: kElectricLogo,
            //     title: "agsfdahsgd akdagdfak dasgdaksdsad aksdfagd agsfdahsgd akdagdfak dasgdaksdsad aksdfagd"
            // }
        ],
        deployments: [
            {
                img: fbrLogo,
                brief: "ISSM is working with Federal Board of Revenue (FBR Pakistan) to initiate digital POS systems for all class A stores with an FBR integrated system to move towards a more transparent process.",
                desc: "Working towards improving data collection with an end-end integrated system for Class A stores across Pakistan."
            }
        ],
        bulletpoints: [
            "Enhanced Financial Transparency: Retailers now have access to advanced POS systems that enable accurate and transparent financial transactions, ensuring that businesses maintain a high level of financial transparency.",
            "Improved Tax Compliance: By seamlessly integrating POS systems with FBR's database, retailers can automatically report sales, reducing the risk of tax evasion and ensuring tax compliance.",
            "Efficient Inventory Management: The use of POS systems for tracking inventory enhances inventory management, minimizing holding costs and ensuring products are always available when customers need them.",
            "Streamlined Invoicing: Electronic invoice verification simplifies the invoicing process, reducing errors, and ensuring accurate financial records",
        ],
        desc2: "The collaboration between ISSM and FBR Pakistan represents a significant milestone in the retail industry's journey towards digital transformation. By integrating advanced POS systems and transparent tax policies, this partnership aims to enhance financial transparency, promote tax compliance, and drive innovation in the retail sector."


    },
    {
        title: "",
        img: utilities,
        subTitle: "",
        desc: [
            ""
        ],
        issues: [
            ""
        ],
        news: [
            // {
            //     img: kElectricLogo,
            //     title: ""
            // }
        ],
        deployments: [
            {
                img: kElectricLogo,
                brief: "",
                desc: ""
            }
        ],
        bulletpoints: [

        ],
        desc2: [

        ]

    },
    {
        title: "",
        img: utilities,
        subTitle: "",
        desc: [
            ""
        ],
        issues: [
            ""
        ],
        news: [
            // {
            //     img: kElectricLogo,
            //     title: ""
            // }
        ],
        deployments: [
            {
                img: kElectricLogo,
                brief: "",
                desc: ""
            }
        ],
        bulletpoints: [

        ],
        desc2: [

        ]

    },
    {
        title: "",
        img: utilities,
        subTitle: "",
        desc: [
            ""
        ],
        issues: [
            ""
        ],
        news: [
            // {
            //     img: kElectricLogo,
            //     title: ""
            // }
        ],
        deployments: [
            {
                img: kElectricLogo,
                brief: "",
                desc: ""
            }
        ],
        bulletpoints: [

        ],
        desc2: [

        ]

    },
]

export const applicationsData = [
    {
        id: 0,
        img: xiva,
        title: "Xiva",
    },
    {
        id: 1,
        img: dfd,
        title: "DFD",
        desc: ""
    },
    {
        id: 2,
        img: b3,
        title: "B3.ai",
        desc: ""
    },
    {
        id: 3,
        img: digitaleye,
        title: "Digital Eye",
        desc: ""
    }
]
//to be completed
export const applicationsDetailed = [
    {

        img: xivaScreen,
        doc: xivaPDF,
        thumbnail: xiva,
        title: "Xiva",
        desc: [
            {
                heading: "",
                body: "Currently, most conversational AI bots are broken, they provide a ‘one-fit for all’ machine learning models that usually end up having low accuracy and usually miss out on conversational semantics which are unique to each organization. The purpose of Xiva was to address this fundamental problem, Xiva’s conversational AI is built to be customized according to the requirements of each organization by updating our pre-trained ML models in accordance with conversational data from the past and the present.",

            },
            {
                heading: "",
                body: "XIVA lays the foundation for your organization to eventually automate all of its communication by learning in real-time from your human agents and replicating their responses. We like to think of XIVA, not as a chatbot, but simply as a bot. Which can scrape through your databases to fetch files, crawl through websites to generate answers it currently doesn't hold in its dialogue flow, it can do transactions or authentication of customers all by itself. Xiva’s sole purpose is to perform every function that a human agent does and improve it over time. Unlike other chatbot platforms, we offer a Bot-Builder Dashboard where our clients can build their own chatbot and dialogue flows according to themselves which the system later re-learns and improves on its own.",

            },

        ],
        cards: [
            {
                title: "BOT BUILDER",
                desc: [
                    "Easy to build Conversational AI with:",
                    "1. Zero bot detection rate",
                    "2. Highest precision",
                    "3. Multi-lingual",
                ]
            },
            {
                title: "OMNI CHANNEL",
                desc: [
                    "Integration and deployment of Conversational AI with social media and other channels Supervised learning .",
                ]
            },
            {
                title: "UNSUPERVISED LEARNING",
                desc: [
                    "Understanding the business semantics of each organisation and updating language models accordingly."
                ]
            }
        ]
    }
]

export const productApplicationsData = [
    {
        id: 0,
        img: alfalahDigitalBranch,
        title: "Pakistan’s first Digital Lifestyle Experience Branch",
        desc: "ISSM partnered with Bank Alfalah to open Pakistan’s first Digital Lifestyle Experience Branch in Karachi.",
        pdf: digitalLifestyleBranchPDF
    },
    {
        id: 1,
        img: cement,
        title: "Using AI to monitor production in the manufacturing Industry. ",
        desc: "ISSM collaborating with Pakistan’s cement companies to revolutionize their Track and Trace systems via our Computer Vision systems. ",
        pdf: manufacturingPDF
    },
    {
        id: 2,
        img: ChequeClearing,
        title: "ISSM working towards a Digital Future in the Banking Industry ",
        desc: "ISSM is working towards revolutionizing Cheque Clearing process and making it autonomous using our automation systems.",
        pdf: chequeClearingPDF
    },
    {
        id: 3,
        img: fbrInvoice,
        title: "ISSM and FBR Pakistan Partner to Revolutionize Retail Industry through Digital Transformation",
        desc: "ISSM collaborating with the FBR Pakistan with an aim to digitize and transform the retail industry",
        pdf: POSSystemPDF
    },
    {
        id: 4,
        img: iverify,
        title: "ISSM providing tech solutions to help move the unbanked population towards banking industry",
        desc: "Pakistan’s Fintech Industry partnering with ISSM to automate and enable remote account opening.",
        pdf: digitalBankingPDF
    },
    {
        id: 5,
        img: railways,
        title: "Enhancing Railway Safety and Efficiency with Machine Learning and Computer Vision at Ministry of Railways",
        desc: "ISSM is working towards using technology to improve maintenance process of railway tracks across Pakistan ",
        pdf: railwayPDF
    },
    {
        id: 6,
        img: shootingRange,
        title: "Revolutionizing Precision Shooting with Computer Vision Technology",
        desc: "ISSM is working towards automating shooting range  and to redefine the precision shooting experience",
        pdf: shootingRangesPDF
    },
    {
        id: 7,
        img: speechbotApp,
        title: "Pakistan’s first Speech Driven Banking App",
        desc: "ISSM partners with largest banks in Pakistan to launch speech driven apps",
        pdf: speechbotPDF
    },
]

export const researchData = [
    {
        id: '01',
        img: research1,
        title: 'ATTENTION NEURAL NETWORK',
        desc: 'Rivers and canals flowing through cities are often used illegally for dumping trash....',
        category: 'Computer Vision and Graphics Lab',
        skill: 'CV Department',
        link: 'https://arxiv.org/pdf/2007.04639.pdf',

    },
    {
        id: '02',
        img: research2,
        title: 'Scheduling on Heterogeneous Multi-core Processors Using Stable Matching Algorithm',
        desc: 'HMP is becoming mainstream because it has potential to reduce the power consumption and improve the performance than homogeneous core processors',
        skill: 'Department of Computer Science',
        link: 'https://www.researchgate.net/profile/Muhammad-Rehman-Zafar/publication/304808274_Scheduling_on_Heterogeneous_Multi-core_Processors_Using_Stable_Matching_Algorithm/links/586407bc08ae8fce490b7144/Scheduling-on-Heterogeneous-Multi-core-Processors-Using-Stable-Matching-Algorithm.pdf',



    },
    {
        id: '03',
        img: research3,
        title: 'Transient Multipath routing protocol for low power and lossy networks',
        desc: 'RPL routing protocol for low-power and lossy networks is an Internet Engineering Task Force',
        skill: 'Department of Computer Science',
        link: 'https://koreascience.kr/article/JAKO201718054544060.pdf',


    },
    {
        id: '04',
        img: research4,
        title: 'Semantic Integration of Heterogeneous Databases of Same Domain Using Ontology',
        desc: 'Heterogeneous database integration is the study of integrating data from multiple databases',
        link: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9072157',


    },
    {
        id: '05',
        img: research5,
        title: 'Using Semantic Web to Enhance User Understandability for Online Shopping License Agreement',
        desc: 'Normally, a common user sign license agreement without understanding the agreement.',
        category: 'Vienna University of Technology',
        skill: 'Department of Technology',
        link: 'https://link.springer.com/content/pdf/10.1007/978-3-642-36818-9_24.pdf',
    },

]

export const teamData = [
    {
        id: 0,
        img: dummy,
        name: "Ahsan Mashkoor",
        title: "Co-Founder / Chairman",
        brief: "Previously founder and CEO of Csquare, which currently serves 80% of the Banking Industry in Pakistan for Customer Experience Software and export services to the Middle East. Previously worked in Genesys and Terradata.",
        desc: [
            "Ahsan has a graduate degree from Queens Mary University, London and foundation education from Karachi Grammar School.",
            "He started his career from Teradata, London as Marketing Manager. However, his heart was in Pakistan and how he can contribute in his country of birth. He accepted the position of account manager at Teradata, Pakistan and also completed his post graduate Business Administration degree from IBA, Karachi.",
            "At Teradata Pakistan, he was nominated as the Sales find of the year and earned membership to Convention Points Club. He then continued his professional journey with Genesys Telecommunications as Country Manager and was responsible for business development in Pakistan, Afghanistan, Bangladesh and other emerging markets in the region.",
            "To reinforce his existing credentials and competence, he applied and was selected for the most prestigious program; “National Security Workshop” by National Defense University. He was amongst the 8 civilians that were selected for the program along with other course mates which included two- star military generals, politicians and senior bureaucrats. At NDU Ahsan learnt; understanding and promoting purposeful dialogue, studied contemporary security challenges and was groomed to be a part of informed strategic leadership. All in all, NDU instilled values of national integration for a more secure and prosperous Pakistan.",
            "As a part of his contribution to Pakistan, Ahsan founded SEED Pakistan an NGO solely focused on educating children in Karachi. At present SEED operates 12 schools in Karachi and educates 3000 children annually.",
            "Ahsan is also CEO and Co-Founder of C Square, a leading technology company that is headquartered in Pakistan with offices in UAE and Bahrain. C Square has worked with global brands, i.e. Emirates Airline, British Telecom, Arab Bank of Jordan, Byblos Bank, Saudi Telecom, Korek Telecom (Iraq) and many more in West Africa. C Square proudly exports talented, skilled IT professionals from Pakistan on international projects in GCC, Africa and Europe competing with India and Bangladesh. C Square has gained international recognition and has won numerous awards like Arabia 500 Fast Growth Company and Pakistan100 Fast Growth Company.",
            "Most recently Ahsan was selected at Chairman, FPCCI Committee of Science, Technology; Education which is a proof of his contribution for Pakistan.",
        ],
        accomplishments: [
            "Ahsan was nominated as the Sales Find of the Year at Teradata Pakistan.",
            "Ahsan studied purposeful dialogue, and contemporary security challenges, and was groomed for informed strategic leadership at NDU.",
            "Ahsan was selected for the prestigious 'National Security Workshop' program by National Defense University, one of eight civilians chosen for the program.",
            "Ahsan founded SEED Pakistan, an NGO focused on educating children in Karachi, which currently operates 12 schools and educates 3,000 children annually.",
            "Ahsan was selected as Chairman of the FPCCI Committee of Science, Technology, and Education, demonstrating his contribution to Pakistan.",
            "Ahsan was appointed as Chairman Culture Advisory Board of Pakistan",

        ]
    },
    {
        id: 1,
        img: dummy,
        name: "Abu Abdullah Ashar",
        title: "Co-Founder / Chief Executive Officer / Chief Product Officer",
        brief: "Previously Chief Product Officer and Chief Strategy Officer at Synfox Technologies, Member FPCCI on Science and Technology, Member Parliamentary Committee on Digital Security. ",
        desc: [
            "Test & Trace work",
            "Parliamentary committee work",
            "PM office work (National Security Council)",
            "FPCCI work  (Committee on Science and Technology)",
            "DFD videos and achievements",
            "AI summit videos",
            "Interviews on trace and track ",

        ],
        accomplishments: [
            "Ashar has been involved in various National Policy Formation Boards and Policy input committees within the Federal Government in Pakistan. ",
            "Ashar was at the time the youngest Member of ‘National Security Council Committee on Emerging Technologies’ in the Prime Minister Office with Moeed Office. ",
            "Ashar was also the youngest ‘Member of Digital Security’  Committee in the National Assembly.",
            "He has led many initiatives of collaboration on R&D with local universities.",
            "One of Ashar’s side ventures includes Pakistan’s only Advanced ‘Printed Circuit Board’ (PCB) plant focused on provisioning core hardware for military institutes and Space Institutes in Pakistan.",
            "He is regularly invited to give training on AI and its Applications to senior military leadership in Pakistan. ",

        ]
    }
]

export const asharEvents = [
    {
        id: 1,
        img: nust,
        title: "AI Training for National Security at PNEC NUST. ",
    },
    {
        id: 3,
        img: nationalAssembly,
        title: "National Assembly’s Session on AI Utility Control",
    },
    {
        id: 7,
        img: bankingSummit21,
        title: "19th Future Banking Conference 2021",
    },
    {
        id: 8,
        img: aiSummit23,
        title: "Artificial Intelligence Summit 2023",
    },
    {
        id: 9,
        img: aiSummit22,
        title: "Artificial Intelligence Summit 2022",
    },
    {
        id: 13,
        img: tourismFest,
        title: "Sublo / ISSM Promoting tourism in Pakistan in the Islamabad Tourism Festival 2021",
    },
]

export const ahsanEvents = [
    {
        id: 3,
        img: nationalAssembly,
        title: "National Assembly’s Session on AI Utility Control",
    },
    {
        id: 5,
        img: eocean,
        title: "MOU Signing Ceremony between e.ocean and ISSM.AI",
    },
    {
        id: 6,
        img: bankingSummit23,
        title: " 21st Future Banking Summit 2023",
    },
    {
        id: 9,
        img: aiSummit22,
        title: "Artificial Intelligence Summit 2022",
    },
    {
        id: 11,
        img: mobileCommerce23,
        title: "Mobile Conference 2023",
    },
]

export const news_blogsData = [
    {
        id: 0,
        img: bankAlfalah,
        title: "Pakistan’s First Digital Branch",
    },
    {
        id: 1,
        img: nust,
        title: "AI Training for National Security at PNEC NUST. ",
    },
    {
        id: 2,
        img: nift,
        title: "NIFT and ISSM join hands to bring in revolutionary AI chatbot",
    },
    {
        id: 3,
        img: nationalAssembly,
        title: "National Assembly’s Session on AI Utility Control",
    },
    {
        id: 4,
        img: pasha,
        title: "ISSM awarded position by ICT P@SHA 2022 for their AI drivern Chatbot XIva ",
    },
    {
        id: 5,
        img: eocean,
        title: "MOU Signing Ceremony between e.ocean and ISSM.AI",
    },
    {
        id: 6,
        img: bankingSummit23,
        title: " 21st Future Banking Summit 2023",
    },
    {
        id: 7,
        img: bankingSummit21,
        title: "19th Future Banking Conference 2021",
    },
    {
        id: 8,
        img: aiSummit23,
        title: "Artificial Intelligence Summit 2023",
    },
    {
        id: 9,
        img: aiSummit22,
        title: "Artificial Intelligence Summit 2022",
    },
    {
        id: 10,
        img: nationalAssembly,
        title: "Kashmir Committee - NA of Pakistan",
    },
    {
        id: 11,
        img: mobileCommerce23,
        title: "Mobile Conference 2023",
    },
    {
        id: 12,
        img: comsats,
        title: " Project & Career Expo Comsats University",
    },
    {
        id: 13,
        img: tourismFest,
        title: "Sublo / ISSM Promoting tourism in Pakistan in the Islamabad Tourism Festival 2021",
    },
    {
        id: 14,
        img: testTrace,
        title: "Implementation of Track&Trace system into the government system",
    }
]
//to be completed
export const news_blogsDetailed = [
    {
        title: "ISSM partners with Bank Alfalah to inaugurate Pakistan’s first Digital Branch",
        imgs: [],
        videos: ['https://www.youtube.com/embed/EHR6K1FuxMM?si=eSn_MmyOA45ZziZ_'],
        desc: [
            "Bank Alfalah opens the first digital & lifestyle experience branch at Zamzama Boulevard, Karachi.",
            "First Digital Lifestyle Branch, a unique, one-of-a-kind digital experience hub designed to fulfil customers financial and lifestyle needs. The innovative branch is a transformative fusion of banking’s integration with the way of life."
        ]
    },
    {
        title: "MOU Signing Ceremony between e.ocean and ISSM.AI",
        imgs: [eocean1],
        videos: [],
        desc: [
            "e.ocean is collaborating with ISSM.AI Solutions by providing them WhatsApp Business API, to which ISSM will integrate their #AI #chatbot and will collectively cater to a wider market of consumers by providing one of the latest tools for quick, easy, and efficient customer relationship management to businesses across the world.",
            "Combining automation and AI ChatBot technology will only reduce the risk of human error for businesses but is also a key factor in time-saving, fast responses, extremely secure channels, and trustworthy services that are essential for business growth."
        ]
    },
    {
        title: "National Assembly’s Session on AI Utility Control",
        imgs: [],
        videos: [],
        desc: [
            "During a recent distinguished event at the National Assembly of Pakistan, our CEO, Ahsan Mashkoor, and the Chief Product Officer (CPO), Asher Naeem, showcased the transformative power of AI in combating the pervasive challenge of misinformation. Their dynamic presentation unveiled ISSM AI's cutting-edge technologies and innovative solutions tailored to curbing the spread of false information in the digital age.",
            "Ahsan Mashkoor and Asher Naeem's collaborative effort exemplified ISSM AI's commitment to harnessing artificial intelligence for the betterment of society, reinforcing our position as pioneers in the field of misinformation control. This remarkable event underlines our dedication to shaping a more informed, truthful, and connected world through the power of AI."
        ]
    },
    {
        title: "",
        imgs: [],
        videos: [],
        desc: [
            ""
        ]
    },
    {
        title: "",
        imgs: [],
        videos: [],
        desc: [
            ""
        ]
    },
    {
        title: "",
        imgs: [],
        videos: [],
        desc: [
            ""
        ]
    },
    {
        title: "",
        imgs: [],
        videos: [],
        desc: [
            ""
        ]
    },
    {
        title: "",
        imgs: [],
        videos: [],
        desc: [
            ""
        ]
    },
    {
        title: "",
        imgs: [],
        videos: [],
        desc: [
            ""
        ]
    },
    {
        title: "",
        imgs: [],
        videos: [],
        desc: [
            ""
        ]
    },
    {
        title: "",
        imgs: [],
        videos: [],
        desc: [
            ""
        ]
    },
    {
        title: "",
        imgs: [],
        videos: [],
        desc: [
            ""
        ]
    },
    {
        title: "",
        imgs: [],
        videos: [],
        desc: [
            ""
        ]
    },
    {
        title: "",
        imgs: [],
        videos: [],
        desc: [
            ""
        ]
    },
    {
        title: "",
        imgs: [],
        videos: [],
        desc: [
            ""
        ]
    }
]

export const footerData = {
    desc: "ISSM AI is a company founded with the goal to have every node in our infrastructure as a machine learning model. We are considered to be experts in various Machine Learning-based technologies, for example, Conversational AI-powered Chatbots, NLP-based Sentiment Analysis dashboards, Computer Vision powered authentication tools along with our Data Visualization efforts. All of our products come in modular forms and can be used exclusively or with our state-of-the-art Omni Channel platform that brings a complete management solution to your industry.",
    sections: {
        visitUs: {
            title: "VISIT US",
            body: [
                "SNC Centre 4th Floor, AK Fazal-ul-Haq Rd,",
                "Block D Blue Area, ICT، Islamabad.",
                "+92 309 8888014",
                "admin@issm.ai"

            ]
        },
        joinUs: {
            title: "JOIN THE JOURNEY",
            body: "Get updates on new developments in the stratosphere of Machine Learning and AI."
        },
        timing: {
            title: "OPENING HOURS",
            body: [
                "Monday - Friday:",
                "09:00AM - 06:00PM"
            ]
        },
        contactUs: {
            title: "CONTACT US",
            body: [
                facebook,
                instagram,
                youtube,
                twitter
            ]
        }
    }
}