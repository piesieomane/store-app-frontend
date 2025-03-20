import React from "react";
import { useQuery } from "@tanstack/react-query";
import { api } from "../lib/axios";
import { ProductCard } from "./ProductCard";
import { Product } from "../types/product";

export const ProductGrid: React.FC = () => {
  const { data, isLoading, isError, error } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await api.get<Product[]>("/products");
      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center text-red-600 py-8">
        <p>{(error as Error).message || "Failed to load products"}</p>
      </div>
    );
  }

  console.log(data);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {data?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
