import React, { useState } from "react";

export default function App() {
  const [showDonate, setShowDonate] = useState(false);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center", backgroundColor: "#f8fff8", minHeight: "100vh", padding: "20px" }}>
      <h1 style={{ color: "green" }}>🌙 Noor Aur Dunya</h1>
      <p>اسلامی معلومات، قرآن، حدیث اور اخلاقی کہانیاں سب ایک جگہ</p>

      {/* Quran Ayat Placeholder */}
      <div style={{ backgroundColor: "#e6ffe6", padding: "15px", borderRadius: "8px", margin: "20px auto", maxWidth: "500px" }}>
        <h2>📖 آج کی آیت</h2>
        <p><i>یہاں روزانہ کی آیت اور ترجمہ خودکار طور پر آ سکے گا</i></p>
      </div>

      {/* Buttons */}
      <button 
        onClick={() => setShowDonate(true)} 
        style={{ padding: "10px 20px", fontSize: "16px", marginTop: "10px", cursor: "pointer", backgroundColor: "green", color: "white", border: "none", borderRadius: "5px" }}
      >
        💚 Donate
      </button>

      {/* Donation Popup */}
      {showDonate && (
        <div style={{
          position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center"
        }}>
          <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "10px", width: "300px" }}>
            <h2>Donate</h2>
            <p>EasyPaisa: 03XXXXXXXXX</p>
            <p>JazzCash: 03XXXXXXXXX</p>
            <button 
              onClick={() => setShowDonate(false)} 
              style={{ marginTop: "10px", backgroundColor: "red", color: "white", padding: "8px 15px", border: "none", borderRadius: "5px" }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
