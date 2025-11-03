import ThemedButton from "@/presentation/shared/ThemedButton";
import { View, Text } from "react-native";

const Animation101Screen = () => {
  return (
    <View>
      <Text>Animation101Screen</Text>
      <ThemedButton className="mb-5" onPress={() => console.log("fadeIn")}>
        FadeIn
      </ThemedButton>
      <ThemedButton className="mb-5" onPress={() => console.log("fadeOut")}>
        FadeOut
      </ThemedButton>
    </View>
  );
};
export default Animation101Screen;
