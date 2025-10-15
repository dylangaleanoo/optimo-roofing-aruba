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

  // Social links (must be inside an object like this)
  const SOCIALS = {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    google: "https://g.page/",
  };

  // Formspree endpoint (optional)
  const FORM_ENDPOINT = "https://formspree.io/f/yourid";

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
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      })
        .then((res) => {
          if (!res.ok) throw new Error("Submission failed");
          setSubmitted(true);
        })
        .catch(() => alert("Sorry, something went wrong. You can also email us at " + EMAIL));
    } else {
      const subject = encodeURIComponent(`${COMPANY} Website Lead – ${form.service}`);
      const body = encodeURIComponent(
        `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nService: ${form.service}\nMessage: ${form.message}`
      );
      window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
      setSubmitted(true);
