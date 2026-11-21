import { ImageResponse } from "next/og";

export const alt = "The Bear AI · El oso que no hiberna";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static"; // requerido por output: "export"

export default function ImagenOpenGraph() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#141414",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 56,
        }}
      >
        <svg width="320" height="320" viewBox="0 0 200 200">
          <rect x="40" y="68" width="24" height="28" rx="12" fill="#F4F1EA" />
          <rect x="72" y="58" width="24" height="38" rx="12" fill="#F4F1EA" />
          <rect x="104" y="48" width="24" height="48" rx="12" fill="#F4F1EA" />
          <rect x="136" y="38" width="24" height="58" rx="12" fill="#FF6A2B" />
          <path
            d="M100 106 C126 106 150 128 150 150 C150 170 134 178 118 174 C110 172 106 168 100 168 C94 168 90 172 82 174 C66 178 50 170 50 150 C50 128 74 106 100 106 Z"
            fill="#F4F1EA"
          />
        </svg>
        <div style={{ display: "flex", flexDirection: "column", color: "#F4F1EA" }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 800,
              letterSpacing: 10,
              textTransform: "uppercase",
              display: "flex",
            }}
          >
            The Bear AI
          </div>
          <div style={{ fontSize: 38, marginTop: 20, color: "#FF6A2B", display: "flex" }}>
            El oso que no hiberna.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
