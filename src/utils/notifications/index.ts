import OneSignal from 'react-native-onesignal';

type UserInfoProps = {
  user_name: string;
  user_email: string;
}

export function tagUserEmailCreate(email: string) {
  OneSignal.sendTag('email', email);
}

export function tagUserEmailDelete() {
  OneSignal.deleteTag('email');
}

export function tagUserInfoCreate(userInfo: UserInfoProps) {
  OneSignal.sendTags(userInfo);
}

export function hasNotificationOpened() {
  return OneSignal.setNotificationOpenedHandler((response) => {
    const { actionId } = response.action as any;

    switch (actionId) {
      case '1':
        return console.log('Ver todas');
      case '2':
        return console.log('Ver pedido');
      default:
        return console.log('Nenhuma ação');
    }
  });
}