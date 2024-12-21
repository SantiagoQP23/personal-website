import { Badge } from "@/components/ui/badge";

import { jobs } from "@/consts/experience";

export function JobList() {
  return (
    <section id="experience" className="w-full">
      <div className="flex flex-col gap-5">
        {jobs.map((experience, index) => (
          <>
            <div className="  rounded-md border p-4" key={index}>
              <div className="flex items-center space-x-4">
                {experience.icon}
                <div className="flex-1 flex flex-col space-y-2 ">
                  <span className="text-sm font-medium leading-none">
                    {experience.title}
                  </span>
                  <span className="text-xs ">{experience.location}</span>
                </div>
                <p className="text-sm">{experience.date}</p>
              </div>
              <div className="h-2" />
              {experience.description && (
                <>
                  <p className="text-sm text-wrap whitespace-pre-line">
                    {experience.description}
                  </p>
                  <div className="h-5" />
                </>
              )}
              <ul className="flex flex-wrap  gap-2 text-lg text-gray-800">
                {experience.tags.map((skill, index) => (
                  <Badge variant="secondary" key={index}>
                    {skill}
                  </Badge>
                ))}
              </ul>
            </div>
          </>
        ))}
      </div>
    </section>
  );
}
