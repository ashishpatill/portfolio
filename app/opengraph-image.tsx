import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0b",
          color: "#ece8e1",
          padding: "72px 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#e4b56a",
          }}
        >
          <span>{site.location}</span>
          <span>{site.availability}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 84,
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
            }}
          >
            {site.name}
          </div>
          <div
            style={{
              marginTop: 28,
              maxWidth: 860,
              fontSize: 34,
              lineHeight: 1.25,
              color: "#cfc8bc",
            }}
          >
            {site.headline}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 20,
            color: "#9c968c",
          }}
        >
          <span>linkedin.com/in/ashishpisey</span>
          <span>github.com/ashishpatill</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
