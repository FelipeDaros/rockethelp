import React, { useState } from "react";
import { Heading, Icon, VStack, useTheme } from "native-base";
import Logo from "../assets/logo_primary.svg";
import Input from "../components/Input";
import { Envelope, Key } from "phosphor-react-native";
import Button from "../components/Button";


export default function SignIn(){
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const {colors} = useTheme();

  return(
    <VStack flex={1} alignItems="center" bg="gray.600" p={8} pt={24}>
      <Logo />
      <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>
        Acesse sua conta
      </Heading>

      <Input 
        placeholder="E-mail" 
        mb={6} 
        InputLeftElement={<Icon color={colors.gray[300]} as={Envelope} ml={4}/> }
        onChangeText={setName}
      />

      <Input 
        placeholder="Senha" 
        mb={4} 
        InputLeftElement={<Icon color={colors.gray[300]} as={Key} ml={4}/>}
        secureTextEntry
        onChangeText={setPassword}
        />

        <Button title="Entrar" w="full"/>
    </VStack>
  )
}