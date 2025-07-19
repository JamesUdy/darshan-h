import Beach from "@/app/assets/hero/beach.png";
import Brain from "@/app/assets/hero/brain.png";
import Dev from "@/app/assets/hero/dev.png";
import Dollar from "@/app/assets/hero/dollar.png";
import Drum from "@/app/assets/hero/drum.png";
import Eyes from "@/app/assets/hero/eyes.png";
import Guitar from "@/app/assets/hero/guitar.png";
import Hammer from "@/app/assets/hero/hammer.png";
import Indianflag from "@/app/assets/hero/indianflag.png";
import Laptop from "@/app/assets/hero/laptop.png";
import Luggage from "@/app/assets/hero/luggage.png";
import Mailbox from "@/app/assets/hero/mailbox.png";
import Paint from "@/app/assets/hero/paint.png";
import Pencil from "@/app/assets/hero/pencil.png";
import Robohand from "@/app/assets/hero/robohand.png";
import Rocket from "@/app/assets/hero/rocket.png";
import Swag from "@/app/assets/hero/swag.png";
import Thunder from "@/app/assets/hero/thunder.png";
import Wavinghand from "@/app/assets/hero/wavinghand.png";

const HeroIcons = {
    Beach,
    Brain,
    Dev,
    Dollar,
    Drum,
    Eyes,
    Guitar,
    Hammer,
    Indianflag,
    Laptop,
    Luggage,
    Mailbox,
    Paint,
    Pencil,
    Robohand,
    Rocket,
    Swag,
    Thunder,
    Wavinghand,
} as const;

export const HeroContent: BaseHeroType = {
    work: {
        header: "i work with very cool people",
        icons: [HeroIcons.Rocket, HeroIcons.Dollar, HeroIcons.Thunder],
        backdropText: "ポートフォリオ",
        content: "Over $ one billion $ dollars $ raised",
    },
    about: {
        header: "hey hey",
        icons: [HeroIcons.Paint, HeroIcons.Indianflag, HeroIcons.Dev],
        backdropText: "について",
        content: "I'm a $ digital designer $ and $ developer",
    },
    travel: {
        header: "both on foot or on my motorbike",
        icons: [HeroIcons.Luggage, HeroIcons.Eyes, HeroIcons.Beach],
        backdropText: "探検する",
        content: "I love $ traveling and explore $ new $ places",
    },
    music: {
        header: "yeah, metal for the win!",
        icons: [HeroIcons.Guitar, HeroIcons.Drum, HeroIcons.Swag],
        backdropText: "メタルミュージック",
        content: "I like $ heavy stuff and I play $ the $ drums",
    },
    tools: {
        header: "the nerd's corner",
        icons: [HeroIcons.Hammer, HeroIcons.Mailbox, HeroIcons.Brain],
        backdropText: "技術スタック",
        content: "Some tools $ that I $ use daily $ to create",
    },
    default: {
        header: "founding team member and lead designer in Terra, bangalore",
        icons: [HeroIcons.Pencil, HeroIcons.Laptop, HeroIcons.Robohand],
        backdropText: "デザイン",
        content: "I craft $ digital experiences $ for $ humans",
    },
};
