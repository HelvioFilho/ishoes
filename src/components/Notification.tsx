import { CloseIcon, HStack, Icon, IconButton, Text, Pressable } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { OSNotification } from 'react-native-onesignal';

type NotificationProps = {
  data: OSNotification;
  onClose: () => void;
}

type AdditionalDataProps = {
  route?: 'details';
  productId?: string;
}

export function Notification({ data, onClose }: NotificationProps) {

  const { navigate } = useNavigation()

  function handleOnPress() {
    const { route, productId } = data.additionalData as AdditionalDataProps;
    
    if(route === 'details' && productId){
      navigate(route, { productId });
      onClose();
    }
  }

  return (
    <Pressable
      p={4}
      pt={12}
      top={0}
      w='full'
      bgColor='gray.200'
      position='absolute'
      onPress={handleOnPress}
    >
      <HStack
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
          {data.title}
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
    </Pressable>
  );
}