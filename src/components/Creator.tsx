import styled from '@emotion/styled';

export default function Creator() {
  return (
    <Form>
      <Input placeholder="add Todo.." />
    </Form>
  );
}

const Form = styled.form({
  width: '100%',
  marginBottom: '2.5em',
});
const Input = styled.input(props => ({
  width: '100%',
  padding: '.7em .5em',
  color: props.theme.colors.text.primary,
  border: `1px solid ${props.theme.colors.border}`,
  borderRadius: '5px',
}));
