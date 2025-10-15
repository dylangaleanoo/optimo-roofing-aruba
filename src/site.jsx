import { useState } from "react";
import { MapPin } from "lucide-react";

export default function RoofingSite() {
  // ====== CONFIG ======
  const COMPANY = "Optimo Roofing Aruba";
  const PHONE = "+297 740-7106";
  const EMAIL = "optimoroofing@gmail.com";
  const CITY = "Aruba";
  const ADDRESS = "Aruba";
  const HOURS = "Mon–Sat: 8am–6pm";
  const LICENSE = "";
  const LOGO = "/assets/optimo-logo.png";
  const BRAND = "#0A326E";
  const BRAND_GRAY = "#A9A9A9";

  // Social links (must be inside an object)
  const SOCIALS = {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    google: "https://g.page/",
  };

  // ====== STATE / HOOKS ======
  const [mobileOpen, setMobileOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Repair",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const nav = [
    { href: "#services", label: "Services" },
    { href: "#why", label: "Why Us" },
    { href: "#gallery", label: "Gallery" },
    { href: "#testimonials", label: "Reviews" },
    { href: "#contact", label: "Contact" },
  ];

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!/^[0-9()\-+.\s]{7,}$/.test(form.phone)) e.phone = "Enter a valid phone.";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email.";
    if (!form.message.trim()) e.message = "Tell us a bit about your project.";
    return e;
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length !== 0) return;

    // Simple mailto submit
    const subject = encodeURIComponent(`${COMPANY} Website Lead – ${form.service}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nService: ${form.service}\nMessage: ${form.message}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900" style={{ ["--brand"]: BRAND, ["--brand-gray"]: BRAND_GRAY }}>
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white border-b">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={LOGO} alt="Optimo Roofing logo" className="h-9 w-auto" />
            <div>
              <div className="font-black text-xl">{COMPANY}</div>
              <div className="text-xs text-neutral-500">Roofing • {CITY}</div>
            </div>
          </div>
          <nav className="hidden md:flex gap-6">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-sm font-medium hover:text-[--brand]">
                {n.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-xl border px-4 py-2 text-sm font-semibold bg-[--brand] text-white">
              Free Estimate
            </a>
          </nav>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 border rounded-lg">☰</button>
        </div>
        {mobileOpen && (
          <div className="md:hidden border-t bg-white px-4 py-3 space-y-2">
            {nav.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setMobileOpen(false)} className="block py-2">
                {n.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setMobileOpen(false)} className="block bg-[--brand] text-white px-4 py-2 rounded-xl text-center">
              Free Estimate
            </a>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30" />
        <div className="mx-auto max-w-7xl px-4 py-24 relative">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">Roofs Built Right—On Time, On Budget.</h1>
          <p className="mt-4 text-lg text-neutral-700">From leaks to full replacements, we deliver durable roofing solutions with clean job sites and clear communication.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center rounded-xl border px-5 py-3 text-base font-semibold bg-[--brand] text-white">
              Get a Free Estimate
            </a>
            <a href="#services" className="inline-flex items-center rounded-xl border px-5 py-3 text-base font-semibold bg-white">
              Explore Services
            </a>
          </div>
        </div>
      </section>

      {/* Aruba Banner */}
      <section className="bg-[--brand] text-white py-6 text-center flex items-center justify-center gap-3">
        <MapPin size={24} />
        <p className="text-lg font-semibold tracking-wide">Serving all of Aruba with trusted roofing solutions.</p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-neutral-900 text-neutral-50 py-20 px-4">
        <div className="max-w-3xl mx-auto rounded-2xl bg-white text-neutral-900 p-6 shadow-lg">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium">Name*</label>
                <input className="mt-1 w-full rounded-xl border p-3" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="text-sm font-medium">Phone*</label>
                <input className="mt-1 w-full rounded-xl border p-3" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                {errors.phone && <p className="text-sm text-red-600 mt-1">{errors.phone}</p>}
              </div>
              <div>
                <label className="text-sm font-medium">Email</label>
                <input className="mt-1 w-full rounded-xl border p-3" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              </div>
              <div>
                <label className="text-sm font-medium">Message*</label>
                <textarea className="mt-1 w-full rounded-xl border p-3 min-h-[120px]" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                {errors.message && <p className="text-sm text-red-600 mt-1">{errors.message}</p>}
              </div>
              <button type="submit" className="w-full rounded-xl bg-[--brand] px-4 py-3 font-semibold text-white">
                Send Request
              </button>
            </form>
          ) : (
            <div className="text-center py-10">
              <div className="mx-auto h-16 w-16 rounded-full bg-green-500" />
              <h3 className="mt-4 text-xl font-bold">Thanks! We got your message.</h3>
              <p className="text-neutral-600">We’ll reach out shortly.</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-center py-6 border-t">
        <p className="text-sm text-neutral-600">© {new Date().getFullYear()} {COMPANY}. All rights reserved.</p>
      </footer>
    </div>
  );
}
