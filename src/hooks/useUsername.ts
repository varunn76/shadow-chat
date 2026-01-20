import { useState } from "react";
import { nanoid } from "nanoid";

const STORAGE_KEY = "chat_username";

const generateUserName = (ANIME_NAMES: string[]) => {
  const randomName =
    ANIME_NAMES[Math.floor(Math.random() * ANIME_NAMES.length)];

  return `anonymous_${randomName}_${nanoid(5)}`;
};

export const useChatUsername = (ANIME_NAMES: string[]) => {
  const [username] = useState<string>(() => {
    if (typeof window === "undefined") return "";

    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return stored;

    const generated = generateUserName(ANIME_NAMES);
    localStorage.setItem(STORAGE_KEY, generated);
    return generated;
  });

  return username;
};
