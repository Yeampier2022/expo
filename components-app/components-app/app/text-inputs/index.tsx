import ThemedCard from "@/presentation/shared/ThemedCard";
import ThemedText from "@/presentation/shared/ThemedText";
import ThemedTextInput from "@/presentation/shared/ThemedTextInput";
import ThemedView from "@/presentation/shared/ThemedView";
import { useState } from "react";
import {
  View,
  Text,
  TextInputProps,
  TextInput,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
} from "react-native";

const ios = Platform.OS == "ios";
const TextInputsScreen = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
  });

  return (
    <KeyboardAvoidingView behavior={ios ? "height" : undefined}>
      <ScrollView>
        <ThemedView margin>
          <ThemedCard className="mb-5">
            <ThemedTextInput
              placeholder="Nombre Completo"
              autoCapitalize={"words"}
              autoCorrect={false}
              onChangeText={(text) => setForm({ ...form, name: text })}
            />
            <ThemedTextInput
              placeholder="Telefono"
              autoCapitalize={"words"}
              keyboardType="phone-pad"
              autoCorrect={false}
              onChangeText={(text) => setForm({ ...form, phone: text })}
            />
            <ThemedTextInput
              placeholder="Correo Eletronico"
              autoCapitalize={"words"}
              keyboardType="email-address"
              autoCorrect={false}
              onChangeText={(text) => setForm({ ...form, email: text })}
            />
          </ThemedCard>
          <ThemedCard>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
        </ThemedView>
        {ios && <View className="mb-52" />}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default TextInputsScreen;
