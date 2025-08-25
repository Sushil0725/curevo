import { Container } from 'components/Container';
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';

type ChatProps = {
  onNavigate?: (route: string) => void;
};

export default function Chat({ onNavigate }: ChatProps) {
  return (
    <View className="flex-1 bg-gray-100">
      <Header title="Chat" />
      <Container>
        <View className="flex-1">
          <ScrollView className="flex-1 px-2" contentContainerStyle={{ paddingVertical: 12 }}>
            <View className="mb-3 self-start max-w-[80%] rounded-2xl bg-white px-3 py-2 shadow">
              <Text className="text-gray-800">Hi there! How can I help you today?</Text>
              <Text className="mt-1 text-[10px] text-gray-400">09:30</Text>
            </View>
            <View className="mb-3 self-end max-w-[80%] rounded-2xl bg-emerald-500 px-3 py-2 shadow">
              <Text className="text-white">I need my latest lab report.</Text>
              <Text className="mt-1 text-[10px] text-emerald-100 text-right">09:31</Text>
            </View>
            <View className="mb-3 self-start max-w-[80%] rounded-2xl bg-white px-3 py-2 shadow">
              <Text className="text-gray-800">Sure, pulling it up now.</Text>
              <Text className="mt-1 text-[10px] text-gray-400">09:32</Text>
            </View>
          </ScrollView>

          <View className="flex-row items-center gap-2 border-t border-gray-200 bg-white px-3 py-2">
            <TextInput
              placeholder="Type a message"
              className="flex-1 rounded-full border border-gray-200 bg-gray-50 px-4 py-2"
            />
            <Pressable className="rounded-full bg-emerald-500 px-4 py-2">
              <Text className="font-semibold text-white">Send</Text>
            </Pressable>
          </View>
        </View>
      </Container>
      <Footer onPressButton={(key) => onNavigate?.(key)} />
    </View>
  );
}


