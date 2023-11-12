import { Inter, Noto_Sans_JP } from "next/font/google";

export const notoSansJp = Noto_Sans_JP({ weight: "300", subsets: ["latin"], display: "swap" });
export const inter = Inter({
	subsets: ["latin"],
	display: "swap",
});

const Fonts = {
	notoSansJp,
	inter,
};

export default Fonts;
