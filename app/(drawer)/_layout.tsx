import { CustomDrawerContent } from "@/components/CustomDrawerContent";
import Drawer from "expo-router/drawer";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={CustomDrawerContent}
        screenOptions={{
          drawerActiveBackgroundColor: "#FCEED4",
          drawerActiveTintColor: "#FCAC12",
          drawerLabelStyle: {
            fontSize: 18,
          },
          drawerType: "front",
        }}>
        <Drawer.Screen
          name="(tabs)"
          options={{
            drawerLabel: "Home",
            headerShown: false,
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
