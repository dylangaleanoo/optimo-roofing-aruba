import { useState } from "react";
// keeping it simple (no external icons for now to avoid build issues)

export default function RoofingSite() {
  // ==== CONFIG ====
  const COMPANY = "Optimo Roofing Aruba";
  const PHONE = "+297 740-7106";
  const EMAIL = "optimoroofing@gmail.com";
  const CITY = "Aruba";
  const ADDRESS = "Aruba";
  const HOURS = "Mon–Sat: 8am–6pm";
  const LOGO = "/assets/optimo-logo.png";
  const BRAND = "#0A326E";

  // ==== STATE ====
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!/^[0-9()\-+.\s]{7,}$/.test(form.phone)) e.phone = "Enter a valid phone.";
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
    <div className="font-sans text-neutral-900 bg-neutral-50" style={{ '--brand': BRAND }}>
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <img src={LOGO} alt="Optimo Roofing Aruba" className="h-10 w-auto" />
            <div>
              <div className="font-extrabold text-xl" style={{ color: 'var(--brand)' }}>{COMPANY}</div>
              <div className="text-xs text-neutral-500">Roofing • {CITY}</div>
            </div>
          </div>
          <a
            href={`tel:${PHONE.replace(/[^0-9+]/g, "")}`}
            className="hidden sm:inline-flex rounded-xl px-4 py-2 font-semibold text-white"
            style={{ backgroundColor: 'var(--brand)' }}
          >
            Call {PHONE}
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="text-center py-24 text-white" style={{ background: 'linear-gradient(180deg, var(--brand), #153b8e)' }}>
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-black">Roofs Built Right—On Time, On Budget.</h1>
          <p className="mt-4 text-lg text-white/90">
            From leaks to full replacements, we deliver durable roofing solutions with clean job sites and clear communication.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <a
              href="#contact"
              className="rounded-xl px-6 py-3 font-semibold text-[color:var(--brand)] bg-white hover:opacity-90"
            >
              Free Estimate
            </a>
            <a
              href="#why"
              className="rounded-xl border border-white text-white px-6 py-3 font-semibold hover:bg-white hover:text-[color:var(--brand)]"
            >
              Why Choose Us
            </a>
          </div>
        </div>
      </section>

      {/* Aruba Banner */}
      <section className="py-6 text-center text-white" style={{ backgroundColor: 'var(--brand)' }}>
        <p className="text-lg font-semibold tracking-wide">Proudly serving the entire island of Aruba.</p>
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

      {/* Contact */}
      <section id="contact" className="bg-neutral-900 text-neutral-50 py-20 px-4">
        <div className="max-w-3xl mx-auto rounded-2xl bg-white text-neutral-900 p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6" style={{ color: 'var(--brand)' }}>
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
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
                {errors.message && <p className="text-sm text-red-600 mt-1">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="w-full rounded-xl px-4 py-3 font-semibold text-white hover:opacity-90"
                style={{ backgroundColor: 'var(--brand)' }}
              >
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
      <footer className="bg-white border-t text-center py-8 text-sm text-neutral-600">
        <p>© {new Date().getFullYear()} {COMPANY}. All rights reserved.</p>
        <p>{ADDRESS} • {HOURS} • <a className="underline" href={`tel:${PHONE.replace(/[^0-9+]/g, "")}`}>{PHONE}</a></p>
      </footer>
    </div>
  );
}

function WhyCard({ title, desc }) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm text-center">
      <h3 className="text-lg font-bold" style={{ color: 'var(--brand)' }}>{title}</h3>
      <p className="mt-2 text-neutral-700">{desc}</p>
    </div>
  );
}
