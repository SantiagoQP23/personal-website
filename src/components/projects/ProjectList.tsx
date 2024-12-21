import { getCollection } from "astro:content";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const projects = await getCollection("project");

export function ProjectList() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {projects.map((project, index) => (
        <a href={`/projects/${project.id}/`} >
          <Card className="col-span-2 md:col-span-1 overflow-hidden">
            <div className="relative w-full h-[200px]">
              <img
                src={project.data.heroImage}
                alt="Card image"
                className="object-fill w-full h-full"
                
                // layout="fill"
                // objectFit="cover"
              />
            </div>
            <CardHeader>
              <CardTitle>{project.data.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm ">{project.data.summary}</p>
            </CardContent>
          </Card>
        </a>
      ))}
    </div>
  );
}
