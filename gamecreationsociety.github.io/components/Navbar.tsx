import Link from "next/link";

export default function Navbar() {
	return (
		<header className="sticky top-0 z-67 h-16 w-full">
			<nav
				aria-label="Main navigation"
				className="mx-auto flex h-full max-w-6xl items-center justify-between px-8 md:px-12"
			>
				<Link href="/" className="text-xl font-bold">
					MySite
				</Link>

				<ul className="flex gap-6">
					<li>
						<Link href="/" className="hover:text-blue-500">
							Home
						</Link>
					</li>
					<li>
						<Link href="/about" className="hover:text-blue-500">
							About
						</Link>
					</li>
					<li>
						<Link href="/events" className="hover:text-blue-500">
							Events
						</Link>
					</li>
					<li>
						<Link href="/contact" className="hover:text-blue-500">
							Contact
						</Link>
					</li>
					<li>
						<Link href="/games" className="hover:text-blue-500">
							Games
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
