import { CloseIcon, HStack, Icon, IconButton, Text } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

type NotificationProps = {
  title: string;
  onClose: () => void;
}

export function Notification({title, onClose}: NotificationProps){
  return (
    <HStack 
      p={4}
      pt={12}
      w='full'
      top={0}
      bgColor='gray.200'
      position='absolute'
      alignItems='center'
      justifyContent='space-between'
    >
      <Icon 
        as={Ionicons}
        name='notifications-outline'
        color='black'
        size={5}
        mr={2}
      />
      <Text
        flex={1}
        fontSize='md'
        color='black'
      >
        {title}
      </Text>
      <IconButton 
        variant='unstyled'
        _focus={{ borderWidth: 0 }}
        icon={<CloseIcon size='3' />}
        _icon={{ color: 'coolGray.600' }}
        color='black'
        onPress={onClose}
      />
    </HStack>
  );
}