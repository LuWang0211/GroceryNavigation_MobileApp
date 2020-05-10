import React from 'react';

import { anchorPositions, mapTemplateWidth, mapTemplateHeight } from '../constants/mapMetadata';
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

    return <Line x1={xStartRef} y1={yStartRef} x2={xEndRef} y2={yEndRef} stroke="red" strokeWidth="10" />;
}