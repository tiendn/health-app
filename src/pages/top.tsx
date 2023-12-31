import Layout from "@/components/global/Layout";
import TopPageView from "@/views/top";
import Head from "next/head";
import React from "react";

const TopPage: React.FC = () => {
	return (
		<Layout>
			<Head>
				<title>Health App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<TopPageView />
		</Layout>
	);
};

export default TopPage;
