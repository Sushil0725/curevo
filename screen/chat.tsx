import { Container } from 'components/Container';
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import data from 'src/datas.json';

type ChatProps = {
  onNavigate?: (route: string) => void;
};

export default function Chat({ onNavigate }: ChatProps) {
  return (
    <View className="flex-1 bg-gray-100">
      <Header title="Chat" />
      <Container>
        <View className="flex-1">
          <ScrollView className="flex-1" contentContainerStyle={{ paddingVertical: 12 }}>
            {data.chat.messages.map((m) => (
              <View
                key={m.id}
                className={`mb-3 flex-row items-end ${m.from === 'you' ? 'self-end' : 'self-start'} gap-2`}
              >
                {m.from !== 'you' && (
                  <View className="h-5 w-5 items-center justify-center rounded-full bg-emerald-500">
                    <Text className="text-xs font-bold text-white">AI</Text>
                  </View>
                )}
                <View
                  className={`max-w-[75%] rounded-2xl px-3 py-2 shadow ${
                    m.from === 'you' ? 'bg-emerald-500' : 'bg-white'
                  }`}
                >
                  <Text className={m.from === 'you' ? 'text-white' : 'text-gray-800'}>{m.text}</Text>
                  <Text
                    className={`mt-1 text-[10px] ${
                      m.from === 'you' ? 'text-emerald-100 text-right' : 'text-gray-400'
                    }`}
                  >
                    {m.time}
                  </Text>
                </View>
                {m.from === 'you' && (
                  <View className="h-8 w-8 items-center justify-center rounded-full bg-gray-300">
                    <Text className="text-xs font-bold text-gray-800">You</Text>
                  </View>
                )}
              </View>
            ))}
          </ScrollView>

          <View className="flex-row items-center rounded-full gap-2 border-t border-gray-200 bg-white px-3 py-3">
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


