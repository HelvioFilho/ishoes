import {
  Heading,
  HStack,
  Icon,
  Image,
  Text,
  VStack
} from 'native-base';
import { Platform, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { StorageCartProps } from '@storage/storageCart';

type ItemCartCardProps = {
  onRemove: () => void;
  data: StorageCartProps;
}

export function ItemCartCard({ onRemove, data }: ItemCartCardProps) {
  return (
    <HStack
      w='full'
      h={20}
      px={4}
      mb={2}
      bgColor='gray.500'
      rounded='md'
      alignItems='center'
    >
      <Image
        w={16}
        h={16}
        source={data.image}
        alt='Imagem do produto'
        resizeMode={Platform.OS === 'android' ? 'contain' : 'cover'}
      />
      <VStack flex={1} ml={2}>
        <Heading
          mt={2}
          color='white'
          fontFamily='heading'
          fontSize='lg'
        >
          {data.name}
        </Heading>
        <Text
          color='gray.200'
          fontSize='sm'
        >
          {data.quantity} unidades
        </Text>
      </VStack>
      <TouchableOpacity onPress={onRemove}>
        <Icon
          as={Feather}
          name='trash'
          size={6}
          color='red.500'
        />
      </TouchableOpacity>
    </HStack>
  );
}