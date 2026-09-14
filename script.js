const formations = [
    {
        id: "4-4-2",
        name: "4-4-2",
        type: "Formation",
        style: "Balanced",
        attacking: 3,
        defending: 4,
        difficulty: 2,

        description: "A classic formation built around two banks of four, with two forwards providing a direct attacking option. Its simplicity makes it easy to understand and adapt, while its compact shape can provide strong defensive organisation.",

        strengths: [
            "Simple and well-balanced",
            "Strong defensive structure",
            "Two forwards provide attacking presence"
        ],

        weaknesses: [
            "Can become predictable",
            "Midfield can be outnumbered against three-man midfields",
            "Wide midfielders must contribute defensively"
        ],

        positions: [
            { position: "GK", x: 50, y: 92 },
            { position: "LB", x: 15, y: 72 },
            { position: "LCB", x: 38, y: 76 },
            { position: "RCB", x: 62, y: 76 },
            { position: "RB", x: 85, y: 72 },
            { position: "LM", x: 18, y: 50 },
            { position: "LCM", x: 40, y: 52 },
            { position: "RCM", x: 60, y: 52 },
            { position: "RM", x: 82, y: 50 },
            { position: "LST", x: 42, y: 27 },
            { position: "RST", x: 58, y: 27 }
        ]
    },

    {
        id: "4-3-3",
        name: "4-3-3",
        type: "Formation",
        style: "Possession",
        attacking: 5,
        defending: 4,
        difficulty: 3,

        description:
            "A versatile formation that uses three forwards and a three-player midfield to create width and passing options. It can support possession-based football while also providing a strong structure for pressing.",

        strengths: [
            "Excellent attacking width",
            "Three central midfielders",
            "Good for pressing",
            "Flexible in possession"
        ],

        weaknesses: [
            "Space can appear behind attacking full-backs",
            "Wingers need to contribute defensively",
            "Can leave the striker isolated"
        ],

        positions: [
            { position: "GK", x: 50, y: 92 },
            { position: "LB", x: 15, y: 72 },
            { position: "LCB", x: 38, y: 76 },
            { position: "RCB", x: 62, y: 76 },
            { position: "RB", x: 85, y: 72 },
            { position: "DM", x: 50, y: 57 },
            { position: "LCM", x: 38, y: 45 },
            { position: "RCM", x: 62, y: 45 },
            { position: "LW", x: 18, y: 25 },
            { position: "ST", x: 50, y: 20 },
            { position: "RW", x: 82, y: 25 }
        ]
    },

    {
        id: "4-2-3-1",
        name: "4-2-3-1",
        type: "Formation",
        style: "Balanced",
        attacking: 4,
        defending: 4,
        difficulty: 3,

        description:
            "A highly flexible formation featuring two defensive midfielders behind an attacking midfield line. It provides a strong balance between defensive protection and attacking creativity.",

        strengths: [
            "Excellent midfield balance",
            "Protects the defence with two deeper midfielders",
            "Attacking midfielder connects midfield and attack",
            "Easy to adapt during a match"
        ],

        weaknesses: [
            "Can become too defensive",
            "Lone striker can become isolated",
            "Requires a strong number 10"
        ],

        positions: [
            { position: "GK", x: 50, y: 92 },
            { position: "LB", x: 15, y: 72 },
            { position: "LCB", x: 38, y: 76 },
            { position: "RCB", x: 62, y: 76 },
            { position: "RB", x: 85, y: 72 },
            { position: "LDM", x: 40, y: 55 },
            { position: "RDM", x: 60, y: 55 },
            { position: "LW", x: 18, y: 32 },
            { position: "CAM", x: 50, y: 34 },
            { position: "RW", x: 82, y: 32 },
            { position: "ST", x: 50, y: 18 }
        ]

    },

    {
        id: "4-4-2-diamond",
        name: "4-4-2 Diamond",
        type: "Formation",
        style: "Possession",
        attacking: 4,
        defending: 3,
        difficulty: 4,

        description:
            "A narrow variation of the 4-4-2 that concentrates players in central areas. The diamond can provide excellent midfield control but relies heavily on full-backs for width.",

        strengths: [
            "Numerical advantage in central midfield",
            "Two forwards",
            "Good passing options through the middle"
        ],

        weaknesses: [
            "Limited natural width",
            "Full-backs have significant responsibilities",
            "Can struggle against teams attacking wide areas"
        ],

        positions: [
            { position: "GK", x: 50, y: 92 },
            { position: "LB", x: 15, y: 72 },
            { position: "LCB", x: 38, y: 76 },
            { position: "RCB", x: 62, y: 76 },
            { position: "RB", x: 85, y: 72 },
            { position: "DM", x: 50, y: 57 },
            { position: "LCM", x: 38, y: 45 },
            { position: "RCM", x: 62, y: 45 },
            { position: "CAM", x: 50, y: 32 },
            { position: "LST", x: 42, y: 18 },
            { position: "RST", x: 58, y: 18 }
        ]
    },

    {
        id: "4-1-4-1",
        name: "4-1-4-1",
        type: "Formation",
        style: "Defensive",
        attacking: 3,
        defending: 5,
        difficulty: 3,

        description:
            "A compact formation with a dedicated defensive midfielder protecting the back four. It can be difficult to play through centrally and provides a solid foundation for controlled defending.",

        strengths: [
            "Strong defensive structure",
            "Excellent central protection",
            "Five midfield players when defending",
            "Good foundation for transitions"
        ],

        weaknesses: [
            "Can lack attacking presence",
            "Striker can become isolated",
            "Requires midfielders to make supporting runs"
        ],

        positions: [
            { position: "GK", x: 50, y: 92 },
            { position: "LB", x: 15, y: 72 },
            { position: "LCB", x: 38, y: 76 },
            { position: "RCB", x: 62, y: 76 },
            { position: "RB", x: 85, y: 72 },
            { position: "DM", x: 50, y: 58 },
            { position: "LM", x: 18, y: 42 },
            { position: "LCM", x: 40, y: 44 },
            { position: "RCM", x: 60, y: 44 },
            { position: "RM", x: 82, y: 42 },
            { position: "ST", x: 50, y: 20 }
        ]
    },

    {
        id: "4-3-1-2",
        name: "4-3-1-2",
        type: "Formation",
        style: "Possession",
        attacking: 4,
        defending: 3,
        difficulty: 4,

        description:
            "A narrow formation built around a central attacking midfielder playing behind two forwards. It creates strong central combinations but depends on full-backs to provide width.",

        strengths: [
            "Two forwards",
            "Strong central combinations",
            "Dedicated creative midfielder",
            "Good for short passing"
        ],

        weaknesses: [
            "Narrow shape",
            "Heavy reliance on full-backs for width",
            "Vulnerable in wide areas"
        ],

        positions: [
            { position: "GK", x: 50, y: 92 },
            { position: "LB", x: 15, y: 72 },
            { position: "LCB", x: 38, y: 76 },
            { position: "RCB", x: 62, y: 76 },
            { position: "RB", x: 85, y: 72 },
            { position: "DM", x: 50, y: 58 },
            { position: "LCM", x: 38, y: 45 },
            { position: "RCM", x: 62, y: 45 },
            { position: "CAM", x: 50, y: 32 },
            { position: "LST", x: 42, y: 19 },
            { position: "RST", x: 58, y: 19 }
        ]


    },

    {
        id: "3-5-2",
        name: "3-5-2",
        type: "Formation",
        style: "Counter-attacking",
        attacking: 4,
        defending: 4,
        difficulty: 4,

        description:
            "A three-centre-back system with wing-backs providing width and two forwards leading the attack. It can quickly switch between a defensive five and an attacking structure.",

        strengths: [
            "Three centre-backs provide defensive cover",
            "Two forwards",
            "Wing-backs create width",
            "Flexible attacking and defensive shape"
        ],

        weaknesses: [
            "Wing-backs have enormous physical demands",
            "Space can appear behind the wing-backs",
            "Requires good coordination between the centre-backs"
        ],

        positions: [
            { position: "GK", x: 50, y: 92 },
            { position: "LCB", x: 25, y: 74 },
            { position: "CB", x: 50, y: 78 },
            { position: "RCB", x: 75, y: 74 },
            { position: "LWB", x: 10, y: 48 },
            { position: "LCM", x: 35, y: 50 },
            { position: "CM", x: 50, y: 43 },
            { position: "RCM", x: 65, y: 50 },
            { position: "RWB", x: 90, y: 48 },
            { position: "LST", x: 42, y: 20 },
            { position: "RST", x: 58, y: 20 }
        ]
    },

    {
        id: "3-4-3",
        name: "3-4-3",
        type: "Formation",
        style: "Attacking",
        attacking: 5,
        defending: 3,
        difficulty: 4,

        description:
            "An attacking formation using three centre-backs, wing-backs and three forwards. It creates multiple attacking options and plenty of width, but can leave the team exposed when possession is lost.",

        strengths: [
            "Three attacking players",
            "Excellent width",
            "Can overload the opposition defence",
            "Strong pressing potential"
        ],

        weaknesses: [
            "Can leave space in midfield",
            "Vulnerable during transitions",
            "Requires disciplined wide players"
        ],

        positions: [
            { position: "GK", x: 50, y: 92 },
            { position: "LCB", x: 25, y: 75 },
            { position: "CB", x: 50, y: 78 },
            { position: "RCB", x: 75, y: 75 },
            { position: "LWB", x: 15, y: 52 },
            { position: "LCM", x: 40, y: 52 },
            { position: "RCM", x: 60, y: 52 },
            { position: "RWB", x: 85, y: 52 },
            { position: "LW", x: 22, y: 27 },
            { position: "ST", x: 50, y: 20 },
            { position: "RW", x: 78, y: 27 }
        ]
    },

    {
        id: "3-4-2-1",
        name: "3-4-2-1",
        type: "Formation",
        style: "Possession",
        attacking: 4,
        defending: 4,
        difficulty: 5,

        description:
            "A flexible back-three formation with two attacking midfielders operating behind a lone striker. It can create numerical advantages between the opposition midfield and defence.",

        strengths: [
            "Excellent central combinations",
            "Three centre-backs provide security",
            "Two attacking midfielders can find pockets of space",
            "Flexible in possession"
        ],

        weaknesses: [
            "Complex positional responsibilities",
            "Requires technically strong players",
            "Wing-backs must cover significant ground"
        ],

        positions: [
            { position: "GK", x: 50, y: 92 },
            { position: "LCB", x: 25, y: 75 },
            { position: "CB", x: 50, y: 78 },
            { position: "RCB", x: 75, y: 75 },
            { position: "LWB", x: 12, y: 52 },
            { position: "LCM", x: 40, y: 50 },
            { position: "RCM", x: 60, y: 50 },
            { position: "RWB", x: 88, y: 52 },
            { position: "LAM", x: 38, y: 31 },
            { position: "RAM", x: 62, y: 31 },
            { position: "ST", x: 50, y: 17 }
        ]
    },

    {
        id: "5-3-2",
        name: "5-3-2",
        type: "Formation",
        style: "Defensive",
        attacking: 3,
        defending: 5,
        difficulty: 3,

        description:
            "A compact defensive formation that uses five defenders and three central midfielders. It can be particularly effective when protecting a lead or defending against strong attacking sides.",

        strengths: [
            "Very strong defensive structure",
            "Three central midfielders",
            "Two forwards provide a counter-attacking outlet",
            "Difficult to break down centrally"
        ],

        weaknesses: [
            "Can invite too much pressure",
            "Wing-backs may become pinned back",
            "Possession can be difficult to maintain"
        ],

        positions: [
            { position: "GK", x: 50, y: 92 },
            { position: "LWB", x: 10, y: 55 },
            { position: "LCB", x: 28, y: 75 },
            { position: "CB", x: 50, y: 78 },
            { position: "RCB", x: 72, y: 75 },
            { position: "RWB", x: 90, y: 55 },
            { position: "LCM", x: 35, y: 48 },
            { position: "CM", x: 50, y: 43 },
            { position: "RCM", x: 65, y: 48 },
            { position: "LST", x: 42, y: 20 },
            { position: "RST", x: 58, y: 20 }
        ]
    },

    {
        id: "5-4-1",
        name: "5-4-1",
        type: "Formation",
        style: "Defensive",
        attacking: 2,
        defending: 5,
        difficulty: 2,

        description:
            "A highly defensive formation designed to create a compact block with five defenders and four midfielders. It prioritises defensive organisation and limiting space.",

        strengths: [
            "Extremely compact",
            "Strong protection of the penalty area",
            "Difficult to break down",
            "Relatively simple defensive structure"
        ],

        weaknesses: [
            "Limited attacking options",
            "Lone striker can become isolated",
            "Can surrender possession and territory"
        ],

        positions: [
            { position: "GK", x: 50, y: 92 },
            { position: "LWB", x: 10, y: 68 },
            { position: "LCB", x: 28, y: 75 },
            { position: "CB", x: 50, y: 78 },
            { position: "RCB", x: 72, y: 75 },
            { position: "RWB", x: 90, y: 68 },
            { position: "LM", x: 18, y: 47 },
            { position: "LCM", x: 40, y: 48 },
            { position: "RCM", x: 60, y: 48 },
            { position: "RM", x: 82, y: 47 },
            { position: "ST", x: 50, y: 20 }
        ]
    },

    {
        id: "4-2-2-2",
        name: "4-2-2-2",
        type: "Formation",
        style: "Counter-attacking",
        attacking: 4,
        defending: 4,
        difficulty: 4,

        description:
            "A narrow attacking formation with two defensive midfielders and two attacking midfielders positioned behind two forwards. Its central overloads can be dangerous in transition.",

        strengths: [
            "Two forwards",
            "Strong central presence",
            "Good for quick transitions",
            "Multiple options around the penalty area"
        ],

        weaknesses: [
            "Natural width is limited",
            "Full-backs must provide width",
            "Can struggle against wide attacks"
        ],

        positions: [
            { position: "GK", x: 50, y: 92 },
            { position: "LB", x: 15, y: 72 },
            { position: "LCB", x: 38, y: 76 },
            { position: "RCB", x: 62, y: 76 },
            { position: "RB", x: 85, y: 72 },
            { position: "LDM", x: 40, y: 55 },
            { position: "RDM", x: 60, y: 55 },
            { position: "LAM", x: 35, y: 34 },
            { position: "RAM", x: 65, y: 34 },
            { position: "LST", x: 42, y: 18 },
            { position: "RST", x: 58, y: 18 }
        ]
    }
];