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

const SOCIALS = {
  facebook: "https://facebook.com/",
  instagram: "https://instagram.com/",
  google: "https://g.page/",
};

// If you add a real endpoint below, the form will POST via AJAX (recommended).
// For Formspree, replace "yourid" with your actual ID from https://formspree.io
const FORM_ENDPOINT = "https://formspree.io/f/yourid";

// =====================
const [mobileOpen, setMobileOpen] = useState(false);
const [form, setForm] = useState({ name: "", phone: "", email: "", service: "Repair", message: "" });
const [submitted, setSubmitted] = useState(false);
const [errors, setErrors] = useState({});
