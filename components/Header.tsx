import { Text, View } from 'react-native';

type HeaderProps = {
  title?: string;
};

export const Header = ({ title = 'Curevo' }: HeaderProps) => {
  return (
    <View className={styles.wrapper}>
      <Text className={styles.title}>{title}</Text>
    </View>
  );
};

const styles = {
  wrapper: 'w-full py-9 px-6 bg-emerald-500 border-b border-gray-200 mt-1',
  title: 'text-2xl font-bold text-center text-white',
};


