import Image from "next/image";
import type { Member } from "@/data/members";

type MemberPhotoProps = {
  member: Member;
  className?: string;
};

export default function MemberPhoto({ member, className = "size-32" }: MemberPhotoProps) {
  if (!member.photo) {
    return <div aria-hidden="true" className={`shrink-0 rounded-full bg-neutral-300 ${className}`} />;
  }

  return (
    <Image
      src={member.photo}
      alt={`Photo of ${member.name}`}
      width={256}
      height={256}
      className={`shrink-0 rounded-full object-cover ${className}`}
    />
  );
}
