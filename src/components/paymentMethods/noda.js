import React from 'react'
import { Text, View } from 'react-native'
import TouchableOpacity from '../common/touchableOpacity'

export default props => (
  <TouchableOpacity {...props} innerStyle={props.styles.nodaContainer} style={props.styles.nodaOuterContainer} styles={props.styles} onPress={() => props.nodaHandler()}>
    <View style={props.styles.nodaInnerContainer}>
      <Text style={props.styles.nodaText}>Open Banking (Noda)</Text>
    </View>
  </TouchableOpacity>
)
