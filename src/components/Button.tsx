import { 
  Button as ButtonNativeBase, 
  IButtonProps, 
  Text 
} from 'native-base';

type ButtonProps = IButtonProps & {
  title: string;
}

export function Button({title, ...rest}: ButtonProps){
  return (
    <ButtonNativeBase
      flex={1}
      minH={14}
      maxH={14}
      bg='green.700'
      borderColor='green.500'
      borderWidth={0}
      rounded='sm'
      _pressed={{ bg: 'green.500'}}
      {...rest}
    >
      <Text
        fontFamily='heading'
        fontSize='sm'
        color='white'
      >
        {title}
      </Text>     
    </ButtonNativeBase>
  );
}