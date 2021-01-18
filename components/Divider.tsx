import React from 'react';
import { Divider as ChakraDivider, Grid,Text } from '@chakra-ui/react'

// import { Container } from './styles';

const Divider: React.FC = () => {
  return (
    <Grid
      gridTemplateColumns="1fr 20px 1fr"
      columnGap={12}
      opacity={0.4}
    >
      <ChakraDivider marginY={6} />
      <Text alignSelf="center">ou</Text>
      <ChakraDivider marginY={6} />
    </Grid>
  );
}

export default Divider;