import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
  const data = await axios.get("http://185.250.46.244:7293/posts");
  console.log(data?.data)
  return NextResponse.json(data?.data);
}