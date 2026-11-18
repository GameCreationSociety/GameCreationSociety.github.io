import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { IconType } from "react-icons";
import {
  FaArtstation, FaGithub, FaInstagram, FaItchIo, FaLinkedin, FaMastodon,
  FaSoundcloud, FaTwitch, FaTwitter, FaYoutube,
} from "react-icons/fa";
import { FiFileText, FiGlobe, FiLink, FiMail, FiPhone } from "react-icons/fi";
import MemberPhoto from "@/components/contact/MemberPhoto";
import { games } from "@/data/games";
import { members, resumeBaseUrl, type Member } from "@/data/members";

type MemberPageProps = {
  params: Promise<{ slug: string }>;
};

const linkIcons: Record<string, IconType> = {
  ArtStation: FaArtstation,
  GitHub: FaGithub,
  Instagram: FaInstagram,
  "Itch.io": FaItchIo,
  LinkedIn: FaLinkedin,
  Mastodon: FaMastodon,
  SoundCloud: FaSoundcloud,
  Twitch: FaTwitch,
  Twitter: FaTwitter,
  YouTube: FaYoutube,
};

const link = "underline underline-offset-4 hover:decoration-2";

function getLinks(member: Member) {
  const { website, email, phone, resume, links = [] } = member;
  return [
    ...(website ? [{ label: "Website", href: website, Icon: FiGlobe }] : []),
    ...(email ? [{ label: "Email", href: `mailto:${email}`, Icon: FiMail }] : []),
    ...(phone ? [{ label: "Phone", href: `tel:${phone}`, Icon: FiPhone }] : []),
    ...(resume ? [{ label: "Resume", href: `${resumeBaseUrl}${encodeURIComponent(resume)}`, Icon: FiFileText }] : []),
    ...links.map(({ label, url }) => ({ label, href: url, Icon: linkIcons[label] ?? FiLink })),
  ];
}

export function generateStaticParams() {
  return members.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: MemberPageProps): Promise<Metadata> {
  const { slug } = await params;
  const member = members.find((member) => member.slug === slug);
  if (!member) notFound();

  return {
    title: `${member.name} | Game Creation Society`,
    description: member.bio[0],
  };
}

export default async function MemberPage({ params }: MemberPageProps) {
  const { slug } = await params;
  const member = members.find((member) => member.slug === slug);
  if (!member) notFound();

  const links = getLinks(member);
  const memberGames = games.flatMap((game) => {
    const credit = game.teamMembers.find(({ name }) => name === member.name);
    return credit ? [{ game, role: credit.role }] : [];
  });

  return (
    <main className="mx-auto w-full max-w-4xl flex-1 space-y-10 px-6 py-10 md:px-12">
      <Link href="/contact#members" className={`inline-block py-2 text-sm ${link}`}>← All members</Link>

      <header className="flex flex-col gap-6 sm:flex-row sm:items-center">
        <MemberPhoto member={member} className="size-40" />
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">{member.name}</h1>
          <p className="text-neutral-600">Class of {member.classOf}</p>
          {member.currentPosition && <p className="font-semibold">{member.currentPosition}</p>}
        </div>
      </header>

      <section aria-labelledby="about-title" className="space-y-3">
        <h2 id="about-title" className="text-2xl font-bold">About</h2>
        {member.bio.map((paragraph) => (
          <p key={paragraph} className="max-w-prose leading-relaxed">{paragraph}</p>
        ))}
      </section>

      {member.pastPositions && (
        <section aria-labelledby="positions-title" className="space-y-3">
          <h2 id="positions-title" className="text-2xl font-bold">Past GCS positions</h2>
          <ul className="space-y-1">
            {member.pastPositions.map(({ role, period }) => (
              <li key={role}>{role} <span className="text-neutral-600">· {period}</span></li>
            ))}
          </ul>
        </section>
      )}

      {links.length > 0 && (
        <section aria-labelledby="links-title" className="space-y-3">
          <h2 id="links-title" className="text-2xl font-bold">Find me here</h2>
          <ul className="flex flex-wrap gap-x-6 gap-y-1">
            {links.map(({ label, href, Icon }) => (
              <li key={`${label}-${href}`}>
                <a href={href} className={`inline-flex min-h-11 items-center gap-2 ${link}`}>
                  <Icon aria-hidden="true" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section aria-labelledby="games-title" className="space-y-3">
        <h2 id="games-title" className="text-2xl font-bold">GCS games</h2>
        {memberGames.length > 0 ? (
          <ul className="space-y-2">
            {memberGames.map(({ game, role }) => (
              <li key={game.id}>
                <Link href={`/games/${game.id}`} className={`font-semibold ${link}`}>{game.title}</Link>
                <span className="text-neutral-600"> · {game.semester} {game.year}{role && ` · ${role}`}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-neutral-600">No games listed yet.</p>
        )}
      </section>

      {member.updated && <p className="text-sm text-neutral-600">Updated {member.updated}</p>}
    </main>
  );
}
