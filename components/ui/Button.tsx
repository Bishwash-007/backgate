import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

export type ButtonProps = TouchableOpacityProps & {
  title: string;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  title,
  className = "",
  style,
  onPress,
  activeOpacity = 0.8,
  ...props
}) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={activeOpacity}
    style={style}
    className={`
      bg-muted-900 dark:bg-muted-200
      rounded-xl px-4 py-4
      border border-muted-300 dark:border-muted-700
      ${className}
    `}
    {...props}
  >
    <Text className="text-center text-base font-poppinsSemibold text-white dark:text-black">
      {title}
    </Text>
  </TouchableOpacity>
);

export default Button;
