"use client";

import { Plus } from "lucide-react";
import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useParams, useRouter } from "next/navigation";
import BillboardColumns, {
  BillboardColumn,
} from "@/components/billboard/Columns";
import { DataTable } from "@/components/ui/data-table";
import { ApiList } from "@/components/ui/api-list";

interface BillboardClientProps {
  data: BillboardColumn[];
}

const BillboardClient: React.FC<BillboardClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Billboards (${data.length})`}
          description="Manage billboards for your store"
        />
        <Button
          onClick={() => router.push(`/${params.storeId}/billboards/new`)}
        >
          <Plus className="w-4 h-4 mr-2" />
          Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="label" columns={BillboardColumns} data={data} />
      <Heading title="Api" description="Api calls for Billboards" />
      <Separator />
      <ApiList entityName="billboards" entityIdName="billboardId" />
    </>
  );
};

export default BillboardClient;
