export const selectUser = (state) => state.user;
export const isAuthenticated = (state) => state.user.isAuthenticated;
export const selectLevel = (state) => state.user.selectedLevel;
export const selectFavoriteTeachers = (state) => state.user.favorite;
export const selectUserId = (state) => state.user.id;
