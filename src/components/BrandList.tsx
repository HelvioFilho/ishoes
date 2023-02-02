import { FlatList } from 'native-base';

import { Brand } from './Brand';
import { BRANDS } from '@utils/data/brands';

type BrandListProps = {
  onSelect: (value: string) => void;
  selected: string;
}

export function BrandList({ onSelect, selected }: BrandListProps) {
  return (
    <FlatList
      data={BRANDS}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <Brand
          image={item.image}
          isActive={selected === item.name}
          onPress={() => onSelect(item.name)}
        />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      _contentContainerStyle={{ px: 8 }}
      mt={10}
      maxH={10}
      minH={10}
    />
  );
}