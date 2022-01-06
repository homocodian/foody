import Link from "next/link";
import { AnchorHTMLAttributes, ReactNode } from "react";

interface MyLink extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string,
  children: ReactNode,
}

function MyLink({ href, children, ...rest }: MyLink) {
  return (
    <Link href={href}>
      <a {...rest}>{children}</a>
    </Link>
  )
}

export default MyLink
