import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name} — Portfolio`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#0f172a",
          color: "#f8fafc",
        }}
      >
        <div style={{ fontSize: 28, color: "#22c55e" }}>Portfolio</div>
        <div style={{ fontSize: 76, fontWeight: 800, marginTop: 16 }}>{profile.name}</div>
        <div style={{ fontSize: 32, color: "#cbd5e1", marginTop: 20 }}>
          Informatics student & aspiring software developer
        </div>
      </div>
    ),
    size,
  );
}
