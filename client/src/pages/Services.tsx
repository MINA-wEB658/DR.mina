import { Link } from "wouter";
import { ArrowLeft, ArrowRight, Baby, Check, HeartPulse, MessageCircle, Phone, ShieldCheck, Sparkles, Stethoscope, Syringe, Zap } from "lucide-react";
import { useState } from "react";

const phone = "01111447874";
const whatsappNumber = "201111447874";
const whatsappMessage = encodeURIComponent("مرحبًا د. مينا عادل، أرغب في حجز موعد للكشف.");
const images = [
  "https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=1200&q=88",
  "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=88",
  "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1200&q=88",
  "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=88",
  "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=88",
  "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=1200&q=88",
  "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&q=88",
];
type ServiceRow = { number: string; title: string; desc: string; icon: typeof Stethoscope; items: string[] };
const serviceData: ServiceRow[] = [
  { number: "01", title: "علاج الأسنان", desc: "نحافظ على صحة أسنانك من خلال تقييم دقيق وخيارات علاج واضحة تساعدك على اتخاذ القرار براحة.", icon: Stethoscope, items: ["علاج العصب والجذور", "الحشو وعلاج التسوس", "علاج اللثة"] },
  { number: "02", title: "تجميل الأسنان", desc: "حلول تجميلية مدروسة لتحسين مظهر الابتسامة مع الحفاظ على طبيعتها وانسجامها مع ملامحك.", icon: Sparkles, items: ["ابتسامة هوليود", "الفينير واللومينير", "تبييض الأسنان"] },
  { number: "03", title: "التركيبات", desc: "تركيبات ثابتة ومتحركة تساعد على استعادة الوظيفة والمظهر بعد فقدان أو تلف أحد الأسنان.", icon: HeartPulse, items: ["التيجان والجسور", "الثابتة والمتحركة", "المدعمة بالزرعات"] },
  { number: "04", title: "زراعة الأسنان", desc: "خيارات لتعويض الأسنان المفقودة بعد التقييم المناسب للحالة ومناقشة الخطة معك بوضوح.", icon: Syringe, items: ["زراعة الأسنان", "تعويض الأسنان المفقودة", "حلول الأسنان المكسورة"] },
  { number: "05", title: "تقويم الأسنان", desc: "خطط تقويم للأطفال والكبار لتحسين ترتيب الأسنان ودعم ابتسامة متوازنة.", icon: Zap, items: ["التقويم الثابت", "التقويم الشفاف", "تقويم الأطفال والكبار"] },
  { number: "06", title: "جراحة الفم والأسنان", desc: "إجراءات جراحية مناسبة بعد الفحص، مع شرح الخطوات والتعليمات اللازمة للعناية.", icon: ShieldCheck, items: ["خلع الأسنان", "خلع ضرس العقل", "إجراءات جراحية مناسبة"] },
  { number: "07", title: "أسنان الأطفال", desc: "زيارة لطيفة ومطمئنة تساعد طفلك على بناء علاقة صحية مع العناية بالأسنان.", icon: Baby, items: ["الكشف والمتابعة", "علاج تسوس الأطفال", "العناية بصحة أسنان الأطفال"] },
];
function Logo() { return <Link href="/" className="brand"><span className="brand-mark"><span>م</span></span><span className="brand-copy"><strong>د. مينا عادل</strong><small>طب وتجميل الأسنان</small></span></Link>; }
export default function Services() {
  const [expanded, setExpanded] = useState(0);
  return <div className="site-shell services-page"><header className="site-header"><div className="container header-inner"><Logo /><nav className="desktop-nav"><Link href="/">الرئيسية</Link><a href="#all-services">الخدمات</a><a href="#contact">تواصل معنا</a><Link className="header-cta" href="/#booking">احجز موعدك <ArrowLeft size={16} /></Link></nav><Link className="mobile-back" href="/"><ArrowRight size={20} /></Link></div></header><main>
    <section className="page-hero"><div className="container page-hero-inner"><Link href="/" className="back-link"><ArrowRight size={16} /> العودة للرئيسية</Link><span className="eyebrow">رعاية متكاملة</span><h1>خدمات صُممت<br /><em>لابتسامتك.</em></h1><p>نضع كل احتياجات الأسنان في مكان واحد، ونبدأ دائمًا من فهم حالتك وما يناسبك.</p></div><div className="page-hero-orb" /></section>
    <section id="all-services" className="section all-services"><div className="container"><div className="services-intro"><div><span className="eyebrow">تخصصاتنا</span><h2>اختر ما تحتاجه،<br /><em>ودع الباقي علينا.</em></h2></div><p>كل خدمة تبدأ بكشف وتقييم مناسب، ثم شرح واضح للخيارات المتاحة دون وعود مسبقة أو مبالغات.</p></div><div className="detailed-services">{serviceData.map((item, index) => { const Icon = item.icon; return <article className={`detailed-service ${expanded === index ? "expanded" : ""}`} key={item.title}><div className="detailed-service-image"><img src={images[index]} alt={item.title} /><span>{item.number}</span></div><div className="detailed-service-body"><div className="service-icon-large"><Icon size={23} /></div><h3>{item.title}</h3><p>{item.desc}</p><div className="service-feature-list">{item.items.map((entry) => <span key={entry}><Check size={15} /> {entry}</span>)}</div><a href="/#booking" className="inline-link">هل تحتاج إلى هذه الخدمة؟ احجز الآن <ArrowLeft size={16} /></a></div><button className="service-expand" onClick={() => setExpanded(expanded === index ? -1 : index)} aria-label="عرض تفاصيل الخدمة"><ArrowLeft size={18} /></button></article>; })}</div></div></section>
    <section id="contact" className="services-cta"><div className="container services-cta-inner"><div><span className="eyebrow">جاهز للخطوة التالية؟</span><h2>ابتسامة مريحة<br />تبدأ بمكالمة.</h2><p>تواصل معنا الآن أو احجز موعدك، وسنساعدك في معرفة البداية المناسبة لك.</p></div><div className="services-cta-actions"><a className="btn btn-light" href={`tel:${phone}`}><Phone size={17} /> اتصل الآن</a><a className="btn btn-outline-light" href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noreferrer"><MessageCircle size={17} /> WhatsApp</a></div></div></section>
  </main><footer className="site-footer"><div className="container footer-main"><div className="footer-brand"><Logo /><p>رعاية متكاملة لأسنانك،<br />بهدوء واهتمام.</p></div><div><h4>استكشف</h4><Link href="/">الرئيسية</Link><a href="#all-services">الخدمات</a><a href="#contact">تواصل معنا</a></div><div><h4>تواصل معنا</h4><a href={`tel:${phone}`} dir="ltr">{phone}</a><a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noreferrer">WhatsApp</a></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} د. مينا عادل لطب وتجميل الأسنان</span><span>المعلومات لا تغني عن الكشف الطبي.</span></div></footer></div>;
}
