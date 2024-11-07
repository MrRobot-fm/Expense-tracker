import { DrawerToggleButton } from "@react-navigation/drawer";
import { Tabs } from "expo-router";
import React from "react";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerLeft: () => <DrawerToggleButton />,
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
