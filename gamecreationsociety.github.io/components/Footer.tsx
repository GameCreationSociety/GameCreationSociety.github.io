import Link from "next/link";
import { FaInstagram, FaDiscord, FaGithub, FaEnvelope } from "react-icons/fa";

const exploreLinks = [
  { label: "About", href: "/about" },
  { label: "Games", href: "/games" },
  { label: "Contact", href: "/contact" },
];

const involvementLinks = [
  { label: "Join Us", href: "#" },
  { label: "FAQ", href: "#" },
  { label: "Discord", href: "#" },
];

const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com/gamecreation",
    Icon: FaInstagram,
  },
  {
    label: "Discord",
    href: "https://discord.gg/gamecreation",
    Icon: FaDiscord,
  },
  {
    label: "GitHub",
    href: "https://github.com/GameCreationSociety",
    Icon: FaGithub,
  },
  { label: "Email", href: "mailto:contact@gamecreation.org", Icon: FaEnvelope },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="mx-auto max-w-6xl p-8 md:p-12">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr] md:gap-12">
          {/* Club identity */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center border-2 border-black text-sm font-bold">
                G
              </div>
              <div>
                <p className="font-semibold leading-none">
                  Game Creation Society
                </p>
                <p className="mt-1 text-xs text-neutral-500">
                  Carnegie Mellon University
                </p>
              </div>
            </Link>
            <p className="mt-5 max-w-sm text-sm">
              Bringing students together to create, explore, and celebrate games
              through creativity and collaboration.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h2 className="text-sm font-semibold">Explore</h2>
            <ul className="mt-4 space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get involved */}
          <div>
            <h2 className="text-sm font-semibold">Get Involved</h2>
            <ul className="mt-4 space-y-3">
              {involvementLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-6 border-t-2 border-black pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm">
            &copy; {year} Game Creation Society @ Carnegie Mellon University
          </p>
          <div className="flex items-center gap-2">
            {socials.map(({ label, href, Icon }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                title={label}
                {...(href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="flex h-9 w-9 items-center justify-center border-2 border-black transition-colors hover:bg-black hover:text-white"
              >
                <Icon aria-hidden="true" size={18} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
