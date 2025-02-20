const Section = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex h-96 flex-col items-center justify-center gap-4">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
};

export default Section;
