import React, { useState } from "react";
import { api } from "../../utils/axios";
import { useNavigate } from "react-router-dom";

export const ForgotPassword: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<1 | 2>(1);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      const response = await api.post("/forgot-password/send-otp", { phone });
      setSuccess(response.data.message);
      setStep(2);
    } catch (err: any) {
      setError(err.response?.data?.message || "حدث خطأ أثناء إرسال الكود.");
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (password !== passwordConfirmation) {
      setError("كلمتا المرور غير متطابقتين.");
      setLoading(false);
      return;
    }

    try {
      const response = await api.post("/forgot-password/reset", {
        phone,
        otp,
        password,
        password_confirmation: passwordConfirmation
      });
      alert(response.data.message);
      navigate("/login");
    } catch (err: any) {
      setError(err.response?.data?.message || "كود التفعيل خاطئ أو منتهي الصلاحية.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] flex items-center justify-center p-4 md:p-10 font-sans" style={{ direction: 'rtl' }}>
      <div className="bg-white w-full max-w-5xl rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-100 min-h-[600px]">
        
        <div className="w-full md:w-1/2 p-8 sm:p-12 flex flex-col justify-center">
          <div className="mb-8">
            <h2 className="text-3xl font-extrabold text-[#0f172a] mb-2">استعادة الحساب</h2>
            <p className="text-slate-500 text-sm">
              {step === 1 
                ? "أدخل رقم هاتفك المسجل لتلقي كود التفعيل عبر رسالة SMS." 
                : "أدخل الكود المكون من 6 أرقام وقم بتعيين كلمة المرور الجديدة."}
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

          {step === 1 ? (
            <form onSubmit={handleSendOtp} className="space-y-5">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  رقم الهاتف
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+212600000000"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#dca543] focus:bg-white transition-all text-slate-800 text-left font-mono"
                  style={{ direction: 'ltr' }}
                  required
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full text-center font-bold text-white bg-[#0f172a] px-5 py-3.5 hover:bg-[#1e293b] active:scale-[0.98] transition-all rounded-xl shadow-lg disabled:bg-slate-400"
                >
                  {loading ? "جاري الإرسال..." : "أرسل كود التفعيل"}
                </button>
              </div>
            </form>
          ) : (
            <form onSubmit={handleResetPassword} className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  كود التفعيل (OTP)
                </label>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="123456"
                  maxLength={6}
                  className="w-full px-4 py-3 text-center tracking-widest font-bold bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#dca543] focus:bg-white transition-all text-xl text-[#0f172a]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  كلمة المرور الجديدة
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#dca543] focus:bg-white transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  تأكيد كلمة المرور
                </label>
                <input
                  type="password"
                  value={passwordConfirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#dca543] focus:bg-white transition-all"
                  required
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full text-center font-bold text-white bg-[#0f172a] px-5 py-3.5 hover:bg-[#1e293b] active:scale-[0.98] transition-all rounded-xl shadow-lg disabled:bg-slate-400"
                >
                  {loading ? "جاري التحديث..." : "تحديث كلمة المرور"}
                </button>
              </div>
            </form>
          )}

          <div className="text-center mt-6">
            <button 
              onClick={() => navigate("/login")} 
              className="text-sm font-bold text-[#dca543] hover:text-[#c48f35] transition-colors"
            >
              رجوع لتسجيل الدخول
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 bg-[#0f172a] p-12 hidden md:flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-slate-800/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <span className="text-[#dca543] uppercase text-xs font-bold tracking-widest bg-slate-800/50 px-3 py-1.5 rounded-full border border-slate-700/50">
              نظام استعادة الحساب الذكي
            </span>
            <h3 className="text-white text-3xl font-bold mt-6 leading-snug">
              أمان حسابك <br />
              <span className="text-[#dca543]">هو أولويتنا</span> فـ المنصة
            </h3>
          </div>

          <div className="bg-[#1e293b]/60 backdrop-blur-md border border-slate-700/40 p-6 rounded-2xl shadow-2xl relative z-10">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs text-slate-400 font-mono">Verification Mode</span>
              <div className="flex space-x-1.5 space-x-reverse">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-500"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-slate-500"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-slate-500"></span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="h-3 bg-slate-700/50 rounded w-1/4"></div>
              <div className="h-12 bg-slate-800/60 rounded-xl border border-slate-700/30 flex items-center justify-center text-[#dca543] font-mono tracking-widest font-bold">
                SMS OTP SECURE
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