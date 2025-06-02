import Badge from "./Badge";

type BadgesProps = {
  badges: string[]
}

export default function Badges({badges}: BadgesProps) {
  return (
    <ul className="flex flex-row gap-2 mb-4">
      {badges.map((badge, index) => (
        <li key={index}>
          <Badge label={badge}/>
        </li>
      ))}
    </ul>
  );
}
