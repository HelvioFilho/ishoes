import { 
  Avatar, 
  Heading, 
  HStack, 
  Icon, Text, 
  VStack 
} from 'native-base';
import { Feather } from '@expo/vector-icons';

import userPhotoDefault from "@assets/userPhotoDefault.png";

export function HomeHeader() {
  return (
    <HStack
      pt={16}
      pb={5}
      px={8}
      alignItems='center'
      bg='gray.600'
    >
      <Avatar 
        source={userPhotoDefault}
        size={16}
        mr={4}
        borderWidth={2}
        borderColor='gray.400'
      />
      <VStack flex={1}>
      <Text
        color='gray.100'
        fontSize='md'
      >
        Olá,
      </Text>
      <Heading
        color='gray.100'
        fontSize='md'
        fontFamily='heading'
      >
        Hélvio Filho
      </Heading>
      </VStack>
      <Icon 
        as={Feather}
        name='log-out'
        color='gray.200'
        size={7}
      />
    </HStack>
  );
}