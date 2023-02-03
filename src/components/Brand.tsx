import { Pressable, IPressableProps, Image } from 'native-base';
import { ImageSourcePropType, Platform } from 'react-native';

type BrandProps = IPressableProps & {
  image: ImageSourcePropType;
  isActive: boolean;
}

export function Brand({ image, isActive, ...rest }: BrandProps) {
  return (
    <Pressable
      mr={3}
      w={24}
      h={10}
      bg='gray.600'
      rounded='md'
      justifyContent='center'
      alignItems='center'
      overflow='hidden'
      isPressed={isActive}
      _pressed={{
        borderColor: 'green.500',
        borderWidth: 1
      }}
      {...rest}
    >
      <Image
        source={image}
        alt='Imagem da brand'
        w={20}
        h={7}
        resizeMode={Platform.OS === 'android' ? 'contain' : 'cover'}
      />
    </Pressable>
  );
}