import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard from "./product-card";
import { Category, Product } from "@/lib/types";

const ProductList = async () => {
  const categoryResponse = await fetch(
    `${process.env.BACKEND_URL}/api/catalog/categories`,
    {
      next: { revalidate: 3600 },
    }
  );
  if (!categoryResponse.ok) {
    throw new Error("Failed to fetch categories");
  }
  const categories: Category[] = await categoryResponse.json();

  // todo: add pagination in UI
  const productsResponse = await fetch(
    // todo: add dynamic product ID
    `${process.env.BACKEND_URL}/api/catalog/products?perPage=100&tenantId=1`
  );
  if (!productsResponse.ok) {
    throw new Error("Failed to fetch products");
  }
  const products: { data: Product[] } = await productsResponse.json();
  return (
    <section>
      <div className="container py-12">
        <Tabs defaultValue={categories[0]._id}>
          <TabsList>
            {categories.map((category) => (
              <TabsTrigger
                className="text-md"
                value={category._id}
                key={category._id}
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {categories.map((category) => {
            return (
              <TabsContent value={category._id} key={category._id}>
                <div className="grid grid-cols-4 gap-6 mt-6">
                  {products.data
                    .filter((product) => product.category._id === category._id)
                    ?.map((product) => (
                      <ProductCard product={product} key={product._id} />
                    ))}
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
};

export default ProductList;
