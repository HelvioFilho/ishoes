import { FlatList, VStack } from 'native-base';
import { HeaderList } from './HeaderList';

import { ProductCard, ProductProps } from './ProductCard';
import { PRODUCTS } from '@utils/data/products';

type ProductsProps = {
  brand: string;
  data: ProductProps[];
}

export function Products({ data, brand }: ProductsProps) {
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
            onPress={() => { }}
          />
        )}
        numColumns={2}
        _contentContainerStyle={{ alignItems: 'center', paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </VStack>
  );
}