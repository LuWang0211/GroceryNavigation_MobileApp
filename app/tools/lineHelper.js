import React from 'react';

import { anchorPositions, mapTemplateWidth, mapTemplateHeight } from '../constants/mapMetadata';
import { findShortestPath } from '../tools/mapHelper'
import { Line } from 'react-native-svg';


export const drawLine = (startAnchor, endAnchor, referenceWidth, referenceHeight) => {
    if (!anchorPositions[startAnchor] || !anchorPositions[endAnchor]) {
        throw new Error("I haven't seen this anchor before");
    }

    const {x: startX, y: startY} = anchorPositions[startAnchor];
    const {x: endX, y: endY} = anchorPositions[endAnchor];

    const xStartRef = startX / mapTemplateWidth * referenceWidth;
    const yStartRef = startY / mapTemplateHeight * referenceHeight;

    const xEndRef = endX / mapTemplateWidth * referenceWidth;
    const yEndRef = endY / mapTemplateHeight * referenceHeight;

    console.log('drawLine', xStartRef, yStartRef, xEndRef, yEndRef);

    return <Line x1={xStartRef} y1={yStartRef} x2={xEndRef} y2={yEndRef} stroke="red" strokeWidth="10" />;
}

export const drawPath = (startAnchor, endAnchor, referenceWidth, referenceHeight) => {
    const path = findShortestPath(startAnchor, endAnchor);

    let start = path.shift();

    const lines = [];

    while(path.length != 0) {
        next = path.shift();
        console.log(start, next);

        const line = drawLine(start, next, referenceWidth, referenceHeight);

        lines.push(line);

        //return line;

        start = next;
    }

    return lines;
}