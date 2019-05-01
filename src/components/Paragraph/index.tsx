import * as React from "react";
import styled from 'styled-components';

const StyledParagraph = styled.p`
  margin: 0.5rem 0;
  word-break: break-word;
`;

const Paragraph: React.FunctionComponent = ({children}) => <StyledParagraph>{children}</StyledParagraph>;

export default Paragraph;