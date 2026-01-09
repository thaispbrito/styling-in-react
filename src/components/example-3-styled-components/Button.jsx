// src/components/example-3-styled-components/Button.jsx

import { StyledButton, StyledHeader } from './style.js'
import { useState } from 'react';

const Button = ({ buttonText }) => {

  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <>
      <StyledHeader>Hello</StyledHeader>
      <StyledButton isDarkMode={isDarkMode}>{buttonText}</StyledButton>
    </>
  )
};

export default Button;