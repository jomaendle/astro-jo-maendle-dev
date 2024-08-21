export function sendContactForm(formData: {
  name: string;
  email: string;
  message: string;
}) {
  return fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encodeFormData({ "form-name": "contact", ...formData }),
  })
    .then(() => {
      console.log("Contact form sent");
    })
    .catch(() => {
      console.error("Error sending contact form");
    });
}

const encodeFormData = (data: {}) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};
