import { useLocale } from "../lib/useLocale";

export default function LanguageSwitch() {
  const { locale, setLocale } = useLocale();

  const toggle = () => setLocale(locale === "en" ? "fr" : "en");

  return (
    <button
      type="button"
      onClick={toggle}
      className="hover:cursor-pointer hover:bg-blue-500 hover:text-white transition-all"
    >
      {locale === "en" ? "FR" : "EN"}
    </button>
  );
}