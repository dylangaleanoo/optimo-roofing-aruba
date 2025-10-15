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

  // Social links
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

    // Simple mailto: fallback
    const subject = encodeURIComponent(`${COMPANY} Website Lead – ${form.service}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nService: ${form.service}\nMessage: ${form.message}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
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

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80
