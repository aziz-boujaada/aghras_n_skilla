import { useState } from "react";
import { motion } from "framer-motion";
import {
  Bus,
  Map,
  Fuel,
  Users,
  FileText,
  Menu,
  X,
  ShieldCheck,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  BarChart3,
  BadgeCheck,
  Building2,
} from "lucide-react";
import { RegisterForm } from "./Auth/Register";
import { useNavigate } from "react-router-dom";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-200 bg-white lg:border-white/20 lg:bg-white/70 lg:backdrop-blur-xl lg:shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <img
              src="https://res.cloudinary.com/dzketg5uv/image/upload/f_auto,q_auto/aghars-nskilla-logo_ohtckq"
              alt="أغراس ن سكيلة"
              className="h-14 w-auto object-contain"
            />
          </div>

          {/* Desktop Menu Center/Left */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-sm font-semibold text-slate-600 hover:text-gold-500 transition-colors"
            >
              المميزات
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-semibold text-slate-600 hover:text-gold-500 transition-colors"
            >
              كيف تعمل
            </a>
            <a
              href="#analytics"
              className="text-sm font-semibold text-slate-600 hover:text-gold-500 transition-colors"
            >
              الإحصائيات
            </a>
            <a
              href="#contact"
              className="text-sm font-semibold text-slate-600 hover:text-gold-500 transition-colors"
            >
              تواصل معنا
            </a>

            <button onClick={() => navigate('/login')} className="text-sm font-bold text-slate-900 border-2 border-slate-900 px-6 py-2.5 hover:bg-slate-900 hover:text-white transition-all neo-brutalism-border rounded-lg mr-4">
              تسجيل الدخول
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-900 focus:outline-none  p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden glass-panel border-t border-gray-200/50 absolute top-[80px] w-full left-0 overflow-hidden shadow-2xl"
        >
          <div className="px-4 pt-4 pb-6 space-y-4 shadow-lg">
            <a
              href="#features"
              className="block px-4 py-3 text-base font-semibold text-slate-800 hover:bg-cream-50 rounded-lg transition-colors"
            >
              المميزات
            </a>
            <a
              href="#how-it-works"
              className="block px-4 py-3 text-base font-semibold text-slate-800 hover:bg-cream-50 rounded-lg transition-colors"
            >
              كيف تعمل
            </a>
            <a
              href="#analytics"
              className="block px-4 py-3 text-base font-semibold text-slate-800 hover:bg-cream-50 rounded-lg transition-colors"
            >
              الإحصائيات
            </a>
            <div className="pt-4 px-2">
             <button onClick={() => navigate('/login')} className="text-sm font-bold text-slate-900 border-2 border-slate-900 px-6 py-2.5 hover:bg-slate-900 hover:text-white transition-all neo-brutalism-border rounded-lg mr-4">
              تسجيل الدخول
            </button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      <div className="absolute top-0 left-0 -ml-32 mt-12 w-[600px] h-[600px] bg-gold-400/10 rounded-full blur-3xl animate-blob opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 right-0 -mr-32 mb-12 w-[500px] h-[500px] bg-slate-100 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-2xl"
          >
            <motion.div
              variants={fadeIn}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cream-50 border border-gold-500/30 text-gold-600 font-bold text-xs tracking-wide mb-8 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
              </span>
              نظام النقل الذكي الإصدار 1.0
            </motion.div>

            <motion.div variants={fadeIn}>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold text-slate-900 tracking-tight leading-[1.2] mb-6 text-balance">
                الجيل الجديد لإدارة{" "}
                <span className="text-gold-500 relative whitespace-nowrap">
                  النقل المدرسي
                  <svg
                    className="absolute -bottom-2 w-full left-0 stroke-gold-400 opacity-40 translate-y-2"
                    viewBox="0 0 300 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.00049 14.5C65.5005 5.5 194.501 -3.99998 298.5 18"
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <br />
                بالعالم القروي
              </h1>
            </motion.div>

            <motion.p
              variants={fadeIn}
              className="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed font-medium"
            >
              منصة ذكية تجمع بين تتبع الحافلات، مراقبة الوقود، إدارة التلاميذ،
              والتقارير المؤسساتية في نظام واحد متكامل، مبني من أجل الشفافية
              والموثوقية.
            </motion.p>

            <motion.div
              variants={fadeIn}
              className="flex flex-col sm:flex-row gap-4 mb-8 sm:mb-10"
            >
              <button className="w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-gold-500 text-slate-900 font-bold px-8 py-4 neo-brutalism-border text-lg rounded-xl">
                اطلب عرضاً تجريبياً
                <ArrowLeft size={20} className="stroke-[3px]" />
              </button>
              <button className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-white text-slate-900 border-2 border-slate-200 font-bold px-8 py-4 hover:border-slate-900 transition-colors text-lg rounded-xl">
                شاهد المنصة
              </button>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm font-semibold text-slate-500"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-green-500" />
                <span>الجماعات الترابية</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-green-500" />
                <span>المؤسسات التعليمية</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-green-500" />
                <span>شركات النقل</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto w-full max-w-lg lg:max-w-full perspective-1000"
          >
            <div className="glass-mockup rounded-2xl p-2 relative z-10 transform lg:rotate-[2deg] transition-transform hover:rotate-0 duration-700 shadow-2xl shadow-slate-900/10">
              <div
                className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 flex flex-col"
                dir="rtl"
              >
                {/* Browser Top Bar */}
                <div className="bg-slate-800/80 px-4 py-3 flex items-center justify-between border-b border-slate-700/50">
                  <div className="flex gap-1.5 order-2">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-slate-600"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-slate-600"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-400"></div>
                  </div>
                  <div className="mx-auto bg-slate-900/80 rounded-md text-center px-4 sm:px-12 py-1.5 flex-1 max-w-[60%] border border-slate-700/50 overflow-hidden">
                    <span className="text-[10px] sm:text-xs font-mono text-slate-400 truncate block">
                      app.agharasnskila.ma
                    </span>
                  </div>
                  <div className="w-10 sm:w-12 order-1"></div>
                </div>

                {/* Mockup Content */}
                <div className="p-6 bg-slate-900 text-white flex-1 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl" />

                  <div className="flex justify-between items-center mb-6 relative z-10">
                    <div>
                      <h3 className="font-display font-bold text-xl text-white">
                        لوحة القيادة
                      </h3>
                      <span className="text-slate-400 text-xs">
                        مراقبة حية - ازكور
                      </span>
                    </div>
                    <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs flex items-center gap-2 border border-green-500/30">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                      </span>
                      النظام متصل
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 relative z-10">
                    <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/50 shadow-inner">
                      <div className="text-slate-400 text-xs mb-2 flex items-center gap-1.5">
                        <Map size={14} /> المسار النشط
                      </div>
                      <div className="text-lg font-display font-bold text-white truncate">
                        الدوار ➔ ازكور
                      </div>
                      <div className="mt-3 flex items-center gap-2">
                        <div className="h-1.5 w-full bg-slate-700 rounded-full overflow-hidden">
                          <div className="h-full bg-gold-500 w-2/3 rounded-full"></div>
                        </div>
                        <span className="text-[10px] text-slate-400 font-mono">
                          65%
                        </span>
                      </div>
                    </div>
                    <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/50 shadow-inner">
                      <div className="text-slate-400 text-xs mb-2 flex items-center gap-1.5">
                        <Fuel size={14} /> كفاءة الوقود
                      </div>
                      <div className="text-lg font-display font-bold text-white">
                        مطابقة: 98.5%
                      </div>
                      <div className="mt-2 text-xs text-green-400 font-medium bg-green-400/10 inline-block px-2 py-0.5 rounded">
                        لا توجد تجاوزات
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/50 relative z-10 shadow-inner">
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-slate-400 text-xs flex items-center gap-1.5">
                        <Users size={14} /> سجل الحضور (مباشر)
                      </div>
                      <span className="text-[10px] bg-slate-700 px-2 py-0.5 rounded text-slate-300">
                        اليوم
                      </span>
                    </div>
                    <div className="space-y-3">
                      {[
                        {
                          name: "أمينة ب.",
                          time: "07:12",
                          status: "حاضر",
                          color: "bg-indigo-500",
                        },
                        {
                          name: "يوسف م.",
                          time: "07:15",
                          status: "حاضر",
                          color: "bg-emerald-500",
                        },
                        {
                          name: "فاطمة ز.",
                          time: "07:22",
                          status: "حاضر",
                          color: "bg-amber-500",
                        },
                      ].map((student, i) => (
                        <div
                          key={i}
                          className="flex justify-between items-center text-sm py-2 px-3 bg-slate-800 rounded-lg border border-slate-700/30"
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-7 h-7 rounded-full ${student.color} flex items-center justify-center text-xs font-bold text-white shadow-sm`}
                            >
                              {student.name.charAt(0)}
                            </div>
                            <span className="font-semibold text-slate-200">
                              {student.name}
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="bg-green-500/10 text-green-400 px-2.5 py-1 rounded text-xs font-medium border border-green-500/20">
                              {student.status}
                            </span>
                            <span className="text-slate-500 font-mono text-xs">
                              {student.time}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[radial-gradient(ellipse_at_center,_var(--color-slate-300)_20%,_transparent_20%)] bg-[length:12px_12px] -z-10 opacity-60" />
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[radial-gradient(ellipse_at_center,_var(--color-gold-300)_20%,_transparent_20%)] bg-[length:12px_12px] -z-10 opacity-40" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ProblemSolution = () => {
  return (
    <section className="py-24 bg-slate-900 border-y border-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-gold-500 font-bold tracking-widest uppercase text-sm mb-4">
            التحديات والحلول
          </h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight">
            تجاوز العقبات التقليدية في <br /> إدراة النقل القروي
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Problem */}
          <div className="bg-slate-800/50 p-8 md:p-12 rounded-3xl border border-red-500/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-2 h-full bg-red-500/20"></div>
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-red-500/10 p-3 rounded-xl border border-red-500/20">
                <AlertTriangle className="text-red-400 w-8 h-8" />
              </div>
              <h4 className="text-2xl font-display font-bold text-white">
                التحديات الحالية
              </h4>
            </div>
            <ul className="space-y-6">
              {[
                "غياب الشفافية والتلاعب في استهلاك الوقود",
                "صعوبة تتبع مسار الحافلات في المناطق القروية",
                "السجلات الورقية وعشوائية تسجيل الحضور",
                "صعوبة استخراج التقارير للجماعات الممولة",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-slate-300">
                  <div className="min-w-6 mt-1 flex-shrink-0 text-red-400">
                    ✕
                  </div>
                  <span className="text-lg font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 md:p-12 rounded-3xl border border-gold-500/30 relative overflow-hidden shadow-2xl shadow-gold-500/5">
            <div className="absolute top-0 right-0 w-2 h-full bg-gold-400"></div>
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl"></div>
            <div className="flex items-center gap-4 mb-8 relative z-10">
              <div className="bg-gold-500 p-3 rounded-xl shadow-lg shadow-gold-500/20">
                <ShieldCheck className="text-slate-900 w-8 h-8" />
              </div>
              <h4 className="text-2xl font-display font-bold text-white">
                حلول أغراس ن سكيلة
              </h4>
            </div>
            <ul className="space-y-6 relative z-10">
              {[
                "نظام مطابقة المسار مع الوقود لمنع التلاعب",
                "تتبع GPS دقيق مخصص لتضاريس العالم القروي",
                "مسح ذكي QR Code يشتغل حتى بدون إنترنت",
                "منصة تقارير بضغطة زر للمساءلة والمؤسسات",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-slate-100">
                  <div className="min-w-6 mt-1.5 flex-shrink-0 text-gold-500">
                    <CheckCircle2 size={22} className="fill-gold-500/20" />
                  </div>
                  <span className="text-lg font-bold">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      title: "رادار الوقود الذكي",
      description:
        "مطابقة استهلاك الوقود مع المسافات المقطوعة بدقة عالية للكشف عن أي تجاوزات أو تسريبات في الحين.",
      icon: <Fuel className="w-7 h-7 text-gold-600" />,
      color: "bg-orange-50 border-orange-100",
    },
    {
      title: "التتبع المباشر للمسارات",
      description:
        "متابعة الحافلات في الزمن الحقيقي عبر خرائط تفاعلية دقيقة، تضمن سلامة التلاميذ وسرعة التدخل.",
      icon: <Map className="w-7 h-7 text-gold-600" />,
      color: "bg-blue-50 border-blue-100",
    },
    {
      title: "الحضور الذكي",
      description:
        "تسجيل حضور وصعود التلاميذ عبر بطاقات QR Code حتى في وضع عدم الاتصال بالشبكة (Offline).",
      icon: <Users className="w-7 h-7 text-gold-600" />,
      color: "bg-green-50 border-green-100",
    },
    {
      title: "التقارير المؤسساتية",
      description:
        "تقارير احترافية جاهزة بنقرة واحدة للجماعات الترابية والمؤسسات التعليمية لضمان شفافية التمويل.",
      icon: <FileText className="w-7 h-7 text-gold-600" />,
      color: "bg-purple-50 border-purple-100",
    },
  ];

  return (
    <section id="features" className="py-32 bg-cream-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-gold-600 font-bold tracking-widest uppercase text-sm mb-4">
            الوحدات الأساسية
          </h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight">
            مصممة خصيصاً للشفافية <br />
            في النقل القروي
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              key={idx}
              className="group bg-white p-10 border border-slate-200 hover:border-gold-500 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1.5 rounded-[2rem] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-50 rounded-bl-[100px] -z-0 transition-transform group-hover:scale-110"></div>
              <div className="relative z-10 flex flex-col h-full">
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border transition-transform group-hover:scale-110 group-hover:rotate-3 shadow-sm bg-white ${feature.color}`}
                >
                  {feature.icon}
                </div>
                <h4 className="text-2xl font-bold font-display text-slate-900 mb-4">
                  {feature.title}
                </h4>
                <p className="text-slate-600 text-lg leading-relaxed font-medium">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      title: "تسجيل المركبات",
      desc: "إضافة أسطول الحافلات وتحديد مساراتها الافتراضية.",
      icon: <Bus size={24} />,
    },
    {
      title: "إضافة السائقين والتلاميذ",
      desc: "توزيع بطاقات QR على التلاميذ وتخصيص السائقين.",
      icon: <Users size={24} />,
    },
    {
      title: "التتبع والمراقبة",
      desc: "بدء النظام في تتبع الرحلات، الحضور، واستهلاك الوقود.",
      icon: <Map size={24} />,
    },
    {
      title: "استخراج التقارير",
      desc: "مراجعة دورية للأداء والتقارير المالية والترابية.",
      icon: <BarChart3 size={24} />,
    },
  ];

  return (
    <section id="how-it-works" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight">
            آلية عمل مبسطة وفعالة
          </h3>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-[44px] right-24 left-24 h-1 bg-slate-100 rounded-full">
            <div className="absolute top-0 right-0 h-full w-1/2 bg-gradient-to-l from-gold-500 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="relative flex flex-col items-center md:items-center text-center"
              >
                <div className="w-24 h-24 rounded-full bg-cream-50 border-4 border-white shadow-xl flex items-center justify-center text-gold-600 mb-6 relative">
                  <div className="absolute inset-2 rounded-full border border-gold-200 border-dashed animate-[spin_10s_linear_infinite]"></div>
                  {step.icon}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center border-2 border-white">
                    {idx + 1}
                  </div>
                </div>
                <h4 className="text-xl font-bold font-display text-slate-900 mb-3">
                  {step.title}
                </h4>
                <p className="text-slate-600 font-medium leading-relaxed px-2">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const AdvancedAnalytics = () => {
  return (
    <section
      id="analytics"
      className="py-24 bg-slate-900 relative border-t border-b border-gold-500/20 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--color-gold-900)_0%,_transparent_40%)] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-gold-500 font-bold tracking-widest uppercase text-sm mb-4">
              أداء وشفافية
            </h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight mb-8">
              بيانات حية تصنع الفارق للفاعلين الترابيين
            </h3>
            <p className="text-slate-400 text-lg mb-12 font-medium leading-relaxed max-w-lg">
              نوفر لوحات قيادة متقدمة تعطي صانع القرار نظرة شاملة عن أداء أسطول
              النقل المدرسي، مما يسهل عملية التدقيق المالي والإداري.
            </p>

            <div className="grid grid-cols-2 gap-4 sm:gap-8">
              <div className="border-r-2 border-gold-500 pr-4 sm:pr-6">
                <div className="text-3xl sm:text-4xl font-display font-bold text-white mb-2">
                  98%
                </div>
                <div className="text-slate-400 text-sm sm:text-base font-medium">
                  دقة التتبع الجغرافي
                </div>
              </div>
              <div className="border-r-2 border-gold-500 pr-4 sm:pr-6">
                <div className="text-3xl sm:text-4xl font-display font-bold text-white mb-2">
                  100%
                </div>
                <div className="text-slate-400 text-sm sm:text-base font-medium">
                  شفافية إحصاء الوقود
                </div>
              </div>
              <div className="border-r-2 border-gold-500 pr-4 sm:pr-6">
                <div className="text-3xl sm:text-4xl font-display font-bold text-white mb-2">
                  24/7
                </div>
                <div className="text-slate-400 text-sm sm:text-base font-medium">
                  مراقبة مستمرة للنظام
                </div>
              </div>
              <div className="border-r-2 border-gold-500 pr-4 sm:pr-6">
                <div className="text-3xl sm:text-4xl font-display font-bold text-white mb-2">
                  0%
                </div>
                <div className="text-slate-400 text-sm sm:text-base font-medium">
                  فقدان للبيانات الميدانية
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gold-500 rounded-3xl blur-2xl opacity-10 translate-y-8"></div>
            <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700 shadow-2xl relative">
              <div className="flex justify-between items-center mb-8 border-b border-slate-700 pb-4">
                <h4 className="text-white font-bold text-lg font-display">
                  مؤشر الاستقرار المؤسساتي
                </h4>
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-slate-600"></div>
                  <div className="w-2 h-2 rounded-full bg-slate-600"></div>
                  <div className="w-2 h-2 rounded-full bg-slate-600"></div>
                </div>
              </div>
              {/* Mock Chart Area */}
              <div className="h-48 sm:h-64 flex items-end justify-between gap-1.5 sm:gap-4 mt-6">
                {[40, 70, 45, 90, 65, 100, 85].map((height, i) => (
                  <div
                    key={i}
                    className="w-full bg-slate-700 rounded-t-sm relative group"
                  >
                    <div
                      className="absolute bottom-0 w-full bg-gold-400 rounded-t-sm transition-all duration-500 hover:bg-gold-300"
                      style={{ height: `${height}%` }}
                    ></div>
                    {/* Hover Tooltip */}
                    <div className="opacity-0 group-hover:opacity-100 absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs py-1 px-2 rounded shadow-lg transition-opacity whitespace-nowrap pointer-events-none z-20">
                      {height}% كفاءة
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-4 text-slate-500 text-[10px] sm:text-xs font-mono">
                <span>يناير</span>
                <span>فبراير</span>
                <span>مارس</span>
                <span>أبريل</span>
                <span>ماي</span>
                <span>يونيو</span>
                <span>يوليوز</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatsRibbon = () => {
  return (
    <div className="bg-gold-500 text-slate-900 py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center divide-x-0 md:divide-x-0">
          <div className="flex flex-col items-center">
            <span className="text-4xl sm:text-5xl font-display font-black tracking-tight mb-2 drop-shadow-sm">
              +2000
            </span>
            <span className="text-xs sm:text-base font-bold uppercase tracking-widest text-slate-800">
              رحلة مسجلة
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl sm:text-5xl font-display font-black tracking-tight mb-2 drop-shadow-sm">
              +1000
            </span>
            <span className="text-xs sm:text-base font-bold uppercase tracking-widest text-slate-800">
              تلميذ مستفيد
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl sm:text-5xl font-display font-black tracking-tight mb-2 drop-shadow-sm">
              +200
            </span>
            <span className="text-xs sm:text-base font-bold uppercase tracking-widest text-slate-800">
              مركبة مجهزة
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl sm:text-5xl font-display font-black tracking-tight mb-2 drop-shadow-sm">
              +10
            </span>
            <span className="text-xs sm:text-base font-bold uppercase tracking-widest text-slate-800">
              مؤسسات شريكة
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const CallToAction = () => {
  return (
    <section className="py-32 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-gold-500 to-gold-400 rounded-[2.5rem] p-12 md:p-20 relative overflow-hidden text-center shadow-2xl shadow-gold-500/20">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--color-white)_0%,_transparent_60%)] opacity-20"></div>

          <BadgeCheck className="w-12 h-12 sm:w-16 sm:h-16 text-slate-900 mx-auto mb-6 sm:mb-8 opacity-90" />

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 mb-8 relative z-10 leading-tight">
            جاهزون لتطوير النقل المدرسي <br className="hidden sm:block" /> في
            مؤسستكم؟
          </h2>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-5 relative z-10">
            <button className="w-full sm:w-auto bg-slate-900 text-white font-bold px-10 py-5 text-lg hover:bg-slate-800 hover:scale-105 transition-all rounded-xl shadow-xl">
              اطلب عرضاً تجريبياً
            </button>
            <button className="w-full sm:w-auto bg-transparent border-2 border-slate-900 text-slate-900 font-bold px-10 py-5 text-lg hover:bg-slate-900 hover:text-white transition-all rounded-xl">
              تواصل معنا
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-slate-800 pb-16">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gold-500 p-2 rounded text-slate-900">
                <Bus size={22} />
              </div>
              <span className="font-display font-bold text-2xl text-white tracking-tight">
                أغراس ن سكيلة
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed font-medium">
              منصة رقمية ذكية لحكامة النقل المدرسي بالعالم القروي، تضمن الشفافية
              وتسهل مهام الجماعات الترابية وشركات النقل.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg tracking-wide font-display">
              المنصة
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-gold-400 font-medium transition-colors"
                >
                  لوحة القيادة
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-gold-400 font-medium transition-colors"
                >
                  مراقبة الوقود
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-gold-400 font-medium transition-colors"
                >
                  نظام الحضور
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-gold-400 font-medium transition-colors"
                >
                  تصدير التقارير
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg tracking-wide font-display">
              روابط سريعة
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-gold-400 font-medium transition-colors"
                >
                  من نحن
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-gold-400 font-medium transition-colors"
                >
                  شركائنا
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-gold-400 font-medium transition-colors"
                >
                  الدعم التقني
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-gold-400 font-medium transition-colors"
                >
                  تواصل معنا
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg tracking-wide font-display">
              الشروط
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-gold-400 font-medium transition-colors"
                >
                  سياسة الخصوصية
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-gold-400 font-medium transition-colors"
                >
                  شروط الاستخدام
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-gold-400 font-medium transition-colors"
                >
                  حماية البيانات
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 font-medium">
            &copy; 2026 أغراس ن سكيلة - جميع الحقوق محفوظة
          </p>
          <div className="flex gap-4">
            <Building2 className="text-slate-700" size={24} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function Landing() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSolution />
        <Features />
        <HowItWorks />
        <AdvancedAnalytics />
        <StatsRibbon />
        <CallToAction />
        <RegisterForm />
      </main>
      <Footer />
    </div>
  );
}
