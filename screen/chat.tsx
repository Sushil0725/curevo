import { Container } from 'components/Container';
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { Text, View } from 'react-native';

type ChatProps = {
  onNavigate?: (route: string) => void;
};

export default function Chat({ onNavigate }: ChatProps) {
  return (
    <View className="flex-1 bg-gray-100">
      <Header title="Chat" />
      <Container>
        <View className="flex-1 items-center justify-center">
          <Text className="text-lg">Chat will live here</Text>
        </View>
      </Container>
      <Footer onPressButton={(key) => onNavigate?.(key)} />
    </View>
  );
}


