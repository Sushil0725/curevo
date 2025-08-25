import { AppointmentsList } from 'components/AppointmentsList';
import { Card } from 'components/Card';
import { Container } from 'components/Container';
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { InsightsList } from 'components/InsightsList';
import { MedicationsList } from 'components/MedicationsList';
import { ProvidersList } from 'components/ProvidersList';
import { VitalsSummary } from 'components/VitalsSummary';
import { ScrollView, View } from 'react-native';
import data from 'src/datas.json';

type HomeProps = {
  onNavigate?: (route: string) => void;
};

export default function Home({ onNavigate }: HomeProps) {
  const handleFooterPress = (key: string) => {
    onNavigate?.(key);
  };
  return (
    <View className="flex-1 bg-gray-100">
      <Header title="Curevo" />
      <Container>
        <ScrollView className="flex-1" contentContainerStyle={{ paddingVertical: 12 }}>
          <View className="gap-4">
            <Card title="Welcome" subtitle={`Good day, ${data.profile.name}`}></Card>

            <VitalsSummary items={data.vitals} />
            <AppointmentsList items={data.appointments} />
            <MedicationsList items={data.medications} />
            <ProvidersList items={data.providers} />
            <InsightsList items={data.insights} />
          </View>
        </ScrollView>
      </Container>
      <Footer onPressButton={handleFooterPress} />
    </View>
  );
}


