import jwtDecode from 'jwt-decode';

export const loginUser = (username: string, password: string): string => {
    // Mock: normally you'd send a request to the server here
    const token = btoa(JSON.stringify({ username })); // fake base64 token
    localStorage.setItem('token', token);
    return token;
};

export const getCurrentUser = () => {
    const token = localStorage.getItem('token');
    if (!token) return null;
    try {
        return jwtDecode(token);
    } catch {
        return null;
    }
};