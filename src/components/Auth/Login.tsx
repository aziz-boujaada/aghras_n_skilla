import React, { useState } from "react";
import { api } from "../../utils/axios";
import type { LoginInput, AuthResponse } from "../../types/auth";
import { useNavigate } from "react-router-dom";

export const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState<LoginInput>({
    email: "",
    password: "",
    remember_me: false,
  });
  const navigate = useNavigate();
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

    const payload: LoginInput = {
      email: formData.email,
      password: formData.password,
      remember_me: formData.remember_me,
    };

    try {
      const response = await api.post<AuthResponse>("/login", payload);

      localStorage.setItem("auth_token", response.data.token);
      localStorage.setItem("user_role", response.data.user.role);

      setSuccess(response.data.message);
      setFormData({ email: "", password: "", remember_me: false });
      const { role } = response.data.user;

      switch (role) {
        case "super_admin":
          navigate("/super-admin/dashboard");
          break;
        case "commune_president":
          navigate("/commune/dashboard");
          break;
        case "driver":
          navigate("/aghras_n_skilla");
          break;
        case "parent":
          navigate("/aghras_n_skilla");
          break;
        default:
          setError("نوع الحساب غير معروف بالسيستم.");
      }
    } catch (err: any) {
      console.error(err);
      setError(
        err.response?.data?.message || "عذراً، حدث خطأ أثناء تسجيل الدخول.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-[#faf9f6] flex items-center justify-center p-4 md:p-10 font-sans"
      style={{ direction: "rtl" }}
    >
      <div className="bg-white w-full max-w-5xl rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-100 min-h-[600px]">
        <div className="w-full md:w-1/2 p-8 sm:p-12 flex flex-col justify-center">
          <div className="mb-8">
            <h2 className="text-3xl font-extrabold text-[#0f172a] mb-2">
              تسجيل الدخول
            </h2>
            <p className="text-slate-500 text-sm">
              مرحباً بك مجدداً فـ منصة أغراس سكيلا لإدارة النقل المدرسي.
            </p>
          </div>

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

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                البريد الإلكتروني
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#dca543] focus:bg-white transition-all text-slate-800"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                كلمة المرور
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
            <div className="flex items-center justify-between pt-1 text-sm">
              <div className="flex items-center space-x-2 space-x-reverse">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  checked={formData.remember_me}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      remember_me: e.target.checked,
                    }))
                  }
                  className="h-4 w-4 rounded border-slate-300 text-[#0f172a] focus:ring-[#dca543] accent-[#0f172a] cursor-pointer"
                />
                <label
                  htmlFor="remember_me"
                  className="font-medium text-slate-600 cursor-pointer select-none"
                >
                  تذكرني
                </label>
              </div>

              <div className="text-sm">
                <button
                 
                  className="font-bold text-[#dca543] hover:text-[#c48f35] transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/forgot-password')
                   
                  }}
                >
                  نسيت كلمة المرور؟
                </button>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full text-center font-bold text-white bg-[#0f172a] px-5 py-3.5 hover:bg-[#1e293b] active:scale-[0.98] transition-all rounded-xl shadow-lg disabled:bg-slate-400"
              >
                {loading ? "جاري التحقق..." : "دخول الحساب"}
              </button>
            </div>
          </form>
        </div>

      
        <div className="w-full md:w-1/2 bg-[#0f172a] p-12 hidden md:flex flex-col justify-between relative overflow-hidden">
      
          <div className="absolute top-0 right-0 w-64 h-64 bg-slate-800/20 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <span className="text-[#dca543] uppercase text-xs font-bold tracking-widest bg-slate-800/50 px-3 py-1.5 rounded-full border border-slate-700/50">
              نظام النقل الذكي الإشرافي
            </span>
            <h3 className="text-white text-3xl font-bold mt-6 leading-snug">
              الجيل الجديد لإدارة <br />
              <span className="text-[#dca543]">النقل المدرسي</span> بالعالم
              القروي
            </h3>
          </div>

       
          <div className="bg-[#1e293b]/60 backdrop-blur-md border border-slate-700/40 p-6 rounded-2xl shadow-2xl relative z-10 transform translate-y-4 transition-transform hover:translate-y-2 duration-300">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs text-slate-400 font-mono">
                app.agharasnskila.ma
              </span>
              <div className="flex space-x-1.5 space-x-reverse">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="h-4 bg-slate-700/50 rounded w-1/3"></div>
              <div className="h-8 bg-slate-800/80 rounded-xl border border-slate-700/30 flex items-center px-3 justify-between">
                <div className="w-12 h-3 bg-green-500/30 rounded-full"></div>
                <div className="w-20 h-3 bg-slate-600 rounded"></div>
              </div>
              <div className="h-16 bg-slate-800/40 rounded-xl p-3 flex justify-between items-center">
                <div className="w-10 h-10 rounded-full bg-[#dca543]/20 flex items-center justify-center text-[#dca543] font-bold text-xs">
                  A
                </div>
                <div className="space-y-2 w-3/4">
                  <div className="h-3 bg-slate-600 rounded w-1/2"></div>
                  <div className="h-2 bg-slate-700 rounded w-1/3"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-slate-400 text-xs relative z-10 flex justify-between items-center border-t border-slate-800 pt-4">
            <span>© ٢٠٢٦ أغراس سكيلا</span>
            <span className="text-slate-500">الإصدار 1.0</span>
          </div>
        </div>
      </div>
    </div>
  );
};
