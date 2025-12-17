import { AddToFavoriteProps } from "@/app/common/add-to-favorites-button/AddToFavoritesTypes";
import { promises as fs } from "fs";
import { NextResponse } from "next/server";
import path from "path";

export async function GET() {
 const filePath = path.join("app","data", "posts.json");
  let posts = [];

  try {
    const fileData = await fs.readFile(filePath, "utf8");
    posts = fileData ? JSON.parse(fileData) : [];
  } catch (error) {
    posts = [];
  }
  return NextResponse.json(posts);
}

export async function POST(req: Request) {
  const newPost = await req.json();
  const filePath = path.join("app", "data", "posts.json");
  const fileData = await fs.readFile(filePath, "utf8");
  const posts = JSON.parse(fileData);
  const existsInFavorites = posts.find(
    (episode: AddToFavoriteProps) => episode.id === newPost.id );
  let message ="";
  if (existsInFavorites) {
    const removeEpisode = posts.filter(
      (episode: AddToFavoriteProps) => episode.id !== newPost.id 
    )
    message = "Episode removed";
    await fs.writeFile(filePath, JSON.stringify(removeEpisode, null, 2));
  } else {
    posts.push(newPost);
    message = "Episode added";
    await fs.writeFile(filePath, JSON.stringify(posts, null, 2));
  }
  return NextResponse.json({ message: message, post: newPost });
}