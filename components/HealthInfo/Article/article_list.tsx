import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, FileText, Briefcase, DollarSign, Layout, Settings } from "lucide-react";

const features = [
  {
    icon: <Shield className="h-6 w-6 text-blue-500" />,
    title: "Marketing",
    description:
      "Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan.",
  },
  {
    icon: <FileText className="h-6 w-6 text-blue-500" />,
    title: "Legal",
    description:
      "Protect your organization, devices and stay compliant with our structured workflows and custom permissions made for you.",
  },
  {
    icon: <Briefcase className="h-6 w-6 text-blue-500" />,
    title: "Business Automation",
    description:
      "Auto-assign tasks, send Slack messages, and much more. Now power up with hundreds of new templates to help you get started.",
  },
  {
    icon: <DollarSign className="h-6 w-6 text-blue-500" />,
    title: "Finance",
    description:
      "Audit-proof software built for critical financial operations like month-end close and quarterly budgeting.",
  },
  {
    icon: <Layout className="h-6 w-6 text-blue-500" />,
    title: "Enterprise Design",
    description:
      "Craft beautiful, delightful experiences for both marketing and product with real cross-company collaboration.",
  },
  {
    icon: <Settings className="h-6 w-6 text-blue-500" />,
    title: "Operations",
    description:
      "Keep your company’s lights on with customizable, iterative, and structured workflows built for all efficient teams and individual.",
  },
];

export default function ArticleList() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto text-center">
      <h2 className="text-2xl md:text-3xl font-semibold mb-2">Secure platform, secure data</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        Here at Flowbite we focus on markets where technology, innovation, and capital
        can unlock long-term value and drive economic growth.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="text-left shadow-sm border border-gray-200 hover:shadow-md transition">
            <CardHeader>
              <div className="mb-3">{feature.icon}</div>
              <CardTitle className="text-lg font-semibold">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
