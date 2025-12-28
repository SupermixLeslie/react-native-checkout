import React from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'
import TouchableOpacity from '../common/touchableOpacity'

// Noda payment method component
// Credentials (API keys, secrets) should be passed via nodaCredentials prop
// and handled securely in the nodaHandler function
const Noda = props => (
  <TouchableOpacity
    {...props}
    innerStyle={props.styles.nodaContainer}
    style={props.styles.nodaOuterContainer}
    styles={props.styles}
    onPress={() => props.nodaHandler(props.nodaCredentials)}
  >
    <View style={props.styles.nodaPaymentView}>
      <Text style={props.styles.nodaPaymentText}>Noda Payment</Text>
    </View>
  </TouchableOpacity>
)

Noda.propTypes = {
  nodaHandler: PropTypes.func.isRequired,
  nodaCredentials: PropTypes.object,
  styles: PropTypes.object.isRequired,
}

export default Noda
