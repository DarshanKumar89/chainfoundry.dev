import { ImageResponse } from "next/og";

// Node runtime so the image is emitted as a static PNG during `next export`.
export const alt = "ChainFoundry — The Universal Blockchain Data Toolkit";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0F1B2D",
          padding: "72px",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <svg width="72" height="56" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1.5" y="8.5" width="16" height="15" rx="5.5" stroke="#ffffff" strokeWidth="2.3" />
            <rect x="12" y="8.5" width="16" height="15" rx="5.5" stroke="#1D9E75" strokeWidth="2.3" />
            <rect x="22.5" y="8.5" width="16" height="15" rx="5.5" stroke="#ffffff" strokeWidth="2.3" />
          </svg>
          <div style={{ fontSize: 32, fontWeight: 700, letterSpacing: -0.5 }}>ChainFoundry</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 78, lineHeight: 1.05, fontWeight: 400, fontStyle: "italic", maxWidth: 960 }}>
            The universal blockchain data toolkit.
          </div>
          <div style={{ fontSize: 30, color: "#1D9E75", fontWeight: 500 }}>
            7 architectures · 500+ networks · 6 languages
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: "#8B96A8" }}>
          <div>chainfoundry.dev</div>
          <div>MIT · built in Bratislava &amp; Brussels</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
