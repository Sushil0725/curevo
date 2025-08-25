import { Text, View } from 'react-native';

type Vital = { id: string; name: string; value: number | string; unit?: string };

export const VitalsSummary = ({ items }: { items: Vital[] }) => {
  return (
    <View className="rounded-xl bg-white p-4 shadow">
      <Text className="mb-3 text-base font-semibold">Vitals</Text>
      <View className="flex-row gap-3">
        {items.map((v) => (
          <View key={v.id} className="flex-1 rounded-lg bg-gray-50 p-3">
            <Text className="text-xs text-gray-500">{v.name}</Text>
            <Text className="mt-1 text-lg font-semibold">
              {v.value}
              {v.unit ? ` ${v.unit}` : ''}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};


