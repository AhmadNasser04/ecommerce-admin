import { Separator } from "@/components/ui/separator";
import Heading from "@/components/Heading";

interface DashboardPageProps {
  params: {
    storeId: string;
  };
}

const DashboardPage: React.FC<DashboardPageProps> = async ({ params }) => {
  return (
    <div className="flex-col">
      <div className="flex-1 p-8 pt-6 space-y-4">
        <Heading title="Dashboard" description="Overview of your store" />
        <Separator />
        <div>
          <div className="flex flex-col items-center justify-center h-[75vh] text-center">
            <h1 className="text-4xl font-bold">Coming Soon</h1>
            <p className="text-muted-foreground">
              This page is under construction
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
