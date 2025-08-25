import { Container } from 'components/Container';
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { Text, View } from 'react-native';

type RecordsProps = {
  onNavigate?: (route: string) => void;
};

export default function Records({ onNavigate }: RecordsProps) {
  return (
    <View className="flex-1 bg-gray-100">
      <Header title="Records" />
      <Container>
        <View className="flex-1 items-center justify-center">
          <Text className="text-lg">Records and documents</Text>
        </View>
      </Container>
      <Footer onPressButton={(key) => onNavigate?.(key)} />
    </View>
  );
}


