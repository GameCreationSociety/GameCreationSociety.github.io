import type { Metadata } from "next";
import Link from "next/link";
import { FaDiscord, FaEnvelope, FaFacebook, FaInstagram } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";
import { aboutLinks } from "@/components/about/content";
import MemberPhoto from "@/components/contact/MemberPhoto";
import { members, officerRoles } from "@/data/members";

export const metadata: Metadata = {
  title: "Contact | Game Creation Society",
  description:
    "Contact the Game Creation Society or any of its officers, and meet our members.",
};

const platforms = [
  { label: "Discord", href: aboutLinks.discord, Icon: FaDiscord },
  { label: "Instagram", href: aboutLinks.instagram, Icon: FaInstagram },
  { label: "Facebook", href: aboutLinks.facebook, Icon: FaFacebook },
  { label: "Email list", href: aboutLinks.mailingList, Icon: FaEnvelope },
  { label: "Calendar", href: aboutLinks.calendar, Icon: FiCalendar },
];

const officers = officerRoles.flatMap(({ role, email }) => {
  const member = members.find((member) => member.currentPosition === role);
  return member ? [{ role, email, member }] : [];
});

const classes = Object.entries(
  Object.groupBy(members, (member) => member.classOf),
).sort(([a], [b]) => Number(b) - Number(a));

const link = "underline underline-offset-4 hover:decoration-2";

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 space-y-12 px-6 py-10 md:px-12">
      <header className="space-y-4">
        <h1 className="text-4xl font-bold">Contact</h1>
        <p className="max-w-prose">
          If you’re interested in joining GCS, we’d love to connect with you
          through any of the platforms below.
        </p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {platforms.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                className={`inline-flex min-h-11 items-center gap-2 font-semibold ${link}`}
              >
                <Icon aria-hidden="true" />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </header>

      <section
        aria-labelledby="officers-title"
        className="space-y-6 border-t pt-8"
      >
        <div className="space-y-3">
          <h2 id="officers-title" className="text-2xl font-bold">
            Officers
          </h2>
          <p className="max-w-prose">
            For general questions or professional inquiries, such as the resume
            book, recruiting events, and industry or alumni talks, email{" "}
            <a href={aboutLinks.email} className={link}>
              contact@gamecreation.org
            </a>
            .
          </p>
        </div>
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {officers.map(({ role, email, member }) => (
            <li key={role} className="flex items-center gap-4">
              <MemberPhoto member={member} className="size-24" />
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-600">
                  {role}
                </h3>
                <p className="text-lg font-semibold">
                  <Link href={`/members/${member.slug}`} className={link}>
                    {member.name}
                  </Link>
                </p>
                <a href={`mailto:${email}`} className={`text-sm ${link}`}>
                  {email}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section
        id="members"
        aria-labelledby="members-title"
        className="scroll-mt-20 space-y-6 border-t pt-8"
      >
        <div className="space-y-3">
          <h2 id="members-title" className="text-2xl font-bold">
            Members
          </h2>
          <p className="max-w-prose">
            We&apos;re still filling in this list. If you&apos;re a current member or
            alumnus, <a href="https://forms.gle/AMATDTef8RmP72j16" className={link}>
              fill out this form
            </a> and we&apos;ll add your page.
          </p>
        </div>
        <div className="space-y-6">
          {classes.map(([year, classMembers]) => (
            <section
              key={year}
              aria-labelledby={`class-${year}`}
              className="grid gap-3 md:grid-cols-[9rem_1fr]"
            >
              <h3 id={`class-${year}`} className="font-semibold">
                Class of {year}
              </h3>
              <ul className="grid grid-cols-[repeat(auto-fill,minmax(11rem,1fr))] gap-x-4 gap-y-1">
                {classMembers?.map(({ slug, name }) => (
                  <li key={slug}>
                    <Link
                      href={`/members/${slug}`}
                      className={`inline-block py-1 ${link}`}
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
