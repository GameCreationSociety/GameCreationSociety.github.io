import Link from "next/link";

export default function Navbar() {
	return (
		<header className="sticky top-0 z-67 shrink-0 w-full">
			<nav aria-label="Main navigation" className="flex items-center justify-between px-6 py-4">
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
