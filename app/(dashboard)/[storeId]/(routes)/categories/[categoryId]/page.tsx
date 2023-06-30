import CategoryForm from "@/components/category/Form";
import prismadb from "@/lib/prismadb";

const CategoryPage = async ({
  params,
}: {
  params: { categoryId: string; storeId: string };
}) => {
  const category = await prismadb.category.findUnique({
    where: {
      id: params.categoryId,
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 p-8 pt-6 space-y-4">
        <CategoryForm initialData={category} />
      </div>
    </div>
  );
};

export default CategoryPage;
