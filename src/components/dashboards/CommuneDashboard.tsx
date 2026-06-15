import { RegisterForm } from "../Auth/Register";

export function CommuneDashboard() {
  return (
    <div className="min-h-screen bg-[#faf9f6] p-6 md:p-10 font-sans" style={{ direction: 'rtl' }}>
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header Section */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h1 className="text-3xl font-extrabold text-[#0f172a] flex items-center gap-3">
            <span>🏛️</span> لوحة تحكم رئيس الجماعة
          </h1>
          <p className="text-slate-500 text-sm mt-2">
            مرحباً بك. من هنا يمكنك إدارة المنصة، إنشاء حسابات السائقين (Drivers)، وأولياء الأمور، وتحديد الصلاحيات أوتوماتيكياً.
          </p>
        </div>

        {/* Form Section */}
        <div className="bg-white rounded-3xl shadow-md border border-gray-100 overflow-hidden">
          <RegisterForm />
        </div>

      </div>
    </div>
  );
}