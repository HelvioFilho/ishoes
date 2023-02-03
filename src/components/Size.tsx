import { Pressable, IPressableProps, Text } from 'native-base';

type SizeProps = IPressableProps & {
  size: string;
  isActive: boolean;
}

export function Size({ size, isActive, ...rest }: SizeProps) {
  return (
    <Pressable
      w={10}
      h={10}
      mr={3}
      bg='gray.600'
      rounded='xs'
      overflow='hidden'
      alignItems='center'
      justifyContent='center'
      isPressed={isActive}
      _pressed={{
        borderColor: 'gray.500',
        borderWidth: 1,
      }}
      {...rest}
    >
      <Text
        fontSize='xs'
        color={isActive ? 'green.500' : 'gray.200'}
      >
        {size}
      </Text>
    </Pressable>
  );
}