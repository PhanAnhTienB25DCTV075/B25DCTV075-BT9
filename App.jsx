import { useContext, useState } from "react";
import { ThemeContext } from "./ThemeContext";
import useFetch from "./hooks/useFetch";

const API_URL = "https://6ad8e2cff89c5702ed9a3c73.mockapi.io/students"; 

export default function App() {
  // Lấy chính xác chữ 'theme' và 'toggle' từ Context
  const { theme, toggle } = useContext(ThemeContext);
  const { data: students, loading, error, setData } = useFetch(API_URL);
  
  const [form, setForm] = useState({ name: "", code: "" });

  // ... (giữ nguyên các hàm handleChange, handleSubmit) ...

  return (
    // THẺ NÀY QUYẾT ĐỊNH MÀU NỀN TOÀN TRANG: Phải có className đổi theo theme
    <div className={theme === "light" ? "bg-white" : "bg-dark"} style={{ padding: "20px", minHeight: "100vh" }}>
      <header style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>Quản lý sinh viên (Hooks)</h2>
        
        {/* Nút bấm gọi hàm toggle */}
        <button onClick={toggle}>
          Chế độ {theme === "light" ? "Tối" : "Sáng"}
        </button>
      </header>

      {/* ... (giữ nguyên phần form và table ở dưới) ... */}
    </div>
  );
}