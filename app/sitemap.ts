import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ozdurmushidrolik.com.tr",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },

    {
      url: "https://ozdurmushidrolik.com.tr/gaziantep-hidrolik-servis",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: "https://ozdurmushidrolik.com.tr/kahramanmaras-hidrolik-servis",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: "https://ozdurmushidrolik.com.tr/malatya-hidrolik-servis",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: "https://ozdurmushidrolik.com.tr/sanliurfa-hidrolik-servis",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: "https://ozdurmushidrolik.com.tr/adiyaman-hidrolik-servis",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];
}