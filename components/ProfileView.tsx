import React from "react";
import { View, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { formatNumber } from "@/utils/format";
import { ProfileViewProps } from "@/types/types";
import IconButton from "./ui/IconButton";

const ProfileView: React.FC<ProfileViewProps> = ({
  imageUrl,
  firstName,
  lastName,
  username,
  bio,
  followersCount,
  followingCount,
  websiteUrl,
  isCurrentUser,
}) => {
  return (
    <View className="px-6 py-6 gap-y-4">
      {/* Header Row */}
      <View className="flex-row items-center justify-between">
        <View className="flex-1 pr-4">
          <Text className="text-lg font-poppinsSemibold text-black dark:text-white">
            {firstName} {lastName}
          </Text>
          <Text className="text-sm font-poppinsLight text-muted-light dark:text-muted-dark">
            @{username}
          </Text>
        </View>

        {imageUrl && (
          <Image
            source={{ uri: imageUrl }}
            className="w-16 h-16 rounded-full"
            resizeMode="cover"
          />
        )}
      </View>

      {/* Bio */}
      {!!bio && (
        <Text className="text-base font-poppins text-black dark:text-white">
          {bio}
        </Text>
      )}

      {/* Followers / Following */}
      <View className="flex-row gap-6">
        <Text className="text-sm font-poppins text-black dark:text-white">
          <Text className="font-poppinsSemibold">
            {formatNumber(followersCount || 0)}
          </Text>{" "}
          Followers
        </Text>
        <Text className="text-sm font-poppins text-black dark:text-white">
          <Text className="font-poppinsSemibold">
            {formatNumber(followingCount || 0)}
          </Text>{" "}
          Following
        </Text>
      </View>

      {/* Website */}
      {websiteUrl && (
        <View className="flex-row items-center gap-2">
          <Ionicons name="globe-outline" size={14} color="gray" />
          <Text className="text-sm font-poppins text-black dark:text-white">
            {websiteUrl}
          </Text>
        </View>
      )}

      {/* Action Buttons */}
      <View className="flex-row gap-3 pt-2">
        {isCurrentUser ? (
          <>
            <IconButton
              title="Edit Profile"
              iconName="create-outline"
              bgColor="black"
              textColor="white"
              iconColor="white"
              onPress={() => console.log("Edit Profile")}
            />
            <IconButton
              title="Share"
              iconName="share-social-outline"
              bgColor="white"
              textColor="black"
              iconColor="black"
              border
              onPress={() => console.log("Share Profile")}
            />
          </>
        ) : (
          <>
            <IconButton
              title="Follow"
              iconName="person-add-outline"
              bgColor="black"
              textColor="white"
              iconColor="white"
              onPress={() => console.log("Follow")}
            />
            <IconButton
              title="Mention"
              iconName="at-outline"
              bgColor="white"
              textColor="black"
              iconColor="black"
              border
              onPress={() => console.log("Mention")}
            />
          </>
        )}
      </View>
    </View>
  );
};

export default ProfileView;
