import { Container } from 'components/Container';
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { Text, View } from 'react-native';

type ProfileProps = {
  onNavigate?: (route: string) => void;
};

export default function Profile({ onNavigate }: ProfileProps) {
  return (
    <View className="flex-1 bg-gray-100">
      <Header title="Profile" />
      <Container>
        <View className="flex-1 items-center justify-center">
          <Text className="text-lg">Your profile</Text>
        </View>
      </Container>
      <Footer onPressButton={(key) => onNavigate?.(key)} />
    </View>
  );
}


