import ProfileView from "@/components/ProfileView";
import Tabs from "@/components/Tabs";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { View, Text, FlatList } from "react-native";

const user = {
  imageUrl: "https://i.pravatar.cc/300", // placeholder image
  first_name: "James",
  last_name: "Bond",
  username: "007",
  bio: "Licensed to code. I push commits, not paper.",
  followersCount: 7337,
  followingCount: 1,
  websiteUrl: "https://bishwashchaudhari.com.np",
  _id: "user_dummy_id_007",
};

const ProfileScreen = () => {
  const [active, setActive] = useState("Threads");
  return (
    <View className="bg-white dark:bg-black">
      <FlatList
        style={{
          height: "100%",
        }}
        data={[]}
        ListHeaderComponent={
          <View className="pt-safe">
            <ProfileView
              imageUrl={user.imageUrl}
              firstName={user.first_name}
              lastName={user.last_name}
              username={user.username}
              bio={user.bio}
              followersCount={user.followersCount}
              websiteUrl={user.websiteUrl}
              isCurrentUser={true}
              userId={user._id}
            />
          </View>
        }
        renderItem={() => <Tabs activeTab={active} setActiveTab={setActive} />}
      />
    </View>
  );
};

export default ProfileScreen;
