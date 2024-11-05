import {
  type DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useRouter } from "expo-router";
import { Text, View } from "react-native";

export const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const router = useRouter();

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
        <DrawerItem
          label="Settings"
          labelStyle={{ fontSize: 18 }}
          onPress={() => router.push("/settings")}
          {...props}
        />
      </DrawerContentScrollView>
    </View>
  );
};
