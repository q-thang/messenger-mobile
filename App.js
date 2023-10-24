import React from 'react';
import {RootNavigator} from '@navigation/index';

import {NavigationContainer} from '@react-navigation/native';
// import {} from '@stores/index';

const App = () => {
  return (
    <NavigationContainer>
      {/* <ContextProvider> */}
      <RootNavigator />
      {/* </ContextProvider> */}
    </NavigationContainer>
  );
};

export default App;
