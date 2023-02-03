import { Input as NativeBaseInput, IInputProps } from 'native-base';

export function Input({ ...rest }: IInputProps) {
  return (
    <NativeBaseInput
      h={14}
      px={4}
      fontFamily='body'
      fontSize='md'
      bg='gray.800'
      color='white'
      borderColor='gray.600'
      placeholderTextColor='gray.300'
      _focus={{
        bg: 'gray.800',
        borderColor: 'gray.600',
      }}
      {...rest}
    />
  );
}