import React, { Component } from 'react';
import { requireNativeComponent } from 'react-native';

class BlurView extends Component {
  render() {
    return (
      <NativeBlurView
        {...this.props}
        style={[{
          backgroundColor: 'transparent',
        }, this.props.style
        ]}
      />
    );
  }
}

BlurView.propTypes = {
  blurType: React.PropTypes.string,
};

const NativeBlurView = requireNativeComponent('BlurView', BlurView);

export default BlurView;
