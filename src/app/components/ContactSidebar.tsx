"use client";
import React, { useState } from "react";

interface ContactSidebarProps {
  open: boolean;
  onClose: () => void;
}

export default function ContactSidebar({ open, onClose }: ContactSidebarProps) {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const sidebarStyle = {
    position: "fixed" as const,
    top: 0,
    right: open ? 0 : "-100vw",
    width: "100vw",
    maxWidth: "350px",
    height: "100vh",
    backgroundColor: "#000",
    zIndex: 10000,
    transition: "right 0.3s ease-in-out",
    boxShadow: "-2px 0 24px rgba(0,0,0,0.7)",
    display: "flex",
    flexDirection: "column" as const,
    padding: "20px",
    overflowY: "auto" as const,
  };

  const overlayStyle = {
    position: "fixed" as const,
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 9999,
    display: open ? "block" : "none",
  };

  const closeButtonStyle = {
    position: "absolute" as const,
    top: "20px",
    right: "20px",
    width: "40px",
    height: "40px",
    border: "2px solid #fff",
    borderRadius: "50%",
    backgroundColor: "transparent",
    color: "white",
    fontSize: "20px",
    fontWeight: "bold",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const contentStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    gap: "36px",
    paddingTop: "80px",
    color: "white",
    paddingBottom: "20px",
  };

  const sectionStyle = {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    gap: "8px",
    width: "100%",
    textAlign: "center" as const,
  };

  const titleStyle = {
    fontWeight: "bold",
    fontSize: "18px",
    marginTop: "8px",
    color: "#fff",
  };

  const infoStyle = {
    color: "#fff",
    fontSize: "15px",
    fontWeight: 400,
    textAlign: "center" as const,
  };

  return (
    <>
      {/* Overlay */}
      <div style={overlayStyle} onClick={onClose} />
      
      <div style={sidebarStyle}>
        {/* Close Button */}
        <button onClick={onClose} style={closeButtonStyle} aria-label="Close">
          ✕
        </button>

        <div style={contentStyle}>
          {/* Phone */}
          <div style={sectionStyle}>
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FF0000"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <div style={titleStyle}>Phone</div>
            <div style={infoStyle}>(309) 8855–314</div>
          </div>

          <hr style={{ width: "100%", border: "1px solid #222" }} />

          {/* Email */}
          <div style={sectionStyle}>
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FF0000"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="16" x="2" y="4" rx="3" />
              <polyline points="3,6 12,13 21,6" />
            </svg>
            <div style={titleStyle}>Email</div>
            <div style={{ ...infoStyle, wordBreak: "break-all" }}>
              contact@techguar.com
            </div>
          </div>

          <hr style={{ width: "100%", border: "1px solid #222" }} />

          {/* Address */}
          <div style={sectionStyle}>
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FF0000"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="10" r="3" />
              <path d="M12 2C7.03 2 3 6.03 3 11c0 5.25 7.5 11 9 11s9-5.75 9-11c0-4.97-4.03-9-9-9z" />
            </svg>
            <div style={titleStyle}>Address</div>
            <div style={infoStyle}>
              123 Creative Lane London, SW1A 1AA United Kingdom
            </div>
          </div>

          <hr style={{ width: "100%", border: "1px solid #222" }} />

          {/* Stay Connected */}
          <div style={sectionStyle}>
            <div
              style={{
                fontWeight: 700,
                fontSize: "22px",
                letterSpacing: "0.5px",
                marginBottom: "18px",
              }}
            >
              Stay Connected
            </div>
            <div
              style={{
                display: "flex",
                gap: "24px",
                justifyContent: "center",
              }}
            >
              {/* Facebook */}
              <a
                href="#"
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "50%",
                  border: "2.5px solid #fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "black",
                  transition: "all 0.3s ease",
                  borderColor: hoveredIcon === "facebook" ? "#FF0000" : "#fff",
                }}
                onMouseEnter={() => setHoveredIcon("facebook")}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={hoveredIcon === "facebook" ? "#FF0000" : "#fff"}
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "50%",
                  border: "2.5px solid #fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "black",
                  transition: "all 0.3s ease",
                  borderColor: hoveredIcon === "instagram" ? "#FF0000" : "#fff",
                }}
                onMouseEnter={() => setHoveredIcon("instagram")}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={hoveredIcon === "instagram" ? "#FF0000" : "#fff"}
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "50%",
                  border: "2.5px solid #fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "black",
                  transition: "all 0.3s ease",
                  borderColor: hoveredIcon === "linkedin" ? "#FF0000" : "#fff",
                }}
                onMouseEnter={() => setHoveredIcon("linkedin")}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={hoveredIcon === "linkedin" ? "#FF0000" : "#fff"}
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}