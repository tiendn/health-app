import Fonts from "@/theme/fonts";
import "@/styles/globals.scss";
import { Colors } from "@/theme/colors";

import type { AppProps } from "next/app";
export default function App({ Component, pageProps }: AppProps) {
	return (
		<main>
			<style jsx global>{`
				html {
					font-family: ${Fonts.notoSansJp.style.fontFamily};
					color: ${Colors.light};
				}
			`}</style>
			<Component {...pageProps} />
		</main>
	);
}
