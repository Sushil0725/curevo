import { Container } from 'components/Container';
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { useMemo, useState } from 'react';
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import data from 'src/datas.json';

type RecordsProps = {
  onNavigate?: (route: string) => void;
};

export default function Records({ onNavigate }: RecordsProps) {
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return data.records;
    return data.records.filter((r) => r.title.toLowerCase().includes(q));
  }, [query]);
  return (
    <View className="flex-1 bg-gray-100">
      <Header title="Records" />
      <Container>
        <View className="flex-1">
          <View className="mb-3 flex-row items-center gap-2">
            <TextInput value={query} onChangeText={setQuery} placeholder="Search records" className="flex-1 rounded-lg bg-white px-3 py-2 shadow" />
            <Pressable className="rounded-lg bg-emerald-500 px-3 py-2">
              <Text className="text-white">Filter</Text>
            </Pressable>
          </View>
          <ScrollView className="flex-1" contentContainerStyle={{ paddingVertical: 6 }}>
            {filtered.map((rec) => (
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


