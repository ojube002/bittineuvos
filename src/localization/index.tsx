import LocalizedStrings, {
    LocalizedStringsMethods
} from 'localized-strings';

export interface IStrings extends LocalizedStringsMethods {
    title: string;
    localization: string;
    changeThemeTo: string;
    lightTheme: string;
    darkTheme: string;
    themeToolTipLight: string;
    themeToolTipDark: string;
    localizationToolTip: string;
    aboutTitle: string;
    skillsTitle: string;
    memeGeneratorTitle: string;
    gameTitle: string;
    feedbackTitle: string;
    aboutToolTip: string;
    skillsToolTip: string;
    memeGeneratorToolTip: string;
    gameToolTip: string;
    feedbackToolTip: string;
}

const strings: IStrings = new LocalizedStrings({
    fi: {
        title: "Ojube - sivusto",
        localization: "Suomeksi",
        changeThemeTo: "Vaihda teema",
        lightTheme: "vaaleaksi",
        darkTheme: "tummaksi",
        themeToolTipLight: "Vaihda sivuston teema vaaleaksi !",
        themeToolTipDark: "Vaihda sivuston teema tummaksi !",
        localizationToolTip: "Vaihda sivuston kieli englanniksi",
        aboutTitle: "Kyse",
        skillsTitle: "Mitä osaan",
        memeGeneratorTitle: "Meme generaattori",
        gameTitle: "THE PELI",
        feedbackTitle: "Lähetä palautetta sivustosta",
        aboutToolTip: "Kerron lyhyesti, että miksi ja miten sivusto on tehty!",
        skillsToolTip: "Työnalla!",
        memeGeneratorToolTip: "Seikkaile meme generaattorissa!",
        gameToolTip: "Pelaa THE PELIÄ, tehty vain sivustoa varten!!",
        feedbackToolTip: "Lähetä palautetta ja ideoita, mitä sivustolle voi tehdä!",
    },
    en: {
        title: "Ojube - site",
        localization: "In english",
        changeThemeTo: "Change theme to",
        lightTheme: "light",
        darkTheme: "dark",
        themeToolTipLight: "Change sites theme to light !",
        themeToolTipDark: "Change sites theme to dark !",
        localizationToolTip: "Change sites language to finnish",
        aboutTitle: "About",
        skillsTitle: "My skillset",
        memeGeneratorTitle: "Meme generator",
        gameTitle: "THE GAME",
        feedbackTitle: "Send feedback about site",
        aboutToolTip: "I tell why and how the site was made!",
        skillsToolTip: "In progress!",
        memeGeneratorToolTip: "Adventure in the meme generator!",
        gameToolTip: "Play THE GAME, made for the site!!",
        feedbackToolTip: "Send feedback and ideas for the site!",
    }
});

export default strings;
