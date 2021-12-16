import styled from '@emotion/styled';

import Todo from './Todo';
import { todoSelector, todos } from '../../atoms';
import { useRecoilValue } from 'recoil';

export default function List() {
  const filterdTodoList = useRecoilValue(todoSelector);

  return (
    <Container>
      {filterdTodoList?.map(({ id, text, category }) => (
        <Todo key={id} id={id} text={text} category={category} />
      ))}
    </Container>
  );
}

const Container = styled.ul({
  width: '100%',
  '& > *:not(:last-of-type)': {
    marginBottom: '1em',
  },
});
