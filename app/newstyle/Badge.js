import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { Partition } from './Partition';
import { theme } from '../constants';

export class Badge extends Component {
  render() {
    const { children, style, size, color, ...props } = this.props;

    const badgeStyles = StyleSheet.flatten([
      styles.badge,
      size && {
        height: size,
        width: size,
        borderRadius: size,
      },
      style,
    ]);

    return (
      <Partition flex={false} middle center color={color} style={badgeStyles} {...props}>
        {children}
      </Partition>
    )
  }
}

const styles = StyleSheet.create({
  badge: {
    height: theme.sizes.base,
    width: theme.sizes.base,
    borderRadius: theme.sizes.border,
  }
})
