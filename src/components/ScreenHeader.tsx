import {
  Box,
  Heading,
  HStack,
  Icon,
  Pressable
} from 'native-base';
import { Feather } from '@expo/vector-icons';

type ScreenHeaderProps = {
  title: string;
}

export function ScreenHeader({ title }: ScreenHeaderProps) {
  return (
    <HStack
      pb={6}
      pt={16}
      px={6}
      bg='gray.600'
      justifyContent='space-between'
    >
      <Pressable onPress={() => { }}>
        <Icon
          as={Feather}
          name='arrow-left'
          size={6}
          color='green.500'
        />
      </Pressable>
      <Heading
        color='gray.100'
        fontSize='xl'
      >
        {title}
      </Heading>
      <Box
        w={6}
        h={6}
      />
    </HStack>
  );
}