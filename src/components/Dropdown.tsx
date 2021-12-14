import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';

import { ReactComponent as Down } from '@assets/down.svg';

type dropdownType = {
  open: boolean;
};

export default function Dropdown() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const toggleDropdown = () => {
    setOpen(prev => !prev);
  };

  // M: React.MouseEvent -> MouseEvent
  // M: e.target as Node
  const closeDropdown = (e: MouseEvent) => {
    if (containerRef.current?.contains(e.target as Node)) return;
    setOpen(false);
  };

  useEffect(() => {
    document.addEventListener('click', closeDropdown);
  }, []);

  return (
    <Container onClick={toggleDropdown} ref={containerRef}>
      <Display>
        <span>Doing</span>
        <Down width="1.2em" height="1.2em" />
      </Display>
      <DropdownCotainer open={open}>
        <DropdownItem>Doing</DropdownItem>
        <DropdownItem>Done</DropdownItem>
        <DropdownItem>To_Do</DropdownItem>
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
  left: '135%',
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
