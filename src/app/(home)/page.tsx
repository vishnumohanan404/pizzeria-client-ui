import { Button } from "@/components/ui/button";
import Image from "next/image";
import ProductList from "./components/product-list";
import { Suspense } from "react";
import { SkeletonCard } from "./components/skeleton-card";

export default function Home() {
  return (
    <>
      <section className="bg-white">
        <div className="container flex items-center justify-between py-24">
          <div>
            <h1 className="text-7xl font-black font-sans leading-tight">
              Super Delicious Pizza in <br />
              <span className="text-primary">Only 45 Minutes!</span>
            </h1>
            <p className="text-2xl mt-8 max-w-lg leading-snug">
              Enjoy a Free Meal if Your Order Takes More Than 45 Minutes!
            </p>
            <Button className="mt-8 text-lg rounded-full py-7 px-6 font-bold">
              Get your pizza now
            </Button>
          </div>
          <div>
            <Image
              alt="pizza-main"
              src={"/pizza-main.png"}
              width={400}
              height={400}
            />
          </div>
        </div>
      </section>
      <Suspense
        fallback={
          <section>
            <div className="container py-12">
              <div className="grid grid-cols-4 gap-10 mt-6">
                <SkeletonCard></SkeletonCard>
                <SkeletonCard></SkeletonCard>
                <SkeletonCard></SkeletonCard>
                <SkeletonCard></SkeletonCard>
              </div>
            </div>
          </section>
        }
      >
        <ProductList />
      </Suspense>
    </>
  );
}
