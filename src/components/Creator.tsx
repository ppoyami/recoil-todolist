import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { todos, categories } from '../atoms';

interface IForm {
  todo: string;
  category: string;
}

export default function Creator() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [todoList, setTodos] = useRecoilState(todos);
  const [categoryList, setCategories] = useRecoilState(categories);

  const handleValid = ({ todo, category }: IForm) => {
    const todoObj = { id: Date.now(), text: todo, category };
    setTodos(prevState => [todoObj, ...prevState]);
    setCategories(prevState =>
      prevState.findIndex(cta => cta === category) !== -1
        ? prevState
        : [category, ...prevState],
    );
    setValue('todo', '');
    setValue('category', '');
  };

  // Q: todoList를 구독하고 있는 컴포넌트에서 상태가 변경되었을때 로컬스토리지를 업데이트. 이게 최선??
  useEffect(() => {
    // !update
    window.localStorage.setItem('todos', JSON.stringify(todoList));
  }, [todoList]);

  useEffect(() => {
    // !update
    window.localStorage.setItem('categories', JSON.stringify(categoryList));
  }, [categoryList]);

  return (
    <Form onSubmit={handleSubmit(handleValid)}>
      <TodoInput
        {...register('todo', { required: '할 일을 입력해주세요!' })}
        placeholder="Add Todo.."
      />
      <strong
        css={css`
          font-size: 0.7em;
          color: red;
        `}
      >
        {errors?.todo?.message}
      </strong>
      <div
        css={css`
          display: flex;
          align-items: center;
          margin-top: 0.5em;
        `}
      >
        <CategotyInput
          {...register('category', { required: '카테고리를 입력해주세요!' })}
          placeholder="Create Category.."
        />

        <Button type="submit">Add</Button>
      </div>
      <strong
        css={css`
          font-size: 0.7em;
          color: red;
        `}
      >
        {errors?.category?.message}
      </strong>
    </Form>
  );
}

const Form = styled.form({
  width: '100%',
  marginBottom: '2.5em',
});
const TodoInput = styled.input(props => ({
  width: '100%',
  padding: '.7em .5em',
  color: props.theme.colors.text.primary,
  border: `1px solid ${props.theme.colors.border}`,
  borderRadius: '5px',
}));
const CategotyInput = styled(TodoInput)({
  width: '50%',
  padding: '.5em .3em',
});
const Button = styled.button(props => ({
  color: props.theme.colors.text.primary,
  background: props.theme.colors.panel,
  padding: '.5em 1em',
  borderRadius: '100px',
  marginLeft: 'auto',
  fontWeight: 'bold',
}));
