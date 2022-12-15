import React from "react";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <div className="overflow-hidden h-screen container-lg mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
