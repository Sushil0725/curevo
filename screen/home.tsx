import { Card } from 'components/Card';
import { Container } from 'components/Container';
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { ScrollView, View } from 'react-native';

export default function Home() {
  const handleFooterPress = (key: string) => {
    console.log('Footer pressed:', key);
  };
  return (
    <View className="flex-1 bg-gray-100">
      <Header title="Curevo" />
      <Container>
        <ScrollView className="flex-1" contentContainerStyle={{ paddingVertical: 12 }}>
          <View className="gap-4">
            <Card title="Welcome" subtitle="Let’s get you started" />

            <Card
              title="Your Health Summary"
              subtitle="Overview of recent activity"
              footer={<View className="flex-row justify-between"><View /><View /></View>}
            >
              <View className="flex-row gap-4">
                <View className="flex-1 rounded-lg bg-emerald-50 p-3">
                  <View className="h-2 w-12 rounded bg-emerald-300 mb-2" />
                  <View className="h-2 w-20 rounded bg-emerald-200" />
                </View>
                <View className="flex-1 rounded-lg bg-emerald-50 p-3">
                  <View className="h-2 w-12 rounded bg-emerald-300 mb-2" />
                  <View className="h-2 w-20 rounded bg-emerald-200" />
                </View>
              </View>
            </Card>

            <Card
              title="Upcoming Appointments"
              subtitle="No appointments scheduled"
              variant="outlined"
            />

            <Card
              title="Recommendations"
              subtitle="Based on your profile"
              variant="flat"
            >
              <View className="rounded-lg bg-gray-50 p-3">
                <View className="h-2 w-28 rounded bg-gray-300 mb-2" />
                <View className="h-2 w-24 rounded bg-gray-200" />
              </View>
            </Card>
          </View>
        </ScrollView>
      </Container>
      <Footer onPressButton={handleFooterPress} />
    </View>
  );
}


