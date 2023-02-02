import { ImageSourcePropType, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Heading, Image, Text, VStack } from 'native-base';

export type ProductProps = {
  id: string;
  brand: string;
  name: string;
  price: string;
  thumb: ImageSourcePropType;
  image: ImageSourcePropType;
  quality: string;
  size: number;
  description: string;
}

type ProductCardProps = TouchableOpacityProps & {
  data: ProductProps;
}

export function ProductCard({ data, ...rest }: ProductCardProps) {
  return (
    <TouchableOpacity>
      <VStack
        w={40}
        h={40}
        p={2}
        m={2}
        bgColor='gray.500'
        rounded='md'
        alignItems='center'
      >
        <Image
          flex={1}
          source={data.thumb}
          alt={data.name}
          resizeMode='cover'
        />
        <Heading
          color='white'
          fontFamily='heading'
          fontSize='lg'
          mt={2}
        >
          {data.name}
        </Heading>
        <Text
          color='gray.200'
          fontSize='sm'
        >
          R$ {data.price}
        </Text>
      </VStack>
    </TouchableOpacity>
  );
}