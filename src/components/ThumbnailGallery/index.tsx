import * as React from "react";
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;

  img {
    max-width: 100%;
  }
`;

const ThumbnailGallery: React.FunctionComponent = ({children}) => <Wrapper>{children}</Wrapper>;

export default ThumbnailGallery;