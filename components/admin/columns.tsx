"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Blog = {
    id: string
    title: string
    category: string
    action: string
}

export const columns: ColumnDef<Blog>[] = [
    {
        accessorKey: "title",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Title
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "category",
        header: "Category",
    },
    {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => {
            const payment = row.original;

            return (
                <div className="space-x-2">
                    <Button
                        variant="secondary"
                        onClick={() => {
                            console.log(`Edit payment with ID: ${payment.id}`);
                            // Add your edit logic here
                        }}
                    >
                        Edit
                    </Button>
                    <Button
                        variant="default"
                        onClick={() => {
                            console.log(`Delete payment with ID: ${payment.id}`);
                            // Add your delete logic here
                        }}
                    >
                        Delete
                    </Button>
                </div>
            );
        },
    },
]
