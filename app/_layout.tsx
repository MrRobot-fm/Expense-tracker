import { HeaderGoBackButton } from "@/components/HeaderGoBackButton/HeaderGoBackButton";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  return (
    <Stack>
      <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
      <Stack.Screen
        name="settings"
        options={{
          title: "Settings",
          animation: "slide_from_bottom",
          presentation: "containedModal",
          headerBackVisible: true,
          headerLeft: ({ tintColor }) => <HeaderGoBackButton tintColor={tintColor} />,
        }}
      />
    </Stack>
  );
}
