import { Stack } from 'expo-router';
import { View } from 'react-native';

import { Checkbox } from '~/components/nativewindui/Checkbox';

export default function CheckboxScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Checkbox' }} />
      <View className="items-center justify-center flex-1 py-4">
        <Checkbox />
      </View>
    </>
  );
}