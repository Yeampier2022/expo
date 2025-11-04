import ThemedButton from "@/presentation/shared/ThemedButton";
import ThemedView from "@/presentation/shared/ThemedView";
import { StyleSheet, Button, Alert } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
const createTwoButtonAlert = () =>
  Alert.alert("Alert Title", "My Alert Msg", [
    {
      text: "Cancel",
      onPress: () => console.log("Cancel Pressed"),
      style: "cancel",
    },
    { text: "OK", onPress: () => console.log("OK Pressed") },
  ]);
const createThreeButtonAlert = () =>
  Alert.alert("Alert Title", "My Alert Msg", [
    {
      text: "Ask me later",
      onPress: () => console.log("Ask me later pressed"),
    },
    {
      text: "Cancel",
      onPress: () => console.log("Cancel Pressed"),
      style: "cancel",
    },
    { text: "OK", onPress: () => console.log("OK Pressed") },
  ]);

const showAlert = () =>
  Alert.alert(
    "Alert Title",
    "My Alert Msg",
    [
      {
        text: "Cancel",
        onPress: () => Alert.alert("Cancel Pressed"),
        style: "cancel",
      },
    ],
    {
      cancelable: true,
      onDismiss: () =>
        Alert.alert(
          "This alert was dismissed by tapping outside of the alert dialog."
        ),
    }
  );
const AlertsScreen = () => {
  return (
    <ThemedView margin>
      <ThemedButton className="mb-5" onPress={createTwoButtonAlert}>
        Button Alert
      </ThemedButton>
      <ThemedButton className="mb-5" onPress={createThreeButtonAlert}>
        Button Alert
      </ThemedButton>
      <ThemedButton className="mb-5" onPress={showAlert}>
        Button Alert 3
      </ThemedButton>
    </ThemedView>
  );
};
export default AlertsScreen;
