import CreateDataContext from './CreateDataContext';

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const { Context, Provider } = CreateDataContext(
  authReducer,
  { },
  { }
);