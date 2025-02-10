import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Earth } from "lucide-react";

import { useNavigate, useLocation } from "react-router-dom";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarImage } from "@radix-ui/react-avatar";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

function LanguageToggle() {
  const { i18n, t } = useTranslation("global");
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedLang, setSelectedLang] = useState(i18n.language || "en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("userLanguage");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
      setSelectedLang(savedLanguage);
    }
  }, [i18n]);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang).then(() => {
      localStorage.setItem("userLanguage", lang);
      setSelectedLang(lang);
      const path = location.pathname.replace(/^\/[a-z]{2}/, `/${lang}`);
      navigate(path, { replace: true });
    });
  };

  const languages = [
    { code: "en", label: t("page.english"), flag: "us" },
    { code: "es", label: t("page.spanish"), flag: "gt" },
    { code: "fr", label: t("page.french"), flag: "fr" },
    { code: "hi", label: t("page.hindi"), flag: "in" },
    { code: "ch", label: t("page.chinese"), flag: "cn" },
  ];

  return (
    <Select>
      <SelectTrigger className="w-auto">
        <Earth className="h-6 w-6" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {languages.map((lang) => (
            <SelectItem
              key={lang.code}
              value={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className="flex items-center" // Aseguramos que cada item se disponga en fila
            >
              <Avatar className="w-8 h-8 flex items-center justify-center rounded-full border shadow-lg mr-4">
                <AvatarImage
                  src={`https://flagcdn.com/${lang.flag}.svg`}
                  alt={`Flag of ${lang.label}`}
                  className="w-full h-full object-cover "
                />
              </Avatar>
              <span className="text-left">{lang.label}</span>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default LanguageToggle;
