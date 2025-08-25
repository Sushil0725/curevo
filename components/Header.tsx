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
  wrapper: 'w-full pt-10 pb-2 px-6 bg-emerald-500 border-b border-gray-200',
  title: 'text-2xl font-bold text-center text-white',
};


