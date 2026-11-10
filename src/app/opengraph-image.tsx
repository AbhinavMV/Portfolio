import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const alt = `${profile.name} · ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#16181d",
          color: "#eef0f4",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#6ee7d8", letterSpacing: 4, textTransform: "uppercase" }}>
          {profile.role}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: -2 }}>{profile.name}</div>
          <div style={{ fontSize: 36, color: "#a9afbc", maxWidth: 900, lineHeight: 1.35 }}>{profile.tagline}</div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#7d8494" }}>TypeScript · NestJS · ClickHouse · Rust · Web3</div>
      </div>
    ),
    size,
  );
}
