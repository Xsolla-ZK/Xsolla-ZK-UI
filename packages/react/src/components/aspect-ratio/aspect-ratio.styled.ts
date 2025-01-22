import styled from '@emotion/styled';

const Root = styled('div')({
  position: 'relative',
  display: 'block',
  paddingTop: '56.25%',
  width: '100%',
  overflow: 'hidden',
});

const Inner = styled('div')({
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const XZKUIAspectRatioStyled = {
  Root,
  Inner,
};

export default XZKUIAspectRatioStyled;
