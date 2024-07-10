import { ru } from "../locales/ru.locale";


type localeType = typeof ru;

export function setLocale(locale: string | undefined): localeType {
    switch (locale) {
        case 'ru':
            return ru;
        default:
            return ru;
    }
}

export function getLanguages(router: any): localeType[] {
    const languages = [ru];
    const langIndex = languages.indexOf(setLocale(router.locale));

    if (langIndex !== -1) {
        languages.splice(langIndex, 1);
    }

    return languages;
}
