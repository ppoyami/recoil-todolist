import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from '@emotion/styled';

import Creator from '@components/Creator';
import List from '@components/List';
import { categories, currentCategory } from '../atoms';

export default function Home() {
  const categoryList = useRecoilValue(categories);
  const setCurrentCta = useSetRecoilState(currentCategory);

  const onClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLSpanElement;
    setCurrentCta(target.innerText);
  };

  return (
    <Layout>
      <h2>Recoil Todo List</h2>
      <Creator />
      <List />
      <FilterBox>
        <h3>Category Filter</h3>
        <Grid>
          {categoryList.map((cta, index) => (
            <span key={index} onClick={onClick}>
              {cta}
            </span>
          ))}
          <span onClick={onClick}>all</span>
        </Grid>
      </FilterBox>
    </Layout>
  );
}

const Layout = styled.div({
  width: '50%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  h2: {
    width: '100%',
    textAlign: 'center',
    marginBottom: '1em',
  },
});

const FilterBox = styled.div({
  position: 'absolute',
  width: '22%',
  height: '50%',
  left: '1%',
  top: '33%',
  h3: {
    textAlign: 'center',
    marginBottom: '.3em',
  },
});

const Grid = styled.div(
  {
    padding: '1em',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, max-content)',
    justifyContent: 'center',
    gap: '.5em',
  },
  ({ theme }) => ({
    span: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '.7em',
      fontWeight: '700',
      padding: '.2em .5em',
      background: theme.colors.text.primary,
      color: theme.colors.background,
      borderRadius: '100px',
      cursor: 'pointer',
    },
  }),
);
