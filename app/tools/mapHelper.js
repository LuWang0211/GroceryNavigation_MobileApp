import React from 'react';

import { anchorPositions, adjacency, wordsToLocation } from '../constants/mapMetadata'

/**
 * Given start and end nodes, calculate the shortest path bettwen start and end. 
 * Return an array as the path.
 * @param {} start 
 * @param {*} end 
 */
export const findShortestPath = (start, end) => {
    // "graph search using breath first search"
    // console.log(adjacency[start], adjacency[end]);
    let visited = new Set();
    visited.add(start);
    node = {
        "anchor": start,
        "path": []
    }
    
    queue = [node]

    while (queue.length > 0) {
        tmp_node = queue.shift();
        let path = [...tmp_node['path']];
        path.push(tmp_node['anchor']);

        let neighbours = adjacency[tmp_node['anchor']];
        let neighboursLength = neighbours.length;
        // console.log('neighbours', neighbours);

        for (let i = 0; i < neighboursLength; i++) {

            if (neighbours[i] === end) {
                return [...path, end];
            }

            if ( visited.has(neighbours[i])) {
                continue
            }

            visited.add(neighbours[i])

            queue.push({
                "anchor": neighbours[i],
                "path": [...path]
            })
            // console.log('visited', visited);
            // console.log('queue', queue);
        }
    }

    return path
}

export const planShopping = (shoppingList) => {
    let start = 'ZZ';

    let toSort = shoppingList.map((shoppingListEntry) => {
        const anchor = shoppingListEntry.category.location;

        const startCoordinate = anchorPositions[start];
        const toCoordinate = anchorPositions[anchor];
        const xDiff = (startCoordinate.x - toCoordinate.x);
        const yDiff = (startCoordinate.y - toCoordinate.y);

        return {
            shoppingListEntry,
            distance: xDiff * xDiff + yDiff * yDiff
        }
    });

    toSort.sort((a, b) => {
        return a.distance - b.distance;
    });

    // console.log(toSort.map( e => e.shoppingListEntry));

    return toSort.map( e => e.shoppingListEntry);
}

export const localize = (textCapture) => {

    for (const component of textCapture.components) {
        const word  = (component.text || '').trim().toLowerCase();

        if (!!wordsToLocation[word]) { // !! means to get the actual boolean value of the expression
            return wordsToLocation[word];
        }
    }

    return null;
}