import { Ionicons } from "@expo/vector-icons";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { Link, Tabs } from "expo-router";
import React from "react";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerLeft: () => <DrawerToggleButton />,
        headerRight: () => (
          <Link href="/settings" asChild>
            <Ionicons name="settings-outline" size={25} />
          </Link>
        ),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home Tabs",
        }}
      />
      <Tabs.Screen name="expenses" options={{ title: "Expenses Tab" }} />
    </Tabs>
  );
}
