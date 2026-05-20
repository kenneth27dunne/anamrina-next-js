"use client";
import React, { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import CreatableSelect from "react-select/creatable";
const Select = CreatableSelect;
import { FaPhone } from "react-icons/fa6";
import { IoIosMail, IoIosPin } from "react-icons/io";
import { LuAlarmClock } from "react-icons/lu";
import { Arr, lbl } from "../reference/Primitives";
import { submitContactEmail } from "../../lib/submitContactEmail";
import { buildContactSubmitPayload } from "../../lib/contactFormClientGuards";
import ContactFormHoneypot from "./ContactFormHoneypot";

const customSelectStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: '#f3f4f6', // Tailwind bg-gray-100
    borderColor: state.isFocused ? '#2563eb' : '#d1d5db', // Tailwind border-blue-600 or border-gray-300
    borderRadius: '0.375rem', // Tailwind rounded-md
    minHeight: '48px',
    boxShadow: state.isFocused ? '0 0 0 2px #2563eb33' : 'none', // Tailwind ring-2 ring-blue-600/20
    paddingLeft: '0.75rem', // Tailwind p-3
    paddingRight: '0.75rem',
    fontSize: '1rem',
    outline: 'none',
    '&:hover': {
      borderColor: '#2563eb',
    },
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: 0,
  }),
  input: (provided) => ({
    ...provided,
    margin: 0,
    padding: 0,
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#111827', // Tailwind text-gray-900
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#6b7280', // Tailwind text-gray-400
    fontSize: '1rem',
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: '0.375rem',
    zIndex: 20,
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? '#2563eb' // Tailwind bg-blue-600
      : state.isFocused
      ? '#dbeafe' // Tailwind bg-blue-100
      : '#fff',
    color: state.isSelected ? '#fff' : '#111827',
    cursor: 'pointer',
  }),
  indicatorSeparator: () => ({ display: 'none' }),
};

const referenceSelectStyles = {
  container: (provided) => ({ ...provided, width: "100%" }),
  control: (provided, state) => ({
    ...provided,
    minWidth: 0,
    backgroundColor: "#FFFFFF",
    borderColor: state.isFocused ? "#00B4D8" : "#E2E8EF",
    borderRadius: "8px",
    minHeight: "48px",
    boxShadow: state.isFocused ? "0 0 0 3px rgba(0,180,216,0.12)" : "none",
    fontSize: "0.88rem",
    outline: "none",
    "&:hover": { borderColor: "#00B4D8" },
  }),
  valueContainer: (provided) => ({ ...provided, padding: 0 }),
  input: (provided) => ({ ...provided, margin: 0, padding: 0 }),
  singleValue: (provided) => ({ ...provided, color: "#111C28" }),
  placeholder: (provided) => ({ ...provided, color: "#718096", fontSize: "0.88rem" }),
  menu: (provided) => ({ ...provided, borderRadius: "8px", zIndex: 30 }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#00B4D8" : state.isFocused ? "#E6F7FB" : "#fff",
    color: state.isSelected ? "#111C28" : "#111C28",
    cursor: "pointer",
  }),
  indicatorSeparator: () => ({ display: "none" }),
};

const roleOptions = [
  { value: "General Enquiry", label: "None. I have a general enquiry" },
  { value: "Legal", label: "Legal" },
  { value: "Accounting/Bookkeeping", label: "Accounting/Bookkeeping" },
  { value: "Logistics", label: "Logistics" },
  { value: "Admin & Operations", label: "Admin & Operations" },
];

const experienceOptions = [
  { value: "1+", label: "1+" },
  { value: "3+", label: "3+" },
  { value: "5+", label: "5+" },
  { value: "10+", label: "10+" },
];

