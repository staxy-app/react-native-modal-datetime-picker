// Type definitions for react-native-modal-datetime-picker
// Project: https://github.com/mmazzarolo/react-native-modal-datetime-picker
// Definitions by:
// Kyle Roach <https://github.com/iRoachie>
// Michiel De Mey <https://github.com/MichielDeMey>
// TypeScript Version: 2.3.2

import * as React from "react";
import { ViewStyle, TextStyle } from "react-native";

interface PickerModalProps {
  /**
   * The text on the cancel button on iOS
   *
   * Default is 'Cancel'
   */
  cancelTextIOS?: string;

  /**
   * The text on the confirm button on iOS
   *
   * Default is 'Confirm'
   */
  confirmTextIOS?: string;

  /**
   * A custom component for the cancel button on iOS
   */
  customCancelButtonIOS?: React.ComponentType;

  /**
   * A custom component for the confirm button on iOS
   */
  customConfirmButtonIOS?: React.ComponentType;

  /**
   * A custom component for the title container on iOS
   */
  customHeaderIOS?: React.ComponentType;

  /**
   * A custom component that will replace the default DatePicker on iOS
   */
  customPickerIOS?: React.ComponentType;

  modalStyleIOS?: any;

  /**
   * Toggles the dark mode style of the picker
   *
   * Default is false
   */
  isDarkModeEnabled?: boolean;

  /**
   * Sets the visibility of the picker
   *
   * Default is false
   */
  isVisible?: boolean;

  PickerComponent: React.ComponentType<any>;

  pickerContainerStyleIOS: any;

  /**
   * Title text for the Picker on iOS
   *
   * Default is 'Pick a Date'
   */
  headerTextIOS?: string;

  /**
   * Handler called when the user presses the confirm button
   * Passes the current selected date
   */
  onConfirm(date: Date): void;

  /**
   * Handler called when the user presses the cancel button
   * Passes the current selected date
   */
  onCancel(date: Date): void;

  onChange(value: any);

  /**
   * Called when the underlying modal finishes its' closing animation
   * after Confirm was pressed.
   */
  onHide?(date: Date): void;
}

export default class PickerModal extends React.Component<
  PickerModalProps,
  any
> {}
