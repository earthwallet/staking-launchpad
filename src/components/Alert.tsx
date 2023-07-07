import React from 'react';
import styled from 'styled-components';
import { Box, BoxProps } from 'grommet';

const variantStyles = {
  primary: {
    backgroundColor: '#cce5ff',
    borderColor: '#b8daff',
  },
  warning: {
    backgroundColor: '#ffdeb32e',
    borderColor: '#DEB887',
    color: 'white',
  },
  secondary: {
    backgroundColor: '#fdfcfe',
    borderColor: '#d3d3d3',
  },
  info: {
    backgroundColor: '#d9edf72e',
    borderColor: '#bce8f12e',
    color: 'white',
  },
  error: {
    backgroundColor: '#f2dede2e',
    borderColor: '#E22D3F2e',
    color: 'white',
  },
  success: {
    backgroundColor: '#d4edda2e',
    borderColor: '#c3e6cb',
    color: 'white',
  },
};

const HighlightStyles = styled.div`
  .alert-highlight {
    padding: 5px;
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.04);
    margin-inline-end: 3px;
    margin-inline-start: 3px;
  }
`;

export const Alert = (
  props: {
    children: React.ReactNode;
    className?: string;
    error?: boolean;
    style?: any;
    variant?: string;
  } & BoxProps
): JSX.Element => {
  const { variant = 'primary', className, children, pad } = props;
  return (
    <Box
      border
      className={className}
      pad={pad || 'medium'}
      round="xsmall"
      variant={variant}
      {...props}
      // @ts-ignore
      style={variantStyles[variant]}
    >
      <HighlightStyles>{children}</HighlightStyles>
    </Box>
  );
};
