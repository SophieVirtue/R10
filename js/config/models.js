import { AsyncStorage } from "react-native";

export const setFave = async faveId => {
  try {
    await AsyncStorage.setItem(
      `${faveId}`,
      JSON.stringify({
        id: faveId,
        faveOn: new Date()
      })
    );
  } catch (error) {
    console.log(error);
  }
};

export const getFaves = async () => {
  try {
    const faveKeys = await AsyncStorage.getAllKeys();
    return await AsyncStorage.multiGet(faveKeys);
  } catch (error) {
    console.log(error);
  }
};

export const removeFave = async faveId => {
  try {
    await AsyncStorage.removeItem(`${faveId}`);
  } catch (error) {
    console.log(error);
  }
};
