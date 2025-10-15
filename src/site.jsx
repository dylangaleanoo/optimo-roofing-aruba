import { useState } from "react";
import { MapPin } from "lucide-react";

/**
 * Optimo Roofing Aruba – Full Website (React + Tailwind)
 * Run: npm install && npm run dev
 */

export default function RoofingSite() {
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
  const SOCIALS = {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    google: "https://g.page/",
  };
  // If you add a real endpoint below, the form will POST via AJAX (recommended).
  // For Formspree, replace "yourid" with your actual ID from https://formspree.io
  const FORM_ENDPOINT = "https://formspree.io/f/yourid";

  const [mobileOpen, setMobileOpen] = useState(false);
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    google: "https://g.page/",
  };

  const [mobileOpen, setMobileOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "Repair", message: "" });
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
    if (!/^[0-9()\-\+.\s]{7,}$/.test(form.phone)) e.phone = "Enter a valid phone.";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email.";
    if (!form.message.trim()) e.message = "Tell us a bit about your project.";
    return e;
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length !== 0) return;

    // Prefer AJAX POST to FORM_ENDPOINT if configured
    if (FORM_ENDPOINT && FORM_ENDPOINT.startsWith("http")) {
      const payload = {
        name: form.name,
        phone: form.phone,
        email: form.email,
        service: form.service,
        message: form.message,
        _subject: `${COMPANY} Website Lead – ${form.service}`,
      };
      fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(payload),
      })
        .then((res) => {
          if (!res.ok) throw new Error("Submission failed");
          setSubmitted(true);
        })
        .catch(() => {
          alert("Sorry, something went wrong. You can also email us at " + EMAIL);
        });
    } else {
      // Fallback: mailto
      const subject = encodeURIComponent(`${COMPANY} Website Lead – ${form.service}`);
      const body = encodeURIComponent(
        `Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}
Service: ${form.service}
Message: ${form.message}`
      );
      window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
      setSubmitted(true);
    }
  }
  }

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900" style={{ ["--brand"]: BRAND, ["--brand-gray"]: BRAND_GRAY }}>
      {/* Top bar */}
      <div className="w-full bg-neutral-900 text-neutral-100 text-sm">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-2">
          <p className="opacity-90">Serving {CITY} • {HOURS}</p>
          <a className="font-semibold hover:opacity-80" href={`tel:${PHONE.replace(/[^0-9+]/g, "")}`}>Call {PHONE}</a>
        </div>
      </div>

      {/* Header / Nav */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={LOGO} alt={`${COMPANY} logo`} className="h-9 w-auto" />
            <div>
              <div className="font-black tracking-tight text-xl">{COMPANY}</div>
              <div className="text-xs text-neutral-500 -mt-0.5">Roofing • {CITY}</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-sm font-medium text-neutral-700 hover:text-neutral-900">
                {n.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-xl border px-4 py-2 text-sm font-semibold bg-[--brand] hover:opacity-90 text-white shadow-sm">
              Free Estimate
            </a>
          </nav>
          <button className="md:hidden p-2 rounded-lg border" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            <div className="h-0.5 w-5 bg-neutral-900 mb-1" />
            <div className="h-0.5 w-5 bg-neutral-900 mb-1" />
            <div className="h-0.5 w-5 bg-neutral-900" />
          </button>
        </div>
        {mobileOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="px-4 py-3 space-y-2">
              {nav.map((n) => (
                <a key={n.href} href={n.href} className="block py-2" onClick={() => setMobileOpen(false)}>
                  {n.label}
                </a>
              ))}
              <a href="#contact" className="inline-flex items-center rounded-xl border px-4 py-2 text-sm font-semibold bg-[--brand] text-white hover:opacity-90" onClick={() => setMobileOpen(false)}>
                Free Estimate
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30" />
        <div className="mx-auto max-w-7xl px-4 py-24 relative">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight">Roofs Built Right—On Time, On Budget.</h1>
            <p className="mt-4 text-lg text-neutral-700">From leaks to full replacements, we deliver durable roofing solutions with clean job sites and clear communication.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center rounded-xl border px-5 py-3 text-base font-semibold bg-[--brand] hover:opacity-90 text-white shadow">
                Get a Free Estimate
              </a>
              <a href="#services" className="inline-flex items-center rounded-xl border px-5 py-3 text-base font-semibold bg-white hover:bg-neutral-50">
                Explore Services
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-neutral-700">
              <Badge>Licensed & Insured</Badge>
              <Badge>Shingle, Tile & Membrane</Badge>
              <Badge>Financing Available</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Aruba banner with icon */}
      <section className="bg-[--brand] text-white py-6 text-center flex items-center justify-center gap-3">
        <MapPin size={24} className="text-white" />
        <p className="text-lg font-semibold tracking-wide">Serving the entire island of Aruba with trusted roofing solutions.</p>
      </section>

      {/* Trust Bar */}
      <section className="border-y bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <Stat number="4.9★" label="Average Rating" />
          <Stat number="25+" label="Years Combined Experience" />
          <Stat number="24–48 hrs" label="Emergency Response" />
          <Stat number="10 yrs" label="Workmanship Warranty" />
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-4 py-20">
        <h2 className="text-3xl font-black tracking-tight">Our Roofing Services</h2>
        <p className="mt-2 text-neutral-700 max-w-2xl">We inspect, repair, and replace all major roofing systems for residential and light commercial properties.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard title="Commercial & Residential" desc="Full-service roofing for homes, villas, apartments, and businesses." />
          <ServiceCard title="Membrane Roofing" desc="PVC/TPO/EPDM and hybrid systems for flat and low-slope roofs." />
          <ServiceCard title="Shingle Roofing" desc="Architectural shingles built for coastal sun and wind." />
          <ServiceCard title="Tile Roofing" desc="Clay and concrete tiles with hurricane-conscious installs." />
          <ServiceCard title="Torch‑Applied Membrane" desc="Professional membrane torching with meticulous safety and flashing." />
          <ServiceCard title="Inspections & Maintenance" desc="Preventative programs and sale/insurance reports." />
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why" className="bg-neutral-900 text-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-20 grid lg:grid-cols-2 gap-14">
          <div>
            <h2 className="text-3xl font-black tracking-tight">Why {COMPANY}?</h2>
            <p className="mt-4 text-neutral-300">We’re a local crew focused on craftsmanship, safety, and straight talk. No surprise costs, no sloppy sites—just solid roofs that last.</p>
            <ul className="mt-6 space-y-3 text-neutral-200">
              <li>• Factory-certified installers & code-compliant builds</li>
              <li>• Transparent quotes with line-item details</li>
              <li>• Magnetic nail sweep & thorough cleanup</li>
              <li>• Extended manufacturer & workmanship warranties</li>
            </ul>
            <div className="mt-8">
              <a href="#contact" className="inline-flex items-center rounded-xl border border-neutral-700 px-5 py-3 text-base font-semibold bg-[--brand] text-white hover:opacity-90">
                Request an On-Site Inspection
              </a>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <PhotoBox caption="Architectural shingles" />
            <PhotoBox caption="Standing seam metal" />
            <PhotoBox caption="Tile and slate" />
            <PhotoBox caption="Flat & low-slope" />
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="mx-auto max-w-7xl px-4 py-20">
        <div className="flex items-end justify_between">
          <div>
            <h2 className="text-3xl font-black tracking-tight">Roofing Types & Finishes</h2>
            <p className="mt-2 text-neutral-700">Sample photos to show the systems we install. Project gallery coming soon.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex rounded-xl border px-4 py-2 font-semibold text-[--brand] border-[--brand]">Get a Quote</a>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1470&auto=format&fit=crop', caption: 'Membrane (TPO/PVC)' },
            { src: 'https://images.unsplash.com/photo-1562259949-e8e7689d7829?q=80&w=1470&auto=format&fit=crop', caption: 'Architectural Shingle' },
            { src: 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?q=80&w=1470&auto=format&fit=crop', caption: 'Clay/Concrete Tile' },
            { src: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1470&auto=format&fit=crop', caption: 'Standing Seam Metal' },
            { src: 'https://images.unsplash.com/photo-1600566753276-c8f77c3f88b0?q=80&w=1470&auto=format&fit=crop', caption: 'Torch‑Applied Membrane' },
            { src: 'https://images.unsplash.com/photo-1581091308361-1e7e5f2d4e48?q=80&w=1470&auto=format&fit=crop', caption: 'Flat & Low‑slope' },
          ].map((item, i) => (
            <figure key={i} className="relative aspect-video rounded-2xl overflow-hidden shadow-sm">
              <img alt={item.caption} className="absolute inset-0 h-full w-full object-cover" src={item.src} />
              <figcaption className="absolute bottom-2 left-2 rounded-lg bg-black/55 px-2 py-1 text-xs text-white">{item.caption}</figcaption>
            </figure>
          ))}
        </div>
        <p className="text-xs text-neutral-500 mt-3">Images are representative. Ask for references to see nearby completed roofs.</p>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-neutral-100 border-y">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <h2 className="text-3xl font-black tracking-tight">What Customers Say</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Review quote="They fixed our leak the same day. Crew was courteous and tidy—highly recommend!" name="Maria G." />
            <Review quote="Transparent quote, on-time install, and our yard was spotless after." name="James R." />
            <Review quote="Quality workmanship and great communication throughout the replacement." name="Priya S." />
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="flex items-center justify-center px-4 py-20">
        <div className="max-w-lg w-full rounded-2xl border p-8 bg-white shadow-md text-center">
          <h3 className="text-2xl font-bold text-[--brand]">Service Area</h3>
          <p className="mt-3 text-neutral-700 text-lg">We proudly serve the entire island of Aruba.</p>
          <div className="mt-6 aspect-video w-full rounded-xl overflow-hidden bg-neutral-200 grid place-items-center text-neutral-600">
            <span>Google Map Embed Coming Soon</span>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-neutral-900 text-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-20 grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-black tracking-tight">Request Your Free Estimate</h2>
            <p className="mt-3 text-neutral-300">Tell us about your roof and the best time to reach you. We’ll confirm quickly.</p>
            <div className="mt-6 text-sm text-neutral-300 space-y-1">
              <div><strong>Phone:</strong> <a className="hover:underline" href={`tel:${PHONE.replace(/[^0-9+]/g, "")}`}>{PHONE}</a></div>
              <div><strong>Email:</strong> <a className="hover:underline" href={`mailto:${EMAIL}`}>{EMAIL}</a></div>
              <div><strong>Address:</strong> {ADDRESS}</div>
              <div><strong>Hours:</strong> {HOURS}</div>
              <div><strong>License:</strong> {LICENSE}</div>
            </div>
            <div className="mt-6 flex gap-3">
              <Social icon="facebook" href={SOCIALS.facebook} />
              <Social icon="instagram" href={SOCIALS.instagram} />
              <Social icon="google" href={SOCIALS.google} />
            </div>
          </div>

          <div className="rounded-2xl bg-white text-neutral-900 p-6 shadow-lg">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Name*</label>
                  <input className="mt-1 w-full rounded-xl border p-3" value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} placeholder="Your full name" />
                  {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name}</p>}
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Phone*</label>
                    <input className="mt-1 w-full rounded-xl border p-3" value={form.phone} onChange={(e)=>setForm({...form,phone:e.target.value})} placeholder="(+297) 740-7106" />
                    {errors.phone && <p className="text-sm text-red-600 mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <input className="mt-1 w-full rounded-xl border p-3" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} placeholder="you@example.com" />
                    {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Service</label>
                  <select className="mt-1 w-full rounded-xl border p-3" value={form.service} onChange={(e)=>setForm({...form,service:e.target.value})}>
                    <option>Repair</option>
                    <option>Replacement</option>
                    <option>Inspection</option>
                    <option>Gutter/Flashing</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium">Message*</label>
                  <textarea className="mt-1 w-full rounded-xl border p-3 min-h-[120px]" value={form.message} onChange={(e)=>setForm({...form,message:e.target.value})} placeholder="Tell us about the issue or project..." />
                  {errors.message && <p className="text-sm text-red-600 mt-1">{errors.message}</p>}
                </div>
                <button type="submit" className="w-full rounded-xl bg-[--brand] hover:opacity-90 px-4 py-3 font-semibold text-white">
                  Send Request
                </button>
                <p className="text-xs text-neutral-500">By submitting, you agree to be contacted by {COMPANY}. Your info is kept private and processed securely.</p>
              </form>
            ) : (
              <div className="text-center py-10">
                <div className="mx-auto h-16 w-16 rounded-full grid place-items-center bg-green-100">
                  <div className="h-8 w-8 rounded-full bg-green-500" />
                </div>
                <h3 className="mt-4 text-xl font-bold">Thanks! We got your message.</h3>
                <p className="text-neutral-600">We’ll reach out shortly.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="font-black text-lg">{COMPANY}</div>
            <p className="mt-2 text-sm text-neutral-600">Quality roofing for {CITY} homes and businesses.</p>
          </div>
          <div>
            <div className="font-semibold">Contact</div>
            <ul className="mt-2 space-y-1 text-sm text-neutral-600">
              <li><a className="hover:underline" href={`tel:${PHONE.replace(/[^0-9+]/g, "")}`}>{PHONE}</a></li>
              <li><a className="hover:underline" href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
              <li>{ADDRESS}</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Quick Links</div>
            <ul className="mt-2 space-y-1 text-sm text-neutral-600">
              {nav.map(n => (
                <li key={n.href}><a className="hover:underline" href={n.href}>{n.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-semibold">Legal</div>
            <ul className="mt-2 space-y-1 text-sm text-neutral-600">
              <li>© {new Date().getFullYear()} {COMPANY}</li>
              <li>All rights reserved.</li>
              <li>{LICENSE}</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ===== Components =====
function Badge({ children }) {
  return <span className="inline-flex items-center rounded-lg bg-white/80 px-3 py-1 text-sm shadow-sm border">{children}</span>;
}

function Stat({ number, label }) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="text-2xl font-black">{number}</div>
      <div className="text-sm text-neutral-600">{label}</div>
    </div>
  );
}

function ServiceCard({ title, desc }) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm flex flex-col">
      <div className="h-36 w-full rounded-xl bg-neutral-200 mb-4 overflow-hidden">
        <img alt="service" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1470&auto=format&fit=crop" />
      </div>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="mt-1 text-neutral-700 flex-1">{desc}</p>
      <a href="#contact" className="mt-4 inline-flex rounded-xl border px-4 py-2 text-sm font-semibold">Get Quote</a>
    </div>
  );
}

function PhotoBox({ caption }) {
  return (
    <figure className="relative rounded-2xl overflow-hidden bg-neutral-200 aspect-video">
      <img
        alt={caption}
        className="absolute inset-0 h-full w-full object-cover"
        src="https://images.unsplash.com/photo-1562259949-e8e7689d7829?q=80&w=1470&auto=format&fit=crop"
      />
      <figcaption className="absolute bottom-2 left-2 rounded-lg bg-black/50 px-2 py-1 text-xs text-white">{caption}</figcaption>
    </figure>
  );
}

function Review({ quote, name }) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="text-lg">“{quote}”</div>
      <div className="mt-3 text-sm text-neutral-600">— {name}</div>
    </div>
  );
}

function Social({ icon, href }) {
  const label = icon.charAt(0).toUpperCase() + icon.slice(1);
  return (
    <a href={href} aria-label={label} className="h-10 w-10 grid place-items-center rounded-full border bg-white hover:bg-neutral-50">
      <span className="text-sm">{label[0]}</span>
    </a>
  );
}
