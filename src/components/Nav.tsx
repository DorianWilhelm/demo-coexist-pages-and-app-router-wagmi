"use client";
import Link from "next/link";
import { FC } from "react";

import { usePathname } from "next/navigation";

const PAGES_ROUTE_PATH = "/pages-router";
const APP_ROUTE_PATH = "/app-router";

const Nav: FC<{}> = () => {
  const path = usePathname();

  if (!path) return null;

  return (
    <div className="flex space-x-4">
      {path.includes(PAGES_ROUTE_PATH) ? (
        <span>Pages Router</span>
      ) : (
        <Link
          className="text-blue-800"
          href={PAGES_ROUTE_PATH}
          prefetch={false}
        >
          Pages Router
        </Link>
      )}
      {path.includes(APP_ROUTE_PATH) ? (
        <span>App Router</span>
      ) : (
        <Link className="text-blue-800" href={APP_ROUTE_PATH} prefetch={false}>
          App Router
        </Link>
      )}
    </div>
  );
};

export default Nav;
