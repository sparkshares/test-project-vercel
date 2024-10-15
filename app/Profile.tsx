// app/profile.tsx
"use client";

import { useEffect, useState } from "react";
import { getProfile } from "./api";
import { useRouter } from "next/navigation";

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

export default function ProfilePage() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getProfile();
        setProfile(data.data); // Access the 'data' field in the response
      } catch (err) {
        setError("Failed to fetch profile");
      }
    };

    fetchProfile();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  if (!profile) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl">Profile</h1>
      <p>Email: {profile.email}</p>
      <p>Name: {profile.fullname}</p>
      <p>Username: {profile.username}</p>
      <p>Phone Number: {profile.phone_number}</p>
      <p>Country: {profile.country}</p>
      <p>Bio: {profile.bio}</p>
      <p>Available Balance: {profile.available_balance}</p>
      <p>Total Earning: {profile.total_earning}</p>
      <img src={profile.profile_pic} alt="Profile Picture" />
      <img src={profile.cover_pic} alt="Cover Picture" />
    </div>
  );
}