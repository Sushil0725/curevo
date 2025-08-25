import { Text, View } from 'react-native';

type Insight = { id: string; title: string; detail: string };

export const InsightsList = ({ items }: { items: Insight[] }) => {
  return (
    <View className="rounded-xl bg-white p-4 shadow">
      <Text className="mb-3 text-base font-semibold">Insights</Text>
      <View className="gap-3">
        {items.map((i) => (
          <View key={i.id} className="rounded-lg border border-gray-100 p-3">
            <Text className="font-semibold">{i.title}</Text>
            <Text className="text-xs text-gray-600">{i.detail}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};


