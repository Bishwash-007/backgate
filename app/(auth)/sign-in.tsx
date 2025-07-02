import React, { useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import InputField from "@/components/ui/InputField";
import Button from "@/components/ui/Button";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <KeyboardAvoidingView
      className="flex-1"
      behavior={Platform.OS === "ios" ? "padding" : "padding"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 80 : -30}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
            paddingHorizontal: 24,
          }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          className="bg-muted-50 dark:bg-black"
        >
          <View className="flex-1 w-full px-6 justify-center items-center bg-muted-50 dark:bg-black">
            <Text className="font-poppinsSemibold text-3xl text-muted-800 dark:text-muted-100 mb-8 text-center">
              Backgate
            </Text>

            <View className="w-full space-y-5 mb-6">
              {/* Username */}
              <InputField
                label="Username"
                placeholder="yourname"
                value={username}
                onChangeText={setUsername}
                iconLeft={
                  <Ionicons name="person-outline" size={20} color="#737373" />
                }
                className="w-full h-16 rounded-2xl bg-white dark:bg-muted-800 border border-muted-200 dark:border-muted-700"
              />

              {/* Password */}
              <InputField
                label="Password"
                placeholder="Your password"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
                iconLeft={
                  <Ionicons
                    name="lock-closed-outline"
                    size={20}
                    color="#737373"
                  />
                }
                iconRight={
                  <Ionicons
                    name={showPassword ? "eye-off-outline" : "eye-outline"}
                    size={20}
                    color="#737373"
                    onPress={() => setShowPassword((prev) => !prev)}
                  />
                }
                className="w-full h-16 rounded-2xl bg-white dark:bg-muted-800 border border-muted-200 dark:border-muted-700"
              />
            </View>

            {/* Sign Up Button */}
            <Button
              title="Sign Up"
              className="w-full bg-muted-800 dark:bg-muted-200"
            />

            {/* Sign In Redirect */}
            <Link href="/(auth)/sign-in" asChild>
              <Text className="mt-4 font-poppins text-sm text-muted-500 dark:text-muted-400">
                Don&apos;t have an account?
                <Text className="underline"> SignUp</Text>
              </Text>
            </Link>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
