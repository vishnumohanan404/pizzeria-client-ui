import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import { Product } from "@/lib/types";
import ProductModal from "./product-modal";
import { Suspense } from "react";

type PropTypes = {
  product: Product;
};

const ProductCard = ({ product }: PropTypes) => {
  return (
    <Card className="border-none rounded-xl ">
      <CardHeader className="flex items-center justify-center">
        <div className="w-[150px] h-[150px] relative">
          <Image
            alt="pizza-image"
            src={product.image}
            fill
            className="object-contain"
          />
        </div>
      </CardHeader>
      <CardContent>
        <h1 className="text-xl font-bold">{product.name}</h1>
        <p className="mt-2">{product.description}</p>
      </CardContent>
      <CardFooter className="flex items-center justify-between mt-3">
        <p>
          <span>From</span>
          <span className="font-bold">₹ {100}</span>
        </p>
        <ProductModal product={product} />
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
