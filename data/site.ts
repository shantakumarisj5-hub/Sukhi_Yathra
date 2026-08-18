export const siteConfig = {
  name: "Sukhi Yatra Holidays",
  shortName: "Sukhi Yatra",
  tagline: "We Plan, You Enjoy.",
  description:
    "Sukhi Yatra Holidays offers domestic, international, spiritual and customised travel packages for families, couples and groups.",
  phone: "8660666565",
  phoneLink: "tel:+918660666565",
  email: "sukhiyatra.holidays@gmail.com",
  emailLink: "mailto:sukhiyatra.holidays@gmail.com",
  whatsappNumber: "918660666565",
  whatsappMessage:
    "Hello Sukhi Yatra Holidays, I would like to know more about your travel packages.",
};

export const whatsappLink = (message?: string) => {
  const text = encodeURIComponent(message ?? siteConfig.whatsappMessage);

  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
};