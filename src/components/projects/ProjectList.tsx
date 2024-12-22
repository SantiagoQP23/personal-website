import { getCollection } from "astro:content";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const projects = (await getCollection("project")).sort((a, b) => {
  return (
    new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime()
  );
});

export function ProjectList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {projects.map((project, index) => (
        <a href={`/projects/${project.id}/`}>
          <Card className="col-span-1 w-full overflow-hidden">
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
              <CardTitle className="">{project.data.title}</CardTitle>
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
