import { Container } from 'components/Container';
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';

type RecordsProps = {
  onNavigate?: (route: string) => void;
};

export default function Records({ onNavigate }: RecordsProps) {
  return (
    <View className="flex-1 bg-gray-100">
      <Header title="Records" />
      <Container>
        <View className="flex-1">
          <View className="mb-3 flex-row items-center gap-2">
            <TextInput placeholder="Search records" className="flex-1 rounded-lg bg-white px-3 py-2 shadow" />
            <Pressable className="rounded-lg bg-emerald-500 px-3 py-2">
              <Text className="text-white">Filter</Text>
            </Pressable>
          </View>
          <ScrollView className="flex-1" contentContainerStyle={{ paddingVertical: 6 }}>
            {[
              { id: 'r1', title: 'CBC Report', date: 'Apr 12, 2025' },
              { id: 'r2', title: 'X-Ray Chest', date: 'Mar 02, 2025' },
              { id: 'r3', title: 'MRI Brain', date: 'Jan 18, 2025' },
            ].map((rec) => (
              <View key={rec.id} className="mb-3 rounded-xl bg-white p-4 shadow">
                <Text className="text-base font-semibold">{rec.title}</Text>
                <Text className="text-xs text-gray-500">{rec.date}</Text>
                <View className="mt-3 flex-row justify-end gap-3">
                  <Pressable className="rounded bg-gray-100 px-3 py-1">
                    <Text className="text-gray-700">View</Text>
                  </Pressable>
                  <Pressable className="rounded bg-emerald-500 px-3 py-1">
                    <Text className="text-white">Download</Text>
                  </Pressable>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </Container>
      <Footer onPressButton={(key) => onNavigate?.(key)} />
    </View>
  );
}