const dynamicFields = {
  "Accounting/Bookkeeping": (
    <>
      <div className="mb-2">
        <label className="font-semibold leading-10">Skills/Software</label>
        <Select
          isMulti
          options={[
            { value: "Sage", label: "Sage" },
            { value: "Xero", label: "Xero" },
            { value: "QuickBooks", label: "QuickBooks" },
            { value: "BrightPay", label: "BrightPay" },
            { value: "Payroll", label: "Payroll" },
            { value: "VAT", label: "VAT" },
          ]}
          classNamePrefix="select" className="w-full bg-gray-100 border border-gray-300 rounded-md"
          styles={customSelectStyles}
        />
      </div>
    </>
  ),
  Legal: (
    <>
      <div className="mb-2">
        <label className="font-semibold leading-10">Area of Law</label>
        <Select
          options={[
            { value: "Corporate", label: "Corporate" },
            { value: "Litigation", label: "Litigation" },
            { value: "Conveyancing", label: "Conveyancing" },
            { value: "Family", label: "Family" },
            { value: "Employment Law", label: "Employment Law" },
          ]}
          classNamePrefix="select"
          styles={customSelectStyles}
        />
      </div>
    </>
  ),
  Logistics: (
    <>
      <div className="mb-2">
        <label className="font-semibold leading-10">Role Type</label>
        <Select
          options={[
            { value: "Driver", label: "Driver" },
            { value: "Warehouse Staff", label: "Warehouse Staff" },
            { value: "Inventory Manager", label: "Inventory Manager" },
            { value: "Supply Chain Coordinator", label: "Supply Chain Coordinator" },
          ]}
          classNamePrefix="select"
          styles={customSelectStyles}
        />
      </div>
    </>
  ),
  "Admin & Operations": (
    <>
      <div className="mb-2">
        <label className="font-semibold leading-10">Software Skills</label>
        <Select
          isMulti
          options={[
            { value: "MS Office", label: "MS Office" },
            { value: "CRM", label: "CRM" },
            { value: "ERP Systems", label: "ERP Systems" },
            { value: "Excel Advanced", label: "Excel Advanced" },
          ]}
          classNamePrefix="select"
          styles={customSelectStyles}
        />
      </div>
    </>
  ),
};

