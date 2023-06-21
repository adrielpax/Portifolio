import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/router";

export function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");

  const { locale, locales, route } = useRouter();
  const otherLocale = locales?.filter((l) => l !== locale);
  return (
    <>
      {otherLocale && (
        <Link locale={`${otherLocale}`} href={route}>
          {t("switchLocale", { locale: `${otherLocale}` })}
        </Link>
      )}
    </>
  );
}
