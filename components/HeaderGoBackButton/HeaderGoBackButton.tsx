import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Platform } from "react-native";

interface HeaderGoBackButtonProps {
  tintColor: string | undefined;
  iconName?: keyof typeof Ionicons.glyphMap;
  size?: number;
}

export const HeaderGoBackButton = ({
  tintColor,
  iconName = "chevron-back",
  size = 25,
}: HeaderGoBackButtonProps) => {
  const router = useRouter();

  if (Platform.OS === "ios") {
    return <Ionicons color={tintColor} name={iconName} size={size} onPress={() => router.back()} />;
  }
};
