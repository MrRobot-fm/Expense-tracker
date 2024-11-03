import { Ionicons } from "@expo/vector-icons";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  DrawerToggleButton,
} from "@react-navigation/drawer";
import { Link, useRouter } from "expo-router";
import Drawer from "expo-router/drawer";
import React from "react";
import { Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const CustomDrawerContent = (props: any) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        scrollEnabled={false}
        contentContainerStyle={{ backgroundColor: "white", flex: 1 }}
        {...props}>
        <View style={{ padding: 15 }}>
          <Text style={{ fontSize: 26, fontWeight: 600 }}>Menu</Text>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};

export default function DrawerLayout() {
  const router = useRouter();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={CustomDrawerContent}
        screenOptions={{
          headerLeft: () => <DrawerToggleButton />,
          headerRight: () => (
            <Link href="/settings" asChild>
              <Ionicons name="settings-outline" size={25} />
            </Link>
          ),
          drawerActiveBackgroundColor: "#FCEED4",
          drawerActiveTintColor: "#FCAC12",
          drawerLabelStyle: {
            fontSize: 18,
          },
        }}>
        <Drawer.Screen
          name="(tabs)"
          options={{
            drawerLabel: "Home",
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="settings"
          options={{
            title: "Settings",
            drawerLabel: "Settings",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
