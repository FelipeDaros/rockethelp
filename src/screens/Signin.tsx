import React, { useState } from "react";
import { Heading, Icon, VStack, useTheme } from "native-base";
import Logo from "../assets/logo_primary.svg";
import Input from "../components/Input";
import { Envelope, Key } from "phosphor-react-native";
import Button from "../components/Button";
import { firebase } from "@react-native-firebase/auth";
import { Alert } from "react-native";


export default function SignIn(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {colors} = useTheme();

  function handleSingIn(){
    if(!email){
      return Alert.alert("Entrar", "Informe email ou senha!");
    }
  }

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
        onChangeText={setEmail}
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