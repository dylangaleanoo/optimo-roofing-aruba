import { useState } from "react";
import { MapPin } from "lucide-react";

export default function RoofingSite() {
  const COMPANY = "Optimo Roofing Aruba";
  const PHONE = "+297 740-7106";
  const EMAIL = "optimoroofing@gmail.com";
  const CITY = "Aruba";
  const ADDRESS = "Aruba";
  const HOURS = "Mon–Sat: 8am–6pm";
  const LOGO = "/assets/optimo-logo.png";
  const BRAND = "#0A326E";

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!/^[0-9()\\-+\\.\\s]{7,}$/.test(form.phone)) e.phone = "Enter a valid phone.";
    if (!form.message.trim()) e.message = "Please enter a message.";
    return e;
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;

    const subject = encodeURIComponent(`${COMPANY} Website Lead`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nMessage: ${form.message}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <div className="font-sans text-neutral-900 bg-neutral-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <img src={LOGO} alt="Optimo Roofing Aruba" className="h-10 w-auto" />
            <div>
              <div className="font-extrabold text-xl text-[--brand]">{COMPANY}</div>
              <div className="text-xs text-neutral-500">Roofing • {CITY}</div>
            </div>
          </div>
          <a
            href={`tel:${PHONE.replace(/[^0-9+]/g, "")}`}
            className="hidden sm:inline-flex rounded-xl bg-[--brand] text-white px-4 py-2 font-semibold hover:opacity-90"
          >
            Call {PHONE}
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative text-center py-24 bg-gradient-to-b from-[--brand] to-[#153b8e] text-white">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-black">
            Roofs Built Right—On Time, On Budget.
          </h1>
          <p className="mt-4 text-lg text-white/90">
            From leaks to full replacements, we deliver durable roofing solutions with
            clean job sites and clear communication.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <a
              href="#contact"
              className="rounded-xl bg-white text-[--brand] px-6 py-3 font-semibold hover:bg-neutral-100"
            >
              Free Estimate
            </a>
            <a
              href="#why"
              className="rounded-xl border border-white text-white px-6 py-3 font-semibold hover:bg-white hover:text-[--brand]"
            >
              Why Choose Us
            </a>
          </div>
        </div>
      </section>

      {/* Aruba Banner */}
      <section className="bg-[--brand] text-white py-6 flex items-center justify-center gap-3">
        <MapPin size={24} />
        <p className="text-lg font-semibold tracking-wide">
          Proudly serving the entire island of Aruba.
        </p>
      </section>

      {/* Why Us */}
      <section id="why" className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-black text-center">Why Choose {COMPANY}?</h2>
        <p className="mt-3 text-center text-neutral-600 max-w-2xl mx-auto">
          We’re a local crew focused on craftsmanship, safety, and honest communication.
          No surprise costs, no sloppy sites—just solid roofs that last.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <WhyCard title="Licensed & Insured" desc="Peace of mind with every project, start to finish." />
          <WhyCard title="Quality Materials" desc="We use top-grade shingles, tiles, and membranes." />
          <WhyCard title="Clean Worksites" desc="Our crew leaves your property spotless after every job." />
          <WhyCard title="Local Expertise" desc="Aruba-based team that knows our island’s weather challenges." />
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="bg-neutral-900 text-neutral-50 py-20 px-4">
        <div className="max-w-3xl mx-auto rounded-2xl bg-white text-neutral-900 p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-center text-[--brand] mb-6">
            Request Your Free Estimate
          </h2>
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium">Name*</label>
                <input
                  className="mt-1 w-full rounded-xl border p-3"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="text-sm font-medium">Phone*</label>
                <input
                  className="mt-1 w-full rounded-xl border p-3"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
                {errors.phone && <p className="text-sm text-red-600 mt-1">{errors.phone}</p>}
              </div>
              <div>
                <label className="text-sm font-medium">Email</label>
                <input
                  className="mt-1 w-full rounded-xl border p-3"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div>
                <label className="text-sm font-medium">Message*</label>
                <textarea
                  className="mt-1 w-full rounded-xl border p-3 min-h-[120px]"
