export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user;
export const selectIsRefresh = state => state.auth.selectIsRefresh;
export const selectError = state => state.auth.error;
export const selectIsLoading = state => state.auth.isLoading;