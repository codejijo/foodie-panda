
export const logout = () => ({
    type: 'LOGOUT'
});

export const loggedIn = (user: any) => ({
    type: 'LOGGED_IN',
    user
});