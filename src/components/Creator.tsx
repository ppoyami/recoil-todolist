import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
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

  const setTodos = useSetRecoilState(todos);
  const setCategories = useSetRecoilState(categories);

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
