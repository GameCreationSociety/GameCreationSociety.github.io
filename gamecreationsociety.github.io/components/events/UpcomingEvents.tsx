import { aboutLinks } from "@/components/about/content";
import { getUpcomingEvents } from "@/lib/calendar";
import { UpcomingList } from "./UpcomingList";

export default async function UpcomingEvents() {
  const result = await getUpcomingEvents(aboutLinks.calendar);
  return <UpcomingList result={result} />;
}
