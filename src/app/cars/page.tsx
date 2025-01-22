"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { PlusCircle, Pencil, Trash2 } from "lucide-react";
import { mockCars } from "../mock/cars";
import { format } from "date-fns";

export default function CarsPage() {
  const router = useRouter();
  const [cars, setCars] = useState(mockCars);

  const handleDelete = (id: string) => {
    setCars(cars.filter((car) => car.id !== id));
  };

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Cars Inventory</h1>
        <Button onClick={() => router.push("/cars/create")}>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add New Car
        </Button>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Brand</TableHead>
              <TableHead>Model</TableHead>
              <TableHead>Registration Date</TableHead>
              <TableHead>VIN</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Condition</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cars.map((car) => (
              <TableRow key={car.id}>
                <TableCell>{car.brand}</TableCell>
                <TableCell>{car.model}</TableCell>
                <TableCell>{format(new Date(car.registrationDate), "PP")}</TableCell>
                <TableCell>{car.vinNumber}</TableCell>
                <TableCell>{`${car.price} ${car.currency}`}</TableCell>
                <TableCell className="capitalize">{car.condition}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => router.push(`/cars/edit/${car.id}`)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="destructive"
                      size="icon"
                      onClick={() => handleDelete(car.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}