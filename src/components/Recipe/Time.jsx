export default function Time({ cookTime, prepTime }) {
  return (
    <div className="flex gap-4">
      <span className="font-medium text-body-gray">Prep Time:</span>
      <span className="text-accent-mintGreen">{prepTime}</span>
      <span className="font-medium text-body-gray">Cook Time:</span>
      <span className="text-accent-mintGreen">{cookTime}</span>
    </div>
  );
}
