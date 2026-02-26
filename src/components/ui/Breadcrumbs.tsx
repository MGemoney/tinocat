import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center gap-2 text-sm text-stone-500">
        <li>
          <Link href="/" className="hover:text-amber-600 transition-colors">
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <span aria-hidden="true">/</span>
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-amber-600 transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-stone-800">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
