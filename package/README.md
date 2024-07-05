# react-native-newui-lib

A React Native UI library providing Checkbox and RadioButton components.

## Installation

You can install this package via npm. Make sure you have `react` and `react-native` installed in your project as peer dependencies.

```sh
npm install react-native-newui-lib;

```

## Checkbox
```sh
import React from 'react';
import { View } from 'react-native';
import { Checkbox } from 'react-native-newui-lib';

const App = () => {
  const [checked, setChecked] = React.useState(false);

  const handleCheckboxChange = (newValue) => {
    setChecked(newValue);
    // Handle checkbox state change
  };

  return (
    <View>
      <Checkbox label="Checkbox Label" value={checked} onValueChange={handleCheckboxChange} />
    </View>
  );
};

export default App;
```

## RadioButton
```sh
import React from 'react';
import { View } from 'react-native';
import { RadioButton } from 'react-native-newui-lib';

const App = () => {
  const [selectedOption, setSelectedOption] = React.useState(null);

  const handleRadioButtonChange = (option) => {
    setSelectedOption(option);
    // Handle radio button selection
  };

  return (
    <View>
      <RadioButton label="Option 1" selected={selectedOption === 'Option 1'} onValueChange={handleRadioButtonChange} />
      <RadioButton label="Option 2" selected={selectedOption === 'Option 2'} onValueChange={handleRadioButtonChange} />
    </View>
  );
};

export default App;
```

## Props

#### Checkbox Componenet Props
    * `label` (string): Label text for the checkbox.
    * `value`(boolean): Current state of the checkbox (true for checked, false for unchecked).
    * `onValueChange` (function): Callback function to handle state change of the checkbox.

#### RadioButton Component Props
    * `label` (string): Label text for the radio button.
    * `selected` (boolean): Whether the radio button is selected.
    * `onValueChange` (function): Callback function invoked when radio button selection changes.

## License

This project is licensed under the MIT License.