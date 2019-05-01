import * as React from "react";
import styled from 'styled-components';

const StyledImage = styled.img`
  margin-right: 0.25rem;
`;

type IProps = {
    src: string,
    href: string,
    alt?: string,
    newTab?: boolean
}
const Thumbnail: React.FunctionComponent<IProps> = ({src, href, alt, newTab}) =>
    <a href={href} target={newTab ? '_blank' : ''} onClick={(e) => {
        e.stopPropagation(); // To avoid closing the tab
    }}>
        <StyledImage src={src} alt={alt}/>
    </a>;

export default Thumbnail;