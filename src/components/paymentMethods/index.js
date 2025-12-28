import React, { Component } from 'react'
import { ActivityIndicator, ScrollView, View } from 'react-native'
import _ from 'lodash'
import Card from './card'
import ApplePay from './applePay'
import Noda from './noda'

export default class PaymentMethods extends Component {
  cards() {
    return _.map(this.props.paymentSources, (paymentSource, i) => {
      return (
        <Card
          selectPaymentHandler={() => this.props.selectPaymentHandler(paymentSource)}
          paymentSource={paymentSource}
          styles={this.props.styles}
          last={_.last(this.props.paymentSources) === paymentSource}
          key={i}
        />
      )
    })
  }

  render() {
    const lastPaymentMethod = _.isEmpty(this.props.paymentSources) && !this.props.enableApplePay
    return (
      <View style={this.props.styles.paymentMethodsContainer}>
        <ScrollView automaticallyAdjustContentInsets={false} contentContainerStyle={this.props.styles.paymentMethodsInnerContainer}>
          <View style={this.props.styles.paymentMethodsInnerViewContainer}>
            {this.props.enableApplePay ? (
              <ApplePay styles={this.props.styles} applePayHandler={this.props.applePayHandler} last={_.isEmpty(this.props.paymentSources) && !this.props.enableNoda} />
            ) : null}
            {this.props.enableNoda ? <Noda styles={this.props.styles} nodaHandler={this.props.nodaHandler} last={lastPaymentMethod} /> : null}
            {this.cards()}
          </View>
        </ScrollView>
        {!this.props.paymentSources ? <ActivityIndicator style={this.props.styles.cardsLoadingIndicator} /> : null}
      </View>
    )
  }
}
