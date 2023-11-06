import AuthStore from "../stores/AuthStore";


export const useLogout = () => {
    
    const { logout } = AuthStore()
    
    const logoutUser = () => {
        logout()
        localStorage.removeItem('user')
    }

    return { logoutUser }
}