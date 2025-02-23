const Section = ({
  title,
  description,
  date,
  content,
}: {
  title: React.ReactNode;
  description: React.ReactNode;
  date: React.ReactNode;
  content: React.ReactNode;
}) => {
  return (
    <div className="flex h-96 w-full flex-col">
      <div className="flex flex-col items-center space-y-2 px-8 sm:items-start sm:px-[7%]">
        <h2 className="text-left text-2xl">{title}</h2>
        <p className="text-sm leading-relaxed text-zinc-300 sm:w-2/3">
          {description}
        </p>
        <p className="text-sm font-extralight leading-relaxed text-zinc-400">
          {date}
        </p>
      </div>
      <div className="group flex w-full items-center justify-center">
        {content}
      </div>
    </div>
  );
};

export default Section;
