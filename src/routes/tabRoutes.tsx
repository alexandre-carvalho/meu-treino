import React from "react";
import {
  Image,
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Models
import { TabBarItem, tabBar } from "~/model/tabBar";

// Services
import { navigate } from "~/services/navigation";

// Styles
import theme from "~/themes";

// Authenticated routes
import Home from "~/views/home";
import Home2 from "~/views/home2";

const Tab = createBottomTabNavigator();
const TabRoutes: React.FC = () => {
  function handlePress(item: TabBarItem) {
    if (!item.route) return;
    navigate(item);
  }

  function TabBar({ state }: any) {
    return (
      <SafeAreaView
        style={{
          maxHeight: 100,
          borderTopWidth: 0.5,
          backgroundColor: `${theme.colors.white.n0}`,
          borderTopColor: `${theme.colors.grey.n12}`,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            paddingHorizontal: 15,
            paddingVertical: 5,
            left: -10,
          }}
        >
          {tabBar.map((item: TabBarItem, index: any) => {
            const isFocused = state.index === index;

            return (
              item.active === true && (
                <TouchableOpacity
                  key={index}
                  onPress={() => handlePress(item)}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    height: 75,
                    width: 85,
                    opacity: isFocused ? 1 : 0.5,
                  }}
                >
                  <Image
                    source={item.icon}
                    style={{
                      width: 32,
                      height: 32,
                      marginBottom: 2,
                    }}
                    resizeMode={"contain"}
                  />

                  <Text
                    style={{
                      flexWrap: "wrap",
                      textAlign: "center",
                      fontSize: 12,
                      width: 85,
                      color: `${theme.colors.blue.n10}`,
                    }}
                  >
                    {item.label}
                  </Text>
                </TouchableOpacity>
              )
            );
          })}
        </View>
      </SafeAreaView>
    );
  }

  return (
    <Tab.Navigator
      backBehavior="history"
      tabBar={(props) => <TabBar {...props} />}
      initialRouteName="Home"
      screenOptions={{
        unmountOnBlur: true,
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Home2" component={Home2} />
    </Tab.Navigator>
  );
};

export default TabRoutes;
