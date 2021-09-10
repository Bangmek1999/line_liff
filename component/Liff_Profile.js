import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Liff_Profile() {
  const [profile, setProfile] = useState({});

  useEffect(async () => {
    const liff = (await import("@line/liff")).default;
    await liff.ready;
    const profile = await liff.getProfile();
    setProfile(profile);
  }, [profile.userId]);
  return (
    <div className="container">
      <h1> My Profile </h1>
      <div>
        {profile.pictureUrl && (
          <Image
            src={profile.pictureUrl}
            alt={profile.displayName}
            width={500}
            height={500}
          />
        )}
        <div> Name: {profile.displayName} </div>
        <div> Status: {profile.statusMessage} </div>
      </div>
    </div>
  );
}
