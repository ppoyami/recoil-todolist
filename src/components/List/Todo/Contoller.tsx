import styled from '@emotion/styled';

import Dropdown from '@components/Dropdown';

export default function Contoller() {
  return (
    <Wrapper>
      <Dropdown />
    </Wrapper>
  );
}

const Wrapper = styled.div({
  position: 'absolute',
  bottom: '.5em',
  right: '.5em',
});
