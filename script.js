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
    }
]