import { Text, View } from 'react-native';

type Medication = { id: string; name: string; dose: string; schedule: string };

export const MedicationsList = ({ items }: { items: Medication[] }) => {
  return (
    <View className="rounded-xl bg-white p-4 shadow">
      <Text className="mb-3 text-base font-semibold">Medications</Text>
      <View className="gap-3">
        {items.map((m) => (
          <View key={m.id} className="rounded-lg border border-gray-100 p-3">
            <Text className="font-semibold">{m.name}</Text>
            <Text className="text-xs text-gray-500">{m.dose} • {m.schedule}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};


