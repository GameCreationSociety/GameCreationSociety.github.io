import Image from "next/image";
import Link from "next/link";

const exploreLinks = [
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Leadership", href: "/leadership" },
  { label: "Gallery", href: "/gallery" },
  { label: "Resources", href: "/resources" },
];

const involvementLinks = [
  { label: "Join Us", href: "/join" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faq" },
  { label: "Meeting Info", href: "/meetings" },
  { label: "Calendar", href: "/calendar" },
];

const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com/yourclub",
    icon: "/icons/instagram/logo.png",
  },
  {
    label: "Discord",
    href: "https://discord.com/yourclub",
    icon: "/icons/discord.svg",
  },
  {
    label: "GitHub",
    href: "https://github.com/yourclub",
    icon: "/icons/github.svg",
  },
  {
    label: "Email",
    href: "mailto:club@school.edu",
    icon: "/icons/email.svg",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-8">
        {/* Main footer */}
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Club identity */}
          <div className="max-w-sm">
            <Link
              href="/"
              className="inline-flex items-center gap-3"
            >
              {/* Replace with your actual club logo */}
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
                G
              </div>

              <div>
                <p className="font-semibold leading-none">
                  Game Creation Society
                </p>

                <p className="mt-1 text-xs text-muted-foreground">
                  Carnegie Mellon University
                </p>
              </div>
            </Link>

            <p className="mt-5 text-sm leading-6 text-muted-foreground">
              Bringing students together to create, explore, and
              celebrate games through creativity and collaboration.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h2 className="text-sm font-semibold">
              Explore
            </h2>

            <ul className="mt-4 space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get involved */}
          <div>
            <h2 className="text-sm font-semibold">
              Get Involved
            </h2>

            <ul className="mt-4 space-y-3">
              {involvementLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-6 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Game Creation Society
            {" @ "}
            Carnegie Mellon University
          </p>

          {/* Social links */}
          <div className="flex items-center gap-2">
            {socials.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                title={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-accent"
              >
                <Image
                  src={social.icon}
                  alt=""
                  width={18}
                  height={18}
                  className="h-4 w-4"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
