import Image from 'next/image';

export const metadata = {
	title: 'NextJS 13 tutorial 2',
	description:
		'nextjs 13 tutorial 2 - creating and posting prompts using next-auth and mongoose',
};

export default function Home() {
	return (
		<main className='feed text-blue-900 font-bold'>
			<h1>
				Creating and posting prompts of Next.js using Next-Auth and Mongoose
			</h1>
			<p>NextJS 13 Tutorial 2 : creating and posting prompts</p>
		</main>
	);
}
