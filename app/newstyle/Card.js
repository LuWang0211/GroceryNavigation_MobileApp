import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { Partition } from './Partition';
import { theme } from '../constants';

export class Card extends Component {
  render() {
    const { color, style, children, ...props } = this.props;
    const cardStyles = [
      styles.card,
      style,
    ];

    return (
      <Partition color={color || theme.colors.white} style={cardStyles} {...props}>
        {children}
      </Partition>
    )
  }
}

export const styles = StyleSheet.create({
  card: {
    borderRadius: theme.sizes.radius,
    padding: theme.sizes.base + 4,
    marginBottom: theme.sizes.base,
  },
})
