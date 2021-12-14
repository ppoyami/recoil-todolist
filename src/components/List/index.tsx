import styled from '@emotion/styled';

import Todo from './Todo';

export default function List() {
  return (
    <Container>
      <Todo text="리액트 첼린지 과제하기" category="Doing" />
      <Todo text="리액트 스타터 킷 만들기" category="Done" />
      <Todo text="김버그 강의듣기" category="TO_DO" />
    </Container>
  );
}

const Container = styled.ul({
  width: '100%',
  '& > *:not(:last-of-type)': {
    marginBottom: '1em',
  },
});
