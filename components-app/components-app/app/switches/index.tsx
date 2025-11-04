import ThemedCard from "@/presentation/shared/ThemedCard";
import ThemedSwitch from "@/presentation/shared/ThemedSwitch";
import ThemedView from "@/presentation/shared/ThemedView";
import { useState } from "react";
import { View, Text, Switch } from "react-native";

const Switches = () => {
  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });
  return (
    <ThemedView margin className="mt-2">
      <ThemedCard>
        <ThemedSwitch
          value={state.isActive}
          text="Activo"
          classname="mb-2"
          onValueChange={(value) => setState({ ...state, isActive: value })}
        />
      </ThemedCard>
    </ThemedView>
  );
};
export default Switches;
