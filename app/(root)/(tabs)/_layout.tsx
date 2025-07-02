import { useThemeStore } from "@/hooks/useThemeStore";
import {
  Entypo,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Tabs, useRouter } from "expo-router";
import { Platform, useColorScheme } from "react-native";

type IconLib =
  | "Ionicons"
  | "FontAwesome"
  | "FontAwesome5"
  | "MaterialIcons"
  | "MaterialCommunityIcons"
  | "Entypo";

const TabBarIcon = ({
  name,
  lib = "Ionicons",
  color,
  size = 24,
}: {
  name: string;
  lib?: IconLib;
  color: string;
  size?: number;
}) => {
  switch (lib) {
    case "FontAwesome":
      return <FontAwesome name={name as any} size={size} color={color} />;
    case "FontAwesome5":
      return <FontAwesome5 name={name as any} size={size} color={color} />;
    case "MaterialIcons":
      return <MaterialIcons name={name as any} size={size} color={color} />;
    case "MaterialCommunityIcons":
      return (
        <MaterialCommunityIcons name={name as any} size={size} color={color} />
      );
    case "Entypo":
      return <Entypo name={name as any} size={size} color={color} />;
    case "Ionicons":
    default:
      return <Ionicons name={name as any} size={size} color={color} />;
  }
};

export default function TabsLayout() {
  const router = useRouter();
  const { theme } = useThemeStore(); // Assuming this gives you "light" or "dark"
  const colorScheme = useColorScheme();

  const isDark = (theme ?? colorScheme) === "dark";

  const activeTintColor = isDark ? "#fff" : "#000";
  const inactiveTintColor = isDark ? "#888" : "#999";
  const tabBarBg = isDark ? "#000" : "#fff";
  const borderTopColor = isDark ? "#222" : "#ccc";

  return (
    <Tabs
      screenOptions={{
        animation: "shift",
        tabBarShowLabel: false,
        tabBarActiveTintColor: activeTintColor,
        tabBarInactiveTintColor: inactiveTintColor,
        tabBarStyle: {
          height: Platform.OS === "ios" ? 80 : 60,
          backgroundColor: tabBarBg,
          borderTopWidth: 0.2,
          borderTopColor,
        },
      }}
    >
      <Tabs.Screen
        name="feed"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "search" : "search-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "Post",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "add-circle" : "add-circle-outline"}
              color={color}
              size={28}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name={focused ? "bell" : "bell-outline"}
              color={color}
              size={22}
              lib="MaterialCommunityIcons"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "user" : "user-o"}
              color={color}
              lib="FontAwesome"
              size={22}
            />
          ),
        }}
      />
    </Tabs>
  );
}
