import React, { useState } from "react";
import { api } from "../../utils/axios";
import type { RegisterInput, AuthResponse } from "../../types/auth";

export const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState<RegisterInput>({
    name: "",
    email: "",
    password: "",
    role: "driver",
    license_number: "",
    phone: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    const payload: RegisterInput = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      role: formData.role,
      ...(formData.role === "driver" && {
        license_number: formData.license_number,
        phone: formData.phone,
      }),
    };

    try {
      const response = await api.post<AuthResponse>("/register", payload);

      setSuccess(response.data.message);
      setFormData({
        name: "",
        email: "",
        password: "",
        role: "driver",
        license_number: "",
        phone: "",
      });
    } catch (err: any) {
      setError(err.response?.data?.message || "عذراً، حدث خطأ أثناء التسجيل.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-[#faf9f6] flex items-center justify-center p-4 md:p-10 font-sans"
      style={{ direction: "rtl" }}
    >
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col">
        <div className="bg-[#0f172a] p-8 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-slate-800/40 rounded-full blur-2xl"></div>
          <span className="text-[#dca543] uppercase text-xs font-bold tracking-widest bg-slate-800/60 px-3 py-1.5 rounded-full border border-slate-700/50">
            لوحة التحكم الإدارية
          </span>
          <h2 className="text-3xl font-extrabold text-white mt-4">
            إضافة مستخدم جديد للمنصة
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            قم بملء البيانات التالية لإنشاء حساب جديد وتحديد الصلاحيات المناسبة
          </p>
        </div>

        <div className="p-8 sm:p-10">
          {error && (
            <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-xl text-sm border border-red-100 font-semibold">
              {error}
            </div>
          )}
          {success && (
            <div className="mb-6 p-4 bg-green-50 text-green-600 rounded-xl text-sm border border-green-100 font-semibold">
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  الاسم الكامل
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="محمد بنعلي"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#dca543] focus:bg-white transition-all text-slate-800"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@agharas.com"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#dca543] focus:bg-white transition-all text-slate-800 text-left font-mono"
                  style={{ direction: "ltr" }}
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                رقم الهاتف
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone || ""}
                onChange={handleChange}
                placeholder="+212600000000"
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#dca543] transition-all text-slate-800 text-left font-mono"
                style={{ direction: "ltr" }}
                required={formData.role === "driver"}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  الرقم السري
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#dca543] focus:bg-white transition-all text-slate-800"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  نوع الحساب (الصلاحية)
                </label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#dca543] focus:bg-white transition-all text-slate-800 appearance-none bg-no-repeat bg-[left_1rem_center]"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23334155'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
                    strokeWidth: "2",
                    backgroundSize: "1.25rem",
                  }}
                >
                  <option value="driver">سائق حافلة (Driver)</option>
                  <option value="parent">ولي أمر التلميذ (Parent)</option>
                  <option value="commune_president">
                    رئيس الجماعة (President)
                  </option>
                </select>
              </div>
            </div>

            {formData.role === "driver" && (
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/60 grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fadeIn">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    رقم رخصة السياقة
                  </label>
                  <input
                    type="text"
                    name="license_number"
                    value={formData.license_number || ""}
                    onChange={handleChange}
                    placeholder="CH/123456"
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#dca543] transition-all text-slate-800"
                    required={formData.role === "driver"}
                  />
                </div>
              </div>
            )}

            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto min-w-[180px] text-center font-bold text-white bg-[#0f172a] px-6 py-3.5 hover:bg-[#1e293b] active:scale-[0.98] transition-all rounded-xl shadow-lg disabled:bg-slate-400"
              >
                {loading ? "جاري التسجيل..." : "تسجيل المستخدم"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
