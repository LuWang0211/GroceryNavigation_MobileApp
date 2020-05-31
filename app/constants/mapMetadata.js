export const mapTemplateWidth = 530;
export const mapTemplateHeight = 635;

/**
 * Code to build the following anchor positions
 */

const xSteps = [28.75, 65.5, 65.5, 65.5, 65.5, 65.5, 65.5, 65.5, 43.5];
const ySteps = [66, 66, 167, 229, 114];

// let sum_x = xSteps.reduce(function(a, b){
//     return a + b;
// }, 0);
// let sum_y = ySteps.reduce(function(a, b){
//     return a + b;
// }, 0);
// console.log(sum_x);
// console.log(sum_y);

// const layout = [
//     ['AB', 'AA', 'AE', 'V', 'Q', 'AF', 'L', 'K'],
//     ['AC','Z','W','U','R','P','M', 'J'],
//     ['AD','Y','X','T','S','O','N', 'I'],
//     ['A','B','C','D','E','F','G', 'H'],
// ]

// let x = 0, y = 0;
// let anchorPositions = {};
// for (let i = 0; i < 8; i++) {
//     x += xSteps[i];
//     y = 0;
//     for (let j = 0; j < 4; j++) {
//         y += ySteps[j];
//         const anchor = layout[j][i];

//         anchorPositions[anchor] = {
//             x,
//             y
//         }
//     }    
// }

export const anchorPositions = {
    'A': {'x': 28.75, 'y': 528},
    'AA': {'x': 106, 'y': 66},
    'AB': {'x': 28.75, 'y': 66},
    'AC': {'x': 28.75, 'y': 132},
    'AD': {'x': 28.75, 'y': 299},
    'AE': {'x': 171, 'y': 66},
    'AF': {'x': 357, 'y': 66},
    'B': {'x': 106, 'y': 528},
    'C': {'x': 171, 'y': 528},
    'D': {'x': 235, 'y': 528},
    'E': {'x': 295, 'y': 528},
    'F': {'x': 357, 'y': 528},
    'G': {'x': 422, 'y': 528},
    'H': {'x': 487, 'y': 528},
    'I': {'x': 487, 'y': 299},
    'J': {'x': 487, 'y': 132},
    'K': {'x': 487, 'y': 66},
    'L': {'x': 422, 'y': 66},
    'M': {'x': 422, 'y': 132},
    'N': {'x': 422, 'y': 299},
    'O': {'x': 357, 'y': 299},
    'P': {'x': 357, 'y': 132},
    'Q': {'x': 295, 'y': 66},
    'R': {'x': 295, 'y': 132},
    'S': {'x': 295, 'y': 299},
    'T': {'x': 235, 'y': 299},
    'U': {'x': 235, 'y': 132},
    'V': {'x': 235, 'y': 66},
    'W': {'x': 171, 'y': 132},
    'X': {'x': 171, 'y': 299},
    'Y': {'x': 106, 'y': 299},
    'Z': {'x': 106, 'y': 132},
    'ZZ': {'x': 29, 'y': 584},
};

export const adjacency = {
    'A': ['B', 'AD', 'ZZ'],
    'B': ['A','C','Y'],
    'C': ['B','D','X'],
    'D': ['C','E','T'],
    'E': ['D','S','F'],
    'F': ['E','O','G'],
    'G': ['F','N', 'H'],
    'H': ['G','I'],
    'I': ['J','H'],
    'J': ['K','I'],
    'K': ['J','L'],
    'L': ['AF','M','K'],
    'M': ['L','N'],
    'N': ['M','G'],
    'O': ['P','F'],
    'P': ['AF','O'],
    'Q': ['V','R','AF'],
    'R': ['S','Q'],
    'S': ['E','R'],
    'T': ['U','D'],
    'U': ['V','T'],
    'V': ['AE','U','Q'],
    'W': ['AE','X'],
    'X': ['W','C'],
    'Y': ['B','Z'],
    'Z': ['Y','AA'],
    'AA': ['Z','AE','AB'],
    'AB': ['AA','AC'],
    'AC': ['AB','AD'],
    'AD': ['AC','A'],
    'AE': ['AA','W','V'],
    'AF': ['Q','P','L'],
    'ZZ': ['A']
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

// const columnAssignment = {
//     "ZZ": 0,
//     "AG": 0,
//     "Z": 0,
//     "T": 0,
//     "M": 0,
//     "G": 0,
//     "AE": 1,
//     "X": 1,
//     "R": 1,
//     "K": 1,
//     "E": 1,
//     "AD": 2,
//     "W": 2,
//     "Q": 2,
//     "J": 2,
//     "D": 2,
//     "AC": 3,
//     "V": 3,
//     "P": 3,
//     "I": 3,
//     "C": 3,
//     "AB": 4,
//     "U": 4,
//     "O": 4,
//     "H": 4,
//     "B": 4,
//     "AA": 5,
//     "N": 5,
//     "BB": 5,
//     "A": 5
// }

const locationKeywordsDef = [
    [
        ['ZZ'], []
    ],
    [
        ['B'], ['1', 'hispanic foods', 'pckgd. dinners', 'condiments', 'condiment',]
    ],
    [
        ['Y'], ['pasta', ]
    ],
    [
        ['C'], ['2', 'food storage', 'spices', 'peanut butter', 'cake mixes', 'soups', 'canned fruit']
    ],
    [
        ['D'], ['3', 'pizza', 'entress', 'potatoes', 'vegetables']
    ],
    [
        ['E'], ['4', 'yogurt', 'butter', 'ice', 'ice cream', 'cheese']
    ],
    [
        ['F'], ['5', 'tea', 'cereal', 'fruit', 'snacks', 'fruit snacks']
    ],
    [
        ['G'], ['6', 'water', 'chips', 'drinks', 'soft drinks', 'juices']
    ],
    [
        ['H'], ['7', 'personal care', 'hair care', 'cough', 'cold', 'skin care', 'deodorant']
    ],
    [
        ['AA'], ['seafood']
    ],
    [
        ['V'], ['meet']
    ],
    [
        ['L'], ['eggs and dairy', 'eggs', 'dairy']
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