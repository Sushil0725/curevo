import { ReactNode } from 'react';
import { Pressable, Text, View, ViewStyle } from 'react-native';

type CardVariant = 'elevated' | 'flat' | 'outlined';

type CardProps = {
  title?: string;
  subtitle?: string;
  footer?: ReactNode;
  children?: ReactNode;
  onPress?: () => void;
  disabled?: boolean;
  variant?: CardVariant;
  className?: string;
  style?: ViewStyle | ViewStyle[];
};

const baseWrapper = 'rounded-xl p-4 bg-white';
const variants: Record<CardVariant, string> = {
  elevated: `${baseWrapper} shadow-md`,
  flat: `${baseWrapper}`,
  outlined: `${baseWrapper} border border-gray-200`,
};

export const Card = ({
  title,
  subtitle,
  footer,
  children,
  onPress,
  disabled = false,
  variant = 'elevated',
  className = '',
  style,
}: CardProps) => {
  const content = (
    <View className={`${variants[variant]} ${className}`} style={style}>
      {title ? <Text className="text-lg font-semibold">{title}</Text> : null}
      {subtitle ? <Text className="text-sm text-gray-500 mt-0.5">{subtitle}</Text> : null}
      {title || subtitle ? <View className="h-[1px] bg-gray-100 my-3" /> : null}
      {children}
      {footer ? <View className="mt-3">{footer}</View> : null}
    </View>
  );

  if (onPress) {
    return (
      <Pressable onPress={onPress} disabled={disabled} className={disabled ? 'opacity-60' : ''}>
        {content}
      </Pressable>
    );
  }

  return content;
};


