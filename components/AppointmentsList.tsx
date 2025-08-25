import { Text, View } from 'react-native';

type Appointment = { id: string; title: string; date: string; time: string };

export const AppointmentsList = ({ items }: { items: Appointment[] }) => {
  return (
    <View className="rounded-xl bg-white p-4 shadow">
      <Text className="mb-3 text-base font-semibold">Upcoming Appointments</Text>
      <View className="gap-3">
        {items.map((a) => (
          <View key={a.id} className="rounded-lg border border-gray-100 p-3">
            <Text className="font-semibold">{a.title}</Text>
            <Text className="text-xs text-gray-500">{a.date} • {a.time}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};


