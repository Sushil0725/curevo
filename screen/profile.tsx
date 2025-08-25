import { Container } from 'components/Container';
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { useState } from 'react';
import { Image, Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import data from 'src/datas.json';

type ProfileProps = {
  onNavigate?: (route: string) => void;
};

export default function Profile({ onNavigate }: ProfileProps) {
  const [name, setName] = useState(data.profile.name);
  const [email, setEmail] = useState(data.profile.email);
  const [phone, setPhone] = useState(data.profile.phone);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 1500);
  };
  return (
    <View className="flex-1 bg-gray-100">
      <Header title="Profile" />
      <Container>
        <ScrollView className="flex-1" contentContainerStyle={{ paddingVertical: 12 }}>
          <View className="items-center">
            <View className="h-24 w-24 overflow-hidden rounded-full bg-emerald-100">
              <Image source={{ uri: data.profile.avatar }} className="h-full w-full" />
            </View>
            <Text className="mt-3 text-lg font-semibold">{data.profile.name}</Text>
            <Text className="text-gray-500">{data.profile.email}</Text>
          </View>

          <View className="mt-5 rounded-xl bg-white p-4 shadow">
            <Text className="mb-3 text-base font-semibold">Personal Info</Text>
            <View className="gap-3">
              <TextInput value={name} onChangeText={setName} placeholder="Full name" className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2" />
              <TextInput value={email} onChangeText={setEmail} keyboardType="email-address" placeholder="Email" className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2" />
              <TextInput value={phone} onChangeText={setPhone} keyboardType="phone-pad" placeholder="Phone" className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2" />
            </View>
            <View className="mt-4 flex-row justify-end">
              <Pressable onPress={handleSave} className="rounded bg-emerald-500 px-4 py-2">
                <Text className="font-semibold text-white">{saved ? 'Saved' : 'Save'}</Text>
              </Pressable>
            </View>
          </View>

          <View className="mt-5 rounded-xl bg-white p-4 shadow">
            <Text className="mb-3 text-base font-semibold">Settings</Text>
            <View className="gap-2">
              <View className="flex-row items-center justify-between">
                <Text>Notifications</Text>
                <Text className="text-gray-400">{data.profile.settings.notifications ? 'On' : 'Off'}</Text>
              </View>
              <View className="flex-row items-center justify-between">
                <Text>Dark mode</Text>
                <Text className="text-gray-400">{data.profile.settings.darkMode ? 'On' : 'Off'}</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </Container>
      <Footer onPressButton={(key) => onNavigate?.(key)} />
    </View>
  );
}


