import { notFound } from 'next/navigation';
import { getWarehouseBySlug, getAllWarehouseSlugs } from '@/data/warehouses';
import { WarehouseDetailPage } from '@/components/warehouse-detail-page';
import type { Metadata } from 'next';

interface WarehousePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const slugs = getAllWarehouseSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({
  params,
}: WarehousePageProps): Promise<Metadata> {
  const warehouse = getWarehouseBySlug(params.slug);

  if (!warehouse) {
    return {
      title: 'Warehouse Not Found | Emerce',
      description: 'The requested warehouse could not be found.',
    };
  }

  return {
    title: warehouse.seo.metaTitle,
    description: warehouse.seo.metaDescription,
    openGraph: {
      title: warehouse.seo.metaTitle,
      description: warehouse.seo.metaDescription,
      images: [warehouse.images.main],
    },
  };
}

export default function WarehousePage({ params }: WarehousePageProps) {
  const resolvedParams = params;
  const warehouse = getWarehouseBySlug(resolvedParams.slug);

  if (!warehouse) {
    notFound();
  }

  return <WarehouseDetailPage warehouse={warehouse} />;
}
