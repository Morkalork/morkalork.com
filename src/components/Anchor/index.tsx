import * as React from "react";
import styled from 'styled-components';

const StyledAnchor = styled.a`
  color: #fff;
  text-decoration: none;
  border-bottom: 1px #0099A3 solid;

  &.bold {
    font-weight: bold;
  }
`;

type IProps = {
    text: string,
    href: string,
    strong?: boolean,
    title?: string,
    newTab?: boolean
};

const Anchor: React.FunctionComponent<IProps> = ({text, href, strong, title, newTab}) => <StyledAnchor
    className={strong ? 'bold' : ''}
    href={href}
    title={title}
    target={newTab ? '_blank' : ''}
>
    {text}
</StyledAnchor>;

export default Anchor;