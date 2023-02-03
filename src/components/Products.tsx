import { FlatList, VStack } from 'native-base';
import { HeaderList } from './HeaderList';

import { ProductCard, ProductProps } from './ProductCard';
import { useNavigation } from '@react-navigation/native';
import { PRODUCTS } from '@utils/data/products';

type ProductsProps = {
  brand: string;
  data: ProductProps[];
}

export function Products({ data, brand }: ProductsProps) {
  const { navigate } = useNavigation();

  return (
    <VStack flex={1}>
      <HeaderList
        title={brand}
        counter={PRODUCTS.length}
      />
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ProductCard
            data={item}
            onPress={() => navigate('details', { productId: item.id })}
          />
        )}
        numColumns={2}
        _contentContainerStyle={{ alignItems: 'center', paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </VStack>
  );
}