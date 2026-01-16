import { Star } from "lucide-react";

export default function GradientStarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" className="mr-2 animate-pulse">
      <defs>
        <linearGradient id="gold-fire" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD700" />   {/* Gold */}
          <stop offset="50%" stopColor="#FFA500" />  {/* Orange */}
          <stop offset="100%" stopColor="#FF4500" /> {/* Fire red */}
        </linearGradient>
      </defs>
      <Star stroke="none" fill="url(#gold-fire)" width={20} height={20} />
    </svg>
  );
}