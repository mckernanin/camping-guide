import React from 'react';

const LogIn = () => <div>Form goes here</div>;

export default function Authorized(WrappedComponent) {
  return () => {
    let component = <LogIn />;
    if (auth.isAuthenticated()) {
      component = <WrappedComponent {...this.props} />;
    }
    return component;
  };
}
