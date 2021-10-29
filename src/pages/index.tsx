import { Box, FormGroup, FormLabel, Input, InputLabel  } from "@mui/material"
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <Box sx={{  width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <FormGroup sx={{  width: '30%'}}>
      {/* <FormLabel>Nome:</FormLabel> */}
      <InputLabel >Nome:</InputLabel>
      <Input placeholder="Nome" />

      <InputLabel >Telefone:</InputLabel>
      <Input type="number" placeholder="Telefone" />

      <InputLabel >E-mail:</InputLabel>
      <Input placeholder="E-mail" />

      <InputLabel >Data de nascimento:</InputLabel>
      <Input type="date" />
      </FormGroup>
    </Box>
  )
}

export default Home
