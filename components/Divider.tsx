import React from 'react';
import { Divider as ChakraDivider, Grid,Text, useColorModeValue } from '@chakra-ui/react'


const Divider: React.FC = () => {
  return (
    <Grid
      gridTemplateColumns="1fr 20px 1fr"
      columnGap={2}
      opacity={0.4}
    >
    <ChakraDivider marginY={6} opacity={1} borderColor={useColorModeValue("black","white")} />
      <Text size='sm' marginY={2}>ou</Text>
      <ChakraDivider marginY={6} opacity={1} borderColor={useColorModeValue("black","white")}/>
    </Grid>
  );
}

export default Divider;