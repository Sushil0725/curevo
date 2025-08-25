import { Text, View } from 'react-native';

type FooterProps = {
  text?: string;
};

export const Footer = ({ text = '© 2025 Curevo' }: FooterProps) => {
  return (
    <View className={styles.wrapper}>
      <Text className={styles.text}>{text}</Text>
    </View>
  );
};

const styles = {
  wrapper: 'w-full py-3 px-6 bg-white border-t border-gray-200',
  text: 'text-center text-gray-500',
};


