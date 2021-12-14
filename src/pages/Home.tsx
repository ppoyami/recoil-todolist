import styled from '@emotion/styled';
import Creator from '@components/Creator';
import List from '@components/List';

export default function Home() {
  return (
    <Layout>
      <h2>Recoil Todo List</h2>
      <Creator />
      <List />
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
