const TIMESTAMP = "contactFormTimestamp";

const encodeFormData = (data: {}) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export function sendContactForm(formData: {
  name: string;
  email: string;
  message: string;
}) {
  //   const timestamp = localStorage.getItem(TIMESTAMP);

  //   if (timestamp) {
  //     const diff = Date.now() - parseInt(timestamp, 10);
  //     if (diff < threeMinutesInMilliseconds) {
  //       console.error("You can only submit the form once every 5 minutes.");
  //       return;
  //     }
  //   }

  //   localStorage.setItem(TIMESTAMP, Date.now().toString());
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
