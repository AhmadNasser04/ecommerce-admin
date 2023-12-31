"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React from "react";

export default function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathName = usePathname();
  const params = useParams();

  const routes = [
    {
      label: "Overview",
      href: `/${params.storeId}`,
      active: pathName === `/${params.storeId}`,
    },
    {
      label: "Categories",
      href: `/${params.storeId}/categories`,
      active: pathName === `/${params.storeId}/categories`,
    },
    {
      label: "Sizes",
      href: `/${params.storeId}/sizes`,
      active: pathName === `/${params.storeId}/sizes`,
    },
    {
      label: "Colors",
      href: `/${params.storeId}/colors`,
      active: pathName === `/${params.storeId}/colors`,
    },
    {
      label: "Products",
      href: `/${params.storeId}/products`,
      active: pathName === `/${params.storeId}/products`,
    },
    {
      label: "Settings",
      href: `/${params.storeId}/settings`,
      active: pathName === `/${params.storeId}/settings`,
    },
  ];

  return (
    <nav
      className={cn(
        "overflow-x-scroll md:overflow-x-auto flex items-center space-x-4 lg:space-x-6",
        className
      )}
    >
      {routes.map((route) => (
        <Link
          href={route.href}
          key={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            route.active
              ? "text-black dark:text-white"
              : "text-muted-foreground"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
}
