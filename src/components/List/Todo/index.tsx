import styled from '@emotion/styled';
import Contoller from './Contoller';

interface ITodo {
  text: string;
  category: string;
}

export default function Todo({ text, category }: ITodo) {
  return (
    <Wrapper>
      <p>{text}</p>
      <small>{category}</small>
      <Contoller />
    </Wrapper>
  );
}

const Wrapper = styled.li(props => ({
  position: 'relative',
  padding: '.5em',
  border: `1px solid ${props.theme.colors.border}`,
  borderRadius: '5px',

  p: {
    fontSize: '1.1em',
    marginBottom: '.3em',
  },
  small: {
    fontSize: '.7em',
    fontWeight: '700',
    textTransform: 'uppercase',
    padding: '.2em .5em',
    background: props.theme.colors.text.primary,
    color: props.theme.colors.background,
    borderRadius: '100px',
  },
}));
