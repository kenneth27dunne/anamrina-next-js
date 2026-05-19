export default function ContactFormHoneypot({ value, onChange }) {
  return (
    <div className="contact-hp-field" aria-hidden="true">
      <label htmlFor="contact-hp-website">Company website</label>
      <input
        type="text"
        id="contact-hp-website"
        name="companyWebsite"
        value={value}
        onChange={onChange}
        tabIndex={-1}
        autoComplete="off"
      />
    </div>
  );
}
