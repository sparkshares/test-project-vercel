// app/api.ts
const API_BASE_URL = "https://dl.surf/api/account";

interface Profile {
  id: number;
  email: string;
  fullname: string;
  active_mode: number;
  referred_by_code: string | null;
  role: number;
  bio: string;
  username: string;
  phone_number: string;
  cover_pic: string;
  profile_pic: string;
  country: string;
  is_phone_confirmed: boolean;
  is_email_confirmed: boolean;
  is_active: boolean;
  available_balance: string;
  paid_balance: string;
  total_earning: string;
}

const getCookie = (name: string) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift();
};

export const login = async (email: string, password: string) => {
  const response = await fetch(`${API_BASE_URL}/login/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': getCookie('csrftoken') || '',
    },
    body: JSON.stringify({ email, password }),
    credentials: 'include', // Ensure cookies are included in the request
  });
  console.log('Login response:', response);
  return response.json();
};

export const getProfile = async (): Promise<{ status: string; message: string; data: Profile }> => {
  const response = await fetch(`${API_BASE_URL}/profile/`, {
    method: 'GET',
    headers: {
      'X-CSRFToken': getCookie('csrftoken') || '',
    },
    credentials: 'include', // Ensure cookies are included in the request
  });
  console.log('Profile response:', response);
  return response.json();
};