import { Platform } from 'react-native';
import { useEffect, useState } from 'react';
import { 
  Heading, 
  HStack, 
  Image, 
  ScrollView, 
  Text, 
  useToast, 
  VStack 
} from 'native-base';
import { useNavigation, useRoute } from '@react-navigation/native';

import { ProductProps } from '@components/ProductCard';
import { ScreenHeader } from '@components/ScreenHeader';
import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { Sizes } from '@components/Sizes';

import { useCart } from '@hooks/useCart';
import { PRODUCTS } from '@utils/data/products';

type RouteParamsProps = {
  productId: string;
}

export function Details() {
  const [size, setSize] = useState('35');
  const [quantity, setQuantity] = useState('1');
  const [product, setProduct] = useState<ProductProps>({} as ProductProps);

  const toast = useToast();
  const route = useRoute();
  const { navigate } = useNavigation();
  const { addProductCart } = useCart();
  const { productId } = route.params as RouteParamsProps;

  async function handleAddProductCart() {
    try {
      await addProductCart({
        id: product.id,
        name: product.name,
        image: product.thumb,
        quantity: Number(quantity),
        size: product.size,
      });

      toast.show({
        title: 'Produto adicionado ao carrinho',
        placement: 'top',
        bgColor: 'green.500',
      });

      navigate('cart');
    } catch (error) {
      toast.show({
        title: 'Erro ao adicionar o produto ao carrinho',
        placement: 'top',
        bgColor: 'red.500',
      });
    }
  }

  useEffect(() => {
    const selected = PRODUCTS.filter(item => item.id === productId)[0] as ProductProps;
    setProduct(selected);
  }, [productId]);

  return (
    <VStack flex={1}>
      <ScreenHeader title='Detalhes do Produto' />
      <ScrollView>
        <Image
          w={56}
          h={56}
          alignSelf='center'
          alt={product.name}
          source={product.image}
          key={String(new Date().getTime())}
          resizeMode={Platform.OS === 'android' ? 'contain' : 'cover'}
        />
        <VStack p={6}>
          <HStack
            w='full'
            justifyContent='space-between'
            alignItems='center'
          >
            <VStack>
              <Heading
                fontFamily='heading'
                fontSize='xl'
                color='white'
              >
                {product.name}
              </Heading>
              <Text
                fontFamily='heading'
                fontSize='md'
                color='gray.200'
              >
                R$ {product.price}
              </Text>
            </VStack>
            <VStack alignItems='flex-end'>
              <Text
                pt={2}
                fontSize='sm'
                color='gray.200'
                textAlign='justify'
              >
                Quantidade
              </Text>
              <Input
                w={14}
                textAlign='center'
                keyboardType='numeric'
                onChangeText={setQuantity}
                value={quantity}
              />
            </VStack>
          </HStack>
          <Text
            pt={2}
            fontSize='sm'
            color='gray.200'
            textAlign='justify'
          >
            {product.description}
          </Text>
          <Sizes 
            onSelect={setSize}
            selected={size}
          />
          <Button 
            title='Adicionar ao carrinho'
            onPress={handleAddProductCart}
          />
        </VStack>
      </ScrollView>
    </VStack>
  );
}