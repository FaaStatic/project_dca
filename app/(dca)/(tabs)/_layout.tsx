import { useStandalone } from "@untr/core-hooks";
import { Tabs, router } from "expo-router";
import {
  TabCategory,
  TabCategoryInactive,
  TabHome,
  TabInbox,
  TabProfile,
} from "../../../assets/icons";
import { TabIcon } from "@untr/core-components/src/components/tab-icon";
import { Header } from "../../../components/header";

export default function TabsLayout() {
  const { isStandalone } = useStandalone();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#FFD500",
        tabBarInactiveTintColor: "#A8A8A8",
      }}
    >
      <Tabs.Screen
        name="dashboard"
        options={{
          title: "Dashboard",
          header: () => (
            <Header
              buttonBack={isStandalone}
              onPressBack={() => {
                router.navigate("/./home");
              }}
              headerLabel="Dashboard"
            />
          ),
          tabBarIcon: ({ focused }) => {
            return (
              <TabIcon source={TabHome} active={focused} alt="Icon Dashboard" />
            );
          },
        }}
      />
      <Tabs.Screen
        name="category"
        options={{
          title: "Category",
          headerTitle: "Category",
          headerShadowVisible: false,
          tabBarIcon: ({ focused }) => {
            return (
              <TabIcon
                source={focused ? TabCategory : TabCategoryInactive}
                active={focused}
                alt="Icon Category"
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="inbox"
        options={{
          title: "Inbox",
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <TabIcon source={TabInbox} active={focused} alt="Icon Inbox" />
            );
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <TabIcon
                source={TabProfile}
                active={focused}
                alt="Icon Profile"
              />
            );
          },
        }}
      />
    </Tabs>
  );
}
