"use client";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import CreatableSelect from "react-select/creatable";
const Select = CreatableSelect;
import { FaPhone } from "react-icons/fa6";
import { IoIosMail, IoIosPin } from "react-icons/io";
import { LuAlarmClock } from "react-icons/lu";

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

export default function DynamicContactForm({ Title, Description }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    experience: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errors, setErrors] = useState({});

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
      return;
    }

    setLoading(true);
    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    setLoading(false);
    if (res.ok) {
      setSuccessMessage("Message sent successfully!");
      setFormData({ name: "", email: "", role: "", experience: "", message: "" });
      setErrors({});
    } else {
      setSuccessMessage("Failed to send message. Try again later.");
    }
  };

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
                styles={customSelectStyles}
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
                  styles={customSelectStyles}
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
            <button
              type="submit"
              className="btn btn-primary mt-1"
              disabled={loading}
            >
              {loading ? "Sending..." : "Submit"}
            </button>
            {successMessage && (
              <p className="text-center text-primary mt-2">{successMessage}</p>
            )}
          </form>

          {/* Contact Info Cards */}
          <div className="grid sm:grid-cols-2 gap-4 sm:max-h-[460px]">
            <div className="p-4 bg-blue-100 rounded-lg flex justify-around flex-col max-h-[230px]">
              <div className="rounded-full bg-primary text-5xl h-[73px] w-[73px] flex justify-center items-center text-white">
                <IoIosPin />
              </div>
              <h4 className="font-bold mt-2 text-lg">Our Location</h4>
              <p className="text-gray-600 text-sm">
              95 Millennium Business Park, Cappagh Road, Ballycoolin, Dublin 11, D11 YK25
              </p>
            </div>
            <div className="p-4 border rounded-lg flex justify-around flex-col max-h-[230px]">
              <div className="rounded-full bg-primary text-6xl h-[73px] w-[73px] flex justify-center items-center text-white">
                <IoIosMail />
              </div>
              <h4 className="font-bold mt-2 text-lg">Email Us</h4>
              <p className="text-gray-600 text-sm">info@anamrinarecruitment.com</p>
            </div>
            <div className="p-4 border rounded-lg flex justify-around flex-col max-h-[230px]">
              <div className="rounded-full bg-primary text-4xl h-[73px] w-[73px] flex justify-center items-center text-white">
                <LuAlarmClock />
              </div>
              <h4 className="font-bold mt-2 text-lg">Opening Hours</h4>
              <p className="text-gray-600 text-sm">Mon - Fri 09:00 AM - 05:00 PM</p>              
            </div>
            <div className="p-4 border rounded-lg flex justify-around flex-col max-h-[230px]">
              <div className="rounded-full bg-primary text-4xl  h-[73px] w-[73px] flex justify-center items-center text-white">
                <FaPhone />
              </div>
              <h4 className="font-bold mt-2 text-lg">Call Us Now</h4>
              <p className="text-gray-600 text-sm">+353858239516</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
