import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import intervalData from "./interval-list.json";

const components = intervalData;

export default function IntervalList() {
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {components.map((item, index) => (
          <Link href={item.url} key={index} className="no-underline">
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-base font-semibold">
                    {item.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">{item.level}</p>
                </div>
                <Badge variant="secondary">{item.time}</Badge>
              </CardHeader>
              <CardContent className="flex justify-center items-center p-4">
                <div className="relative w-full h-40 bg-muted rounded-lg overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
}