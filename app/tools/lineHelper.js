import React from 'react';

import { anchorPositions, mapTemplateWidth, mapTemplateHeight } from '../constants/mapMetadata';
import { findShortestPath } from '../tools/mapHelper'
import { Line } from 'react-native-svg';
import Icon from 'react-native-vector-icons/Ionicons';


export const drawLine = (startAnchor, endAnchor, referenceWidth, referenceHeight, key = "linekey") => {
    if (!anchorPositions[startAnchor] || !anchorPositions[endAnchor]) {
        throw new Error("I haven't seen this anchor before");
    }

    const {x: startX, y: startY} = anchorPositions[startAnchor];
    const {x: endX, y: endY} = anchorPositions[endAnchor];

    const xStartRef = startX / mapTemplateWidth * referenceWidth;
    const yStartRef = startY / mapTemplateHeight * referenceHeight;

    const xEndRef = endX / mapTemplateWidth * referenceWidth;
    const yEndRef = endY / mapTemplateHeight * referenceHeight;

    return <Line key={key} x1={xStartRef} y1={yStartRef} x2={xEndRef} y2={yEndRef} stroke="red" strokeWidth="3" />;
}

export const drawPath = (startAnchor, endAnchor, referenceWidth, referenceHeight, keyPrefix = 'key') => {
    const path = findShortestPath(startAnchor, endAnchor);

    let start = path.shift();

    const lines = [];

    let i = 0;
    while(path.length != 0) {
        next = path.shift();
        // console.log(start, next);

        const line = drawLine(start, next, referenceWidth, referenceHeight, keyPrefix + (i++));

        lines.push(line);

        start = next;
    }

    return lines;
}

export const drawPlannedPath = (goalAnchors, referenceWidth, referenceHeight, start='ZZ') => {
    let allPath = [];
    while(goalAnchors.length > 0) {

        const nextGoal = goalAnchors.shift();

        const path = drawPath(start, nextGoal, referenceWidth, referenceHeight, `key-${nextGoal}`);

        allPath = allPath.concat(path);

        start = nextGoal;

        console.log('drawPlannedPath', start, nextGoal);
    }

    return allPath;
}

export const iconPositions = (iconAnchor, referenceWidth, referenceHeight) => {
    if (!anchorPositions[iconAnchor]) {
        throw new Error("I haven't seen this icon anchor before");
    }

    const {x: startX, y: startY} = anchorPositions[iconAnchor];

    const xStartRef = startX / mapTemplateWidth * referenceWidth;
    const yStartRef = startY / mapTemplateHeight * referenceHeight;

    console.log('xStartRef, yStartRef',xStartRef, yStartRef)

    return <Icon name="md-person" size={24} style={{top: yStartRef - 12 , left: xStartRef - 12, position:"absolute"}}/>;
}