export function buildContactSubmitPayload(formData, formLoadedAt) {
  return {
    ...formData,
    _formLoadedAt: formLoadedAt,
    companyWebsite: formData.companyWebsite ?? "",
  };
}
