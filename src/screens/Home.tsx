
import { useEffect, useState } from 'react';
import { VStack } from 'native-base';

import { BrandList } from '@components/BrandList';
import { HomeHeader } from '@components/HomeHeader';
import { ProductProps } from '@components/ProductCard';
import { Products } from '@components/Products';

import { PRODUCTS } from '@utils/data/products';

export function Home() {
  const [brandSelected, setBrandSelected] = useState('Nike');
  const [products, setProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    const filteredProducts = PRODUCTS.filter(product => product.brand === brandSelected) as ProductProps[];
    setProducts(filteredProducts);
  }, [brandSelected]);

  return (
    <VStack flex={1}>
      <HomeHeader />
      <BrandList
        onSelect={setBrandSelected}
        selected={brandSelected}
      />
      <Products
        brand={brandSelected}
        data={products}
      />
    </VStack>
  );
}