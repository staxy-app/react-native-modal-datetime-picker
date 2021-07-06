import React from "react";
import { Platform } from "react-native";

export default function PickerModal() {
  React.useEffect(() => {
    console.warn(`DateTimePicker is not supported on: ${Platform.OS}`);
  }, []);
  return null;
}
