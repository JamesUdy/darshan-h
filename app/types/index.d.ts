type HeroContentVariantType = 'work' | 'about' | 'travel' | 'music' | 'tools' | 'default';

type HeroContentType = {
    header: string;
    icons: string[];
    backdropText: string;
    content: string;
};

type BaseHeroType = Record<
HeroContentVariantType,
HeroContentType
>;