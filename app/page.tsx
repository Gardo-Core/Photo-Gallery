import InfiniteGallery from '@/components/InfiniteGallery';

export default function Home() {
	const sampleImages = [
		{ src: '/1.webp', alt: 'Image 1' },
		{ src: '/2.webp', alt: 'Image 2' },
		{ src: '/3.webp', alt: 'Image 3' },
		{ src: '/4.webp', alt: 'Image 4' },
		{ src: '/5.webp', alt: 'Image 5' },
		{ src: '/6.webp', alt: 'Image 6' },
		{ src: '/7.webp', alt: 'Image 7' },
		{ src: '/8.webp', alt: 'Image 8' },
		{ src: '/9.webp', alt: 'Image 9' },
		{ src: '/10.webp', alt: 'Image 10' },
		{ src: '/11.webp', alt: 'Image 11' },
		{ src: '/12.webp', alt: 'Image 12' },
		{ src: '/13.webp', alt: 'Image 13' },
		{ src: '/14.webp', alt: 'Image 14' },
		{ src: '/15.webp', alt: 'Image 15' },
		{ src: '/16.webp', alt: 'Image 16' },
		{ src: '/17.webp', alt: 'Image 17' },
		{ src: '/18.webp', alt: 'Image 18' },
		{ src: '/19.webp', alt: 'Image 19' },
	];

	return (
		<main className="min-h-screen ">
			<InfiniteGallery
				images={sampleImages}
				speed={1.5}
				zSpacing={3}
				visibleCount={12}
				falloff={{ near: 0.8, far: 14 }}
				className="h-screen w-full rounded-lg overflow-hidden"
			/>
			<div className="h-screen inset-0 pointer-events-none fixed flex items-start justify-center text-center px-3 mix-blend-exclusion text-white pt-10">
				<h1 className="font-serif text-4xl md:text-7xl tracking-tight">
					<span className="italic">Gardo; </span> Photo Gallery
				</h1>
			</div>

			<div className="text-center fixed bottom-10 left-0 right-0 font-mono uppercase text-[11px] font-semibold">
				<p>Use mouse wheel, arrow keys, or touch to navigate</p>
				<p className=" opacity-60">
					Auto-play resumes after 3 seconds of inactivity
				</p>
			</div>
		</main>
	);
}
