import { useEffect, useState } from "react";
import { createSiteData, defaultSiteContent } from "../constants/data";

const STORAGE_KEY = "portfolio_site_content_v1";
const SITE_CONTENT_EVENT = "portfolio-site-content-updated";

const clone = (value) => JSON.parse(JSON.stringify(value));

const isObject = (value) =>
  value !== null && typeof value === "object" && !Array.isArray(value);

const mergeWithDefaults = (defaults, override) => {
  if (Array.isArray(defaults)) {
    return Array.isArray(override) ? override : defaults;
  }

  if (isObject(defaults)) {
    const result = { ...defaults };
    Object.keys(defaults).forEach((key) => {
      result[key] = mergeWithDefaults(defaults[key], override?.[key]);
    });

    if (isObject(override)) {
      Object.keys(override).forEach((key) => {
        if (!(key in result)) {
          result[key] = override[key];
        }
      });
    }

    return result;
  }

  return override ?? defaults;
};

export const getSiteContent = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return clone(defaultSiteContent);
    }

    const parsed = JSON.parse(raw);
    return mergeWithDefaults(clone(defaultSiteContent), parsed);
  } catch (error) {
    return clone(defaultSiteContent);
  }
};

const notifySiteContentChange = () => {
  window.dispatchEvent(new Event(SITE_CONTENT_EVENT));
};

export const saveSiteContent = (content) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
  notifySiteContentChange();
  return content;
};

export const resetSiteContent = () => {
  localStorage.removeItem(STORAGE_KEY);
  notifySiteContentChange();
  return clone(defaultSiteContent);
};

export const useSiteData = () => {
  const [content, setContent] = useState(() => getSiteContent());

  useEffect(() => {
    const sync = () => {
      setContent(getSiteContent());
    };

    window.addEventListener("storage", sync);
    window.addEventListener(SITE_CONTENT_EVENT, sync);

    return () => {
      window.removeEventListener("storage", sync);
      window.removeEventListener(SITE_CONTENT_EVENT, sync);
    };
  }, []);

  return createSiteData(content);
};

export const getDefaultSiteContent = () => clone(defaultSiteContent);
