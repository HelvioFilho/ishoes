import {
  Box,
  Heading,
  HStack,
  Icon,
  Pressable
} from 'native-base';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

type ScreenHeaderProps = {
  title: string;
}

export function ScreenHeader({ title }: ScreenHeaderProps) {
  const { goBack } = useNavigation();
  return (
    <HStack
      pb={6}
      pt={16}
      px={6}
      bg='gray.600'
      justifyContent='space-between'
    >
      <Pressable onPress={goBack}>
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