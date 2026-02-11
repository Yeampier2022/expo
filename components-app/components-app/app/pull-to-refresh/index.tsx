import { useThemeColor } from "@/hooks/use-theme-color";
import ThemedText from "@/presentation/shared/ThemedText";
import ThemedView from "@/presentation/shared/ThemedView";
import { useState } from "react";
import { RefreshControl, ScrollView } from "react-native";

const PullToRefreshScreen = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const primaryColor = useThemeColor({}, "primary");
  const backgroundColor = useThemeColor(
    { dark: "black", light: "white" },
    "background"
  );

  const onRefresh = async () => {
    setIsRefreshing(true);

    setTimeout(() => {
      setIsRefreshing(false);
    }, 3000);
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          colors={[primaryColor, "red", "orange", "green"]}
          progressBackgroundColor={backgroundColor}
          refreshing={isRefreshing}
          onRefresh={onRefresh}
        />
      }
    >
      <ThemedView margin>
        <ThemedText>PullToRefreshScreen</ThemedText>
      </ThemedView>
    </ScrollView>
  );
};
export default PullToRefreshScreen;
