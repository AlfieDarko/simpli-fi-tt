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

  const goToOpenSea = () => {
    window.location.href = 'https://opensea.io';
  };

  const goToRekt = () => {
    window.location.href = 'https://www.rekt.news/';
  };

  return (
    <>
      <Container>
        <Box>
          <Button text={'Mint NFT'} action={goToOpenSea} status={'primary'} />
        </Box>
        <Box>
          <Button text={'Cancel Transaction'} action={refreshPage} status={'secondary'} />
        </Box>

        <Box>
          <Button text={'Rugpull'} action={goToRekt} status={'danger'} />
        </Box>

        <Box>
          <Button text={'Disabled'} disabled status={'primary'} />
        </Box>
      </Container>
    </>
  );
};

export default Home;
