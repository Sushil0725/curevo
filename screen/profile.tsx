import { Container } from 'components/Container';
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { Image, Pressable, ScrollView, Text, TextInput, View } from 'react-native';

type ProfileProps = {
  onNavigate?: (route: string) => void;
};

export default function Profile({ onNavigate }: ProfileProps) {
  return (
    <View className="flex-1 bg-gray-100">
      <Header title="Profile" />
      <Container>
        <ScrollView className="flex-1" contentContainerStyle={{ paddingVertical: 12 }}>
          <View className="items-center">
            <View className="h-24 w-24 overflow-hidden rounded-full bg-emerald-100">
              <Image
                source={{ uri: 'https://picsum.photos/200' }}
                className="h-full w-full"
              />
            </View>
            <Text className="mt-3 text-lg font-semibold">Alex Johnson</Text>
            <Text className="text-gray-500">alex.johnson@example.com</Text>
          </View>

          <View className="mt-5 rounded-xl bg-white p-4 shadow">
            <Text className="mb-3 text-base font-semibold">Personal Info</Text>
            <View className="gap-3">
              <TextInput placeholder="Full name" className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2" />
              <TextInput placeholder="Email" keyboardType="email-address" className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2" />
              <TextInput placeholder="Phone" keyboardType="phone-pad" className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2" />
            </View>
            <View className="mt-4 flex-row justify-end">
              <Pressable className="rounded bg-emerald-500 px-4 py-2">
                <Text className="font-semibold text-white">Save</Text>
              </Pressable>
            </View>
          </View>

          <View className="mt-5 rounded-xl bg-white p-4 shadow">
            <Text className="mb-3 text-base font-semibold">Settings</Text>
            <View className="gap-2">
              <View className="flex-row items-center justify-between">
                <Text>Notifications</Text>
                <Text className="text-gray-400">On</Text>
              </View>
              <View className="flex-row items-center justify-between">
                <Text>Dark mode</Text>
                <Text className="text-gray-400">Off</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </Container>
      <Footer onPressButton={(key) => onNavigate?.(key)} />
    </View>
  );
}


