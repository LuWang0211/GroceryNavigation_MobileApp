export const mapTemplateWidth = 531;
export const mapTemplateHeight = 635;

/**
 * Code to build the following anchor positions
 */

// const xSteps = [25, 151, 85, 85, 81, 86, 102];
// const ySteps = [116, 120, 119, 122, 136];

// const layout = ['
//     ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
//     ['BB','H','I','J','K','L','M'],
//     ['N','O','P','Q','R','S','T'],
//     ['_','U','V','W','X','Y','Z'],
//     ['AA','AB','AC','AD','AE','AF','AG']
// ]

// let x = 0, y = 0;
// for (let i = 0; i < 7; i++) {
//     x += xSteps['i];
//     y = 0;
//     for (let j = 0; j < 5; j++) {
//         y += ySteps['j];
//         const anchor = layout['j]['i];

//         anchorPositions['anchor] = {
//             x,
//             y
//         }
//     }    
// }

export const anchorPositions = {
    "A": {
        "x": 25,
        "y": 116
    },
    "BB": {
        "x": 25,
        "y": 236
    },
    "N": {
        "x": 25,
        "y": 355
    },
    "AA": {
        "x": 25,
        "y": 613
    },
    "B": {
        "x": 176,
        "y": 116
    },
    "H": {
        "x": 176,
        "y": 236
    },
    "O": {
        "x": 176,
        "y": 355
    },
    "U": {
        "x": 176,
        "y": 477
    },
    "AB": {
        "x": 176,
        "y": 613
    },
    "C": {
        "x": 261,
        "y": 116
    },
    "I": {
        "x": 261,
        "y": 236
    },
    "P": {
        "x": 261,
        "y": 355
    },
    "V": {
        "x": 261,
        "y": 477
    },
    "AC": {
        "x": 261,
        "y": 613
    },
    "D": {
        "x": 346,
        "y": 116
    },
    "J": {
        "x": 346,
        "y": 236
    },
    "Q": {
        "x": 346,
        "y": 355
    },
    "W": {
        "x": 346,
        "y": 477
    },
    "AD": {
        "x": 346,
        "y": 613
    },
    "E": {
        "x": 427,
        "y": 116
    },
    "K": {
        "x": 427,
        "y": 236
    },
    "R": {
        "x": 427,
        "y": 355
    },
    "X": {
        "x": 427,
        "y": 477
    },
    "AE": {
        "x": 427,
        "y": 613
    },
    "F": {
        "x": 513,
        "y": 116
    },
    "L": {
        "x": 513,
        "y": 236
    },
    "S": {
        "x": 513,
        "y": 355
    },
    "Y": {
        "x": 513,
        "y": 477
    },
    "AF": {
        "x": 513,
        "y": 613
    },
    "G": {
        "x": 615,
        "y": 116
    },
    "M": {
        "x": 615,
        "y": 236
    },
    "T": {
        "x": 615,
        "y": 355
    },
    "Z": {
        "x": 615,
        "y": 477
    },
    "AG": {
        "x": 615,
        "y": 613
    },
    "ZZ": {
        "x": 615,
        "y": 679
    },
};

export const adjacency = {
    'A': ['B', 'BB'],
    'B': ['A','C','H'],
    'C': ['B','D','I'],
    'D': ['C','J','E'],
    'E': ['D','K','F'],
    'F': ['E','L','G'],
    'G': ['F','M'],
    'BB': ['A','N'],
    'H': ['B','O'],
    'I': ['C','P'],
    'J': ['D','Q'],
    'K': ['E','R'],
    'L': ['F','S'],
    'M': ['G','T'],
    'N': ['BB','O','AA'],
    'O': ['H','N','P','U'],
    'P': ['I','O','Q','V'],
    'Q': ['J','P','R','W'],
    'R': ['K','Q','S','X'],
    'S': ['L','R','T','Y'],
    'T': ['M','S','Z'],
    'U': ['O','AB'],
    'V': ['P','AC'],
    'W': ['Q','AD'],
    'X': ['R','AE'],
    'Y': ['S','AF'],
    'Z': ['T','AG'],
    'AA': ['N', 'AB'],
    'AB': ['AA','U','AC'],
    'AC': ['V','AB','AD'],
    'AD': ['W','AC','AE'],
    'AE': ['X','AD','AF'],
    'AF': ['AE','Y','AG'],
    'AG': ['Z','AF','ZZ'],
    'ZZ': ['AG']
}

// const column = [
//     ["AG", "Z", "T", "M", "G"],
//     ["AE", "X", "R", "K", "E"],
//     ["AD", "W", "Q", "J", "D"],
//     ["AC", "V", "P", "I", "C"],
//     ["AB", "U", "O", "H", "B"],
//     ["AA", "N", "BB", "A"]
// ];

// for (let i = 0; i < column.length; i++) {
//     const anchors = column[i];

//     for (const anchor of anchors) {
//         columnAssignment[anchor] = i;
//     }

// }

const columnAssignment = {
    "ZZ": 0,
    "AG": 0,
    "Z": 0,
    "T": 0,
    "M": 0,
    "G": 0,
    "AE": 1,
    "X": 1,
    "R": 1,
    "K": 1,
    "E": 1,
    "AD": 2,
    "W": 2,
    "Q": 2,
    "J": 2,
    "D": 2,
    "AC": 3,
    "V": 3,
    "P": 3,
    "I": 3,
    "C": 3,
    "AB": 4,
    "U": 4,
    "O": 4,
    "H": 4,
    "B": 4,
    "AA": 5,
    "N": 5,
    "BB": 5,
    "A": 5
}

const locationKeywordsDef = [
    [
        ['AG'], ['1', 'hispanic foods', 'can prepared', 'pckgd. dinners', 'pckgd.', 'pasta', 'condiments', 'condiments']
    ],
    [
        ['T'], ['2', 'food storage', 'spices', 'peanut butter', 'cake mixes', 'soups', 'canned fruit', 'w']
    ],
    [
        ['G'], ['eggs and dairy', 'eggs', 'dairy']
    ],
    [
        ['E'], ['meat']
    ],
    [
        ['B'], ['seafood']
    ],
    [
        ['AF'], ['candies']
    ],
    [
        ['AE'], ['local']
    ],
    [
        ['R'], ['breakfast']
    ],
]

export const wordsToLocation = {
}

for (const group of locationKeywordsDef) {
    const [locs, words] = group;

    for (const loc of locs) {
        for (const word of words) {
            wordsToLocation[word] = loc;
        }
    }
}