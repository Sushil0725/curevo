import { Pressable, Text, View } from 'react-native';

type FooterButton = {
  key: string;
  label: string;
  icon: string; // emoji for now
};

type FooterProps = {
  buttons?: FooterButton[];
  onPressButton?: (key: string) => void;
};

const defaultButtons: FooterButton[] = [
  { key: 'home', label: 'Home', icon: '🏠' },
  { key: 'Chat', label: 'Chat', icon: '💭' },
  { key: 'Records', label: 'Records', icon: '📝' },
  { key: 'profile', label: 'Profile', icon: '👤' },
];

export const Footer = ({ buttons = defaultButtons, onPressButton }: FooterProps) => {
  return (
    <View className={styles.wrapper}>
      <View className={styles.row}>
        {buttons.map((btn) => (
          <Pressable
            key={btn.key}
            onPress={() => onPressButton?.(btn.key)}
            className={styles.button}
          >
            <Text className={styles.icon}>{btn.icon}</Text>
            <Text className={styles.label}>{btn.label}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

const styles = {
  wrapper: 'w-full py-2 px-4 bg-white border-t border-gray-200',
  row: 'flex-row justify-between',
  button: 'flex-1 items-center py-1',
  icon: 'text-xl',
  label: 'text-xs text-gray-600 mt-0.5',
};


