import { create } from "zustand"

const authStore = create((set) => ({    
    user: JSON.parse(localStorage.getItem('user')) || null,
    signupData: (newUser) => set({ user: newUser }),
    logout: () => set({ user: null })
}))

export default authStore