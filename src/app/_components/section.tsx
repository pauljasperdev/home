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
    <div className="flex min-h-[70vh] w-full flex-col gap-4 pb-[350px]">
      <div className="flex flex-col items-center space-y-2 px-8 sm:items-start sm:px-0">
        <h2 className="py-4 text-left text-7xl text-zinc-300">{title}</h2>
        <p className="text-md leading-relaxed text-zinc-400 sm:w-[90%]">
          {description}
        </p>
        <p className="text-md font-extralight leading-relaxed text-zinc-400">
          {date}
        </p>
      </div>
      <div className="group flex w-full items-center justify-center sm:items-start sm:justify-normal">
        {content}
      </div>
    </div>
  );
};

export default Section;
