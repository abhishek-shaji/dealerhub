import { mockCars } from '@/app/mock/cars';
import { CarForm } from '@/components/forms/car-form';

export default async function EditCarPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const p = await params;
  const car = mockCars.find((c) => c.id === p.id);

  if (!car) {
    return <div>Car not found</div>;
  }

  return <CarForm initialData={car} />;
}
