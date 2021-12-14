import styled from '@emotion/styled';

export default function Home() {
  return (
    <Layout>
      <h1>Hello, World!</h1>
    </Layout>
  );
}

const Layout = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