export default function DynamicContactForm({ Title, Description, variant }) {
  const formLoadedAt = useRef(Date.now());
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    experience: "",
    message: "",
    companyWebsite: "",
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (successMessage || errorMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage("");
        setErrorMessage("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage, errorMessage]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
  };

  const handleSelectChange = (selectedOption, fieldName) => {
    setFormData({ ...formData, [fieldName]: selectedOption ? selectedOption.value : "" });
    setErrors((prev) => ({ ...prev, [fieldName]: undefined }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "First name is required.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.role) {
      newErrors.role = "Enquiry type is required.";
    }
    if (formData.role && formData.role !== "General Enquiry" && !formData.experience) {
      newErrors.experience = "Years of experience is required.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      setSuccessMessage("");
      setErrorMessage("");
      return;
    }

    setLoading(true);
    const result = await submitContactEmail(
      buildContactSubmitPayload(formData, formLoadedAt.current)
    );
    setLoading(false);
    if (result.ok) {
      setSuccessMessage("Message sent successfully!");
      setErrorMessage("");
      setFormData({
        name: "",
        email: "",
        company: "",
        role: "",
        experience: "",
        message: "",
        companyWebsite: "",
      });
      setErrors({});
    } else {
      setSuccessMessage("");
      setErrorMessage(result.error);
    }
  };

  const selectStyles = variant === "reference" ? referenceSelectStyles : customSelectStyles;

  if (variant === "reference") {
    return (
      <form onSubmit={handleSubmit} noValidate>
        <div style={{ marginBottom: "14px" }} className="two-col two-col-form">
          <div>
            <label style={lbl}>Your Name *</label>
            <input
              className="inp"
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              style={{ borderColor: errors.name ? "#E53E3E" : undefined }}
            />
            {errors.name && <p style={{ color: "#E53E3E", fontSize: "0.75rem", marginTop: "4px" }}>{errors.name}</p>}
          </div>
          <div>
            <label style={lbl}>Email *</label>
            <input
              className="inp"
              type="email"
              name="email"
              placeholder="you@practice.ie"
              value={formData.email}
              onChange={handleChange}
              style={{ borderColor: errors.email ? "#E53E3E" : undefined }}
            />
            {errors.email && <p style={{ color: "#E53E3E", fontSize: "0.75rem", marginTop: "4px" }}>{errors.email}</p>}
          </div>
        </div>
        <div style={{ marginBottom: "14px" }} className="two-col two-col-form">
          <div>
            <label style={lbl}>Company (optional)</label>
            <input className="inp" type="text" name="company" placeholder="Practice or company" value={formData.company} onChange={handleChange} />
          </div>
          <div>
            <label style={lbl}>Enquiry type *</label>
            <Select
              options={roleOptions}
              value={roleOptions.find((option) => option.value === formData.role) || null}
              onChange={(selectedOption) => handleSelectChange(selectedOption, "role")}
              placeholder="Select a type"
              classNamePrefix="select"
              styles={selectStyles}
            />
            {errors.role && <p style={{ color: "#E53E3E", fontSize: "0.75rem", marginTop: "4px" }}>{errors.role}</p>}
          </div>
        </div>
        {formData.role && formData.role !== "General Enquiry" && (
          <div style={{ marginBottom: "14px" }}>
            <label style={lbl}>Years of Experience *</label>
            <Select
              options={experienceOptions}
              value={experienceOptions.find((option) => option.value === formData.experience) || null}
              onChange={(selectedOption) => handleSelectChange(selectedOption, "experience")}
              placeholder="Select..."
              classNamePrefix="select"
              styles={selectStyles}
            />
            {errors.experience && <p style={{ color: "#E53E3E", fontSize: "0.75rem", marginTop: "4px" }}>{errors.experience}</p>}
          </div>
        )}
        {formData.role && dynamicFields[formData.role]}
        <div style={{ marginBottom: "24px" }}>
          <label style={lbl}>Message *</label>
          <textarea
            className="inp"
            name="message"
            placeholder="What roles do you need? Anything else we should know?"
            value={formData.message}
            onChange={handleChange}
            style={{ minHeight: "110px", resize: "vertical", borderColor: errors.message ? "#E53E3E" : undefined }}
          />
          {errors.message && <p style={{ color: "#E53E3E", fontSize: "0.75rem", marginTop: "4px" }}>{errors.message}</p>}
        </div>
        <ContactFormHoneypot
          value={formData.companyWebsite}
          onChange={handleChange}
        />
        <button type="submit" className="btn-primary" disabled={loading} style={{ width: "100%", justifyContent: "center", padding: "15px" }}>
          {loading ? "Sending..." : (
            <>
              Submit Enquiry <Arr />
            </>
          )}
        </button>
        {(successMessage || errorMessage) && (
          <p style={{ fontFamily: '"Plus Jakarta Sans", "Segoe UI", system-ui, sans-serif', fontSize: "0.85rem", textAlign: "center", marginTop: "12px", color: successMessage ? "#2E5070" : "#E53E3E" }}>
            {successMessage || errorMessage}
          </p>
        )}
        <p style={{ fontFamily: '"Plus Jakarta Sans", "Segoe UI", system-ui, sans-serif', fontSize: "0.72rem", color: "#718096", textAlign: "center", marginTop: "12px" }}>
          Ger responds personally within one business day.
        </p>
      </form>
    );
  }

  return (
    <section className="">
      <div className="inner-wrapper">
        {Title && (
          <h2 className="section-title text-center mb-6">
            <ReactMarkdown>{Title}</ReactMarkdown>
          </h2>
        )}
        {Description && (
          <p className="section-description text-center mb-6">{Description}</p>
        )}
        <div className="grid md:grid-cols-2 gap-6 text-left rounded-lg p-6 border bg-white">
          <form className="" onSubmit={handleSubmit} noValidate>
            <div className="mb-2 mt-[-10px]">
              <label className="font-semibold leading-10">First Name<span className="text-red-500">*</span></label>
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`w-full p-3 border rounded-md bg-gray-100${errors.name ? ' border-red-500' : ''}`}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            <div className="mb-2">
              <label className="font-semibold leading-10">Email<span className="text-red-500">*</span></label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full p-3 border rounded-md bg-gray-100${errors.email ? ' border-red-500' : ''}`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div className="mb-2">
              <label className="font-semibold leading-10">Company Name (Optional)</label>
              <input
                type="text"
                name="company"
                placeholder="Enter Company Name"
                value={formData.company || ''}
                onChange={handleChange}
                className="w-full p-3 border rounded-md bg-gray-100"
              />
            </div>
            <div className="mb-2">
              <label className="font-semibold leading-10">Roll to fill<span className="text-red-500">*</span></label>
              <Select
                options={roleOptions}
                value={roleOptions.find(option => option.value === formData.role) || null}
                onChange={(selectedOption) => handleSelectChange(selectedOption, 'role')}
                placeholder="Select a type"
                classNamePrefix="select"
                className={`w-full${errors.role ? ' border border-red-500 rounded-md' : ''}`}
                styles={selectStyles}
              />
              {errors.role && <p className="text-red-500 text-sm mt-1">{errors.role}</p>}
            </div>
            {formData.role && formData.role !== "General Enquiry" && (
              <div className="mb-2">
                <label className="font-semibold leading-10">Years of Experience</label>
                <Select
                  options={experienceOptions}
                  value={experienceOptions.find(option => option.value === formData.experience) || null}
                  onChange={(selectedOption) => handleSelectChange(selectedOption, 'experience')}
                  placeholder="Select..."
                  classNamePrefix="select"
                  className={`w-full${errors.experience ? ' border border-red-500 rounded-md' : ''}`}
                  styles={selectStyles}
                />
                {errors.experience && <p className="text-red-500 text-sm mt-1">{errors.experience}</p>}
              </div>
            )}
            {formData.role && dynamicFields[formData.role]}
            <div className="mb-2">
              <label className="font-semibold leading-10">Message<span className="text-red-500">*</span></label>
              <textarea
                name="message"
                placeholder="Type Here"
                value={formData.message}
                onChange={handleChange}
                required
                className={`w-full p-3 border rounded-md bg-gray-100 h-32${errors.message ? ' border-red-500' : ''}`}
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>
            <ContactFormHoneypot
              value={formData.companyWebsite}
              onChange={handleChange}
            />
            <div className="flex items-center gap-3">
              <button
                type="submit"
                className="btn btn-primary mt-1"
                disabled={loading}
              >
                {loading ? "Sending..." : "Submit"}
              </button>
              {(successMessage || errorMessage) && (
                <p className={`text-sm ${successMessage ? "text-blue-700" : "text-red-600"}`}
                  style={{ textAlign: "left" }}>
                  {successMessage || errorMessage}
                </p>
              )}
            </div>
          </form>

          {/* Contact Info Cards */}
          <div className="grid sm:grid-cols-2 gap-4 sm:max-h-[460px]">
            <a 
              href="https://maps.google.com/?q=95+Millennium+Business+Park,+Cappagh+Road,+Ballycoolin,+Dublin+11,+D11+YK25"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-blue-100 rounded-lg flex justify-around flex-col max-h-[230px] hover:bg-blue-200 transition-colors cursor-pointer"
            >
              <div className="rounded-full bg-primary text-5xl h-[73px] w-[73px] flex justify-center items-center text-white">
                <IoIosPin />
              </div>
              <h4 className="font-bold mt-2 text-lg">Our Location</h4>
              <p className="text-gray-600 text-sm">
              95 Millennium Business Park, Cappagh Road, Ballycoolin, Dublin 11, D11 YK25
              </p>
            </a>
            <a 
              href="mailto:info@anamrinarecruitment.com"
              className="p-4 border rounded-lg flex justify-around flex-col max-h-[230px] hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <div className="rounded-full bg-primary text-6xl h-[73px] w-[73px] flex justify-center items-center text-white">
                <IoIosMail />
              </div>
              <h4 className="font-bold mt-2 text-lg">Email Us</h4>
              <p className="text-gray-600 text-sm">info@anamrinarecruitment.com</p>
            </a>
            <div className="p-4 border rounded-lg flex justify-around flex-col max-h-[230px]">
              <div className="rounded-full bg-primary text-4xl h-[73px] w-[73px] flex justify-center items-center text-white">
                <LuAlarmClock />
              </div>
              <h4 className="font-bold mt-2 text-lg">Opening Hours</h4>
              <p className="text-gray-600 text-sm">Mon - Fri 09:00 AM - 05:00 PM</p>              
            </div>
            <a 
              href="tel:+353858239516"
              className="p-4 border rounded-lg flex justify-around flex-col max-h-[230px] hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <div className="rounded-full bg-primary text-4xl  h-[73px] w-[73px] flex justify-center items-center text-white">
                <FaPhone />
              </div>
              <h4 className="font-bold mt-2 text-lg">Call Us Now</h4>
              <p className="text-gray-600 text-sm">+353858239516</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
