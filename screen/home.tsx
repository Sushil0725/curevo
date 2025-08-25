import { Container } from 'components/Container';
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { View } from 'react-native';
import { ScreenContent } from './ScreenContent';

export default function Home() {
  return (
    <View className="flex-1 bg-gray-100">
      <Header title="Curevo" />
      <Container>
        <ScreenContent title="Home" path="screen/home.tsx" />
      </Container>
      <Footer />
    </View>
  );
}


