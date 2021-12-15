import styled from '@emotion/styled';

import Todo from './Todo';
import { todoSelector, todos } from '../../atoms';
import { useRecoilValue } from 'recoil';
import { useEffect } from 'react';

export default function List() {
  const filterdTodoList = useRecoilValue(todoSelector);
  const todoList = useRecoilValue(todos);
  // Q: todoList를 구독하고 있는 컴포넌트에서 상태가 변경되었을때 로컬스토리지를 업데이트. 이게 최선??
  useEffect(() => {
    // !update
    window.localStorage.setItem('todos', JSON.stringify(todoList));
  }, [todoList]);

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
