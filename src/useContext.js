import React from 'react';
const UseContext = React.createContext();
const useProvider = UseContext.Provider;
const UseConsumer = UseContext.Consumer;
export { useProvider, UseConsumer };
