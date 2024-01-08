import {
  View,
  Text,
  TextInput,
  StyleProp,
  ViewStyle,
  StyleSheet,
} from 'react-native';
import React from 'react';
import { Search } from 'lucide-react-native';

type SearchBoxProps = {
  value?: string;
  style?: StyleProp<ViewStyle>;
  onSearch?: (text: string) => void;
};

const SearchBox = ({ style, onSearch, value }: SearchBoxProps) => {
  return (
    <View style={[styles.root, style]}>
      <Search height={25} width={25} color={'black'} />
      <TextInput
        value={value}
        style={styles.textInput}
        placeholder="Search for a movie"
        onChangeText={onSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    borderBottomWidth: 1,
    paddingBottom: 5,
    backgroundColor: 'white',
  },
  textInput: {
    flex: 1,
    height: 40,
  },
});

export default SearchBox;
