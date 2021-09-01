import Button from '../components/button/button';
import type { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 2em;
  display: flex;
`;

const Box = styled.div`
  margin: 1em;
`;

const Home: NextPage = () => {
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <>
      <Container>
        <Box>
          <Button text={'Mint NFT'} action={refreshPage} status={'primary'} />
        </Box>
        <Box>
          <Button text={'Cancel Transaction'} action={refreshPage} status={'secondary'} />
        </Box>

        <Box>
          <Button text={'Rugpull'} action={refreshPage} status={'danger'} />
        </Box>

        <Box>
          <Button text={'Disabled'} disabled action={refreshPage} status={'primary'} />
        </Box>
      </Container>
    </>
  );
};

export default Home;
