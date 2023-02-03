import { FlatList, Heading, VStack } from 'native-base';
import { Size } from './Size';

type SizesProps = {
  onSelect: (value: string) => void;
  selected: string;
}

export function Sizes({ onSelect, selected }: SizesProps) {
  const sizes = ['35', '36', '37', '38', '39', '40', '41'];

  return (
    <VStack my={8}>
      <Heading
        mb={3}
        fontFamily='heading'
        fontSize='md'
        color='gray.400'
      >
        Tamanhos
      </Heading>
      <FlatList
        data={sizes}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Size
            size={item}
            isActive={selected === item}
            onPress={() => onSelect(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{ pr: 8 }}
        maxH={10}
        minH={10}
      />
    </VStack>
  );
}