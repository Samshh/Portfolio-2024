interface ExperienceStructProps {
  title: string;
  role: string;
  subtitle?: string;
}

export default function ExperienceStruct({
  title,
  role,
  subtitle,
}: ExperienceStructProps) {
  return (
    <div className="py-3 flex flex-col gap-1">
      <h4 className="font-normal">
        {title}
        <span className="text-[#333333]">.</span>
      </h4>
      <em>
        <h6 className="font-normal text-[#737373]">{role}</h6>
      </em>
      <h6 className="font-light">{subtitle}</h6>
      <div className="w-full h-px bg-[#333333]"></div>
    </div>
  );
}
