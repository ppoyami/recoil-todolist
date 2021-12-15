import styled from '@emotion/styled';
import React, { useEffect, useRef, useState } from 'react';
import { useSetRecoilState } from 'recoil';

import { todos } from '../atoms';
import { ReactComponent as Down } from '@assets/down.svg';

interface IDropdown {
  id: number;
  items: string[];
  current: string;
}

type dropdownType = {
  open: boolean;
};

export default function Dropdown({ id, items, current }: IDropdown) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const setTodos = useSetRecoilState(todos);
  const toggleDropdown = () => {
    setOpen(prev => !prev);
  };

  // M: React.MouseEvent -> MouseEvent
  // M: e.target as Node
  const closeDropdown = (e: MouseEvent) => {
    if (containerRef.current?.contains(e.target as Node)) return;
    setOpen(false);
  };

  const onClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLLIElement;
    setTodos(prevState =>
      prevState.map(todo =>
        todo.id === id ? { ...todo, category: target.innerText } : todo,
      ),
    );
  };

  useEffect(() => {
    document.addEventListener('click', closeDropdown);
  }, []);

  return (
    <Container onClick={toggleDropdown} ref={containerRef}>
      <Display>
        <span>{current}</span>
        <Down width="1.2em" height="1.2em" />
      </Display>
      <DropdownCotainer open={open}>
        {items.map((text, index) => (
          <DropdownItem key={index} onClick={onClick}>
            {text}
          </DropdownItem>
        ))}
      </DropdownCotainer>
    </Container>
  );
}

const Container = styled.div({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});
const Display = styled.div({
  display: 'flex',
  alignItems: 'center',
});

const DropdownCotainer = styled.ul<dropdownType>(({ theme, open }) => ({
  position: 'absolute',
  top: '0%',
  left: 'calc(100% + 10px)',
  display: open ? 'block' : 'none',

  '& > *:not(:last-of-type)': {
    borderBottom: `1px solid ${theme.colors.background}`,
  },
}));

const DropdownItem = styled.li(({ theme }) => ({
  background: theme.colors.text.primary,
  color: theme.colors.background,
  padding: '.2em .5em',
}));
