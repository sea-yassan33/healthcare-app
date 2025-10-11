import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {DocumentListProps} from "@/lib/interfaceUtils"
import React from 'react';
import {Heart, Salad, Dumbbell } from "lucide-react";

export default function TopickList({ documents, num}: DocumentListProps) {
  return(
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {documents.slice(0,num).map((item, index) => (
        <Card key={index} className="overflow-hidden transition-all hover:shadow-lg">
          <CardHeader className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-sm font-medium text-gray-800">
                {item.category}
              </span>
              <span className="text-sm text-gray-500">{item.updatedAt}</span>
            </div>
            <div className="flex h-12 items-center gap-2">
              {item.category === "運動" && <Dumbbell className="h-6 w-6 text-gray-900" />}
              {item.category === "栄養" && <Salad className="h-6 w-6 text-gray-900" />}
              {item.category === "健康" && <Heart className="h-6 w-6 text-gray-900" />}
              <CardTitle className="line-clamp-2 text-lg">{item.title}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className="line-clamp-2">
              {item.description}
            </CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}