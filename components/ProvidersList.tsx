import { Text, View } from 'react-native';

type Provider = { id: string; name: string; specialty: string };

export const ProvidersList = ({ items }: { items: Provider[] }) => {
  return (
    <View className="rounded-xl bg-white p-4 shadow">
      <Text className="mb-3 text-base font-semibold">Care Team</Text>
      <View className="gap-3">
        {items.map((p) => (
          <View key={p.id} className="rounded-lg border border-gray-100 p-3">
            <Text className="font-semibold">{p.name}</Text>
            <Text className="text-xs text-gray-500">{p.specialty}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};


