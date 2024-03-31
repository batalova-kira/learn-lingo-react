export const selectUser = (state) => state.user;
export const isAuthenticated = (state) => !!state.user.id;
