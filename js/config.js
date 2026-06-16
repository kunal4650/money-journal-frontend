// Replace this with your actual Vercel backend URL (Keep /api at the end)
const API_BASE_URL = "https://money-journal-backend.vercel.app/api";

function getAuthHeaders() {
    const token = localStorage.getItem('token');
    return {
        'Content-Type': 'application/json',
        'x-auth-token': token || ''
    };
}
