
import styled from 'styled-components';

  export const StyledButton = styled.button`
    background-color: #${({ isDarkMode }) => isDarkMode ? '#3d3d3d' : '#86ba8a'};
    border-radius: 8px;
    color: ${({ isDarkMode }) => isDarkMode ? '#ffffff' : '#3d3d3d'};
    padding: 15px 50px;
    font-size: 24pt;
    width: 300px;
  `;

  export const StyledHeader = styled.h1`
    color: white;
  `
