import { ImageResponse } from "next/og";

export const alt = "Dhruv Thakor — IT Support & Healthcare Technology, Halifax NS";
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
          padding: "72px 80px",
          background: "#f6f6f2",
          color: "#111210",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 26, color: "#0d6b55" }}>
          <div style={{ width: 12, height: 12, borderRadius: 999, background: "#0d6b55" }} />
          IT Support · Healthcare Technology
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: -3 }}>Dhruv Thakor</div>
          <div style={{ fontSize: 38, color: "#3d403b", marginTop: 12 }}>
            Calm, structured support for the systems people rely on at work.
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#6b6f68" }}>
          <span>Support Consultant · Nova Scotia Health</span>
          <span>Halifax, Nova Scotia</span>
        </div>
      </div>
    ),
    size,
  );
}
