import { Heading, HStack, Text } from 'native-base';

type HeaderListProps = {
  title: string;
  counter: number;
}

export function HeaderList({ title, counter }: HeaderListProps) {
  return (
    <HStack
      w='full'
      px={8}
      mt={6}
      justifyContent='space-between'
      alignItems='center'
    >
      <Heading
        fontFamily='heading'
        fontSize='md'
        color='gray.200'
      >
        {title}
      </Heading>
      <Text
        color='gray.200'
        fontSize='sm'
      >
        {counter}
      </Text>
    </HStack>
  );
}