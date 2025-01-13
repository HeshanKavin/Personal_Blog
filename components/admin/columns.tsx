"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type blogs = {
    id: number
    title: string
    image: string
    description: string
    blog_body: string
    writer: string
}

export const columns: ColumnDef<blogs>[] = [
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
        accessorKey: "description",
        header: "Description",
    },
    // {
    //     accessorKey: "image",
    //     header: "Image_url",
    // },
    // {
    //     accessorKey: "blog_body",
    //     header: "Blog Body",
    // },
    {
        accessorKey: "date",
        header: "Date",
    },
    {
        accessorKey: "writer",
        header: "Writer",
    },

    {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => {
            const blog = row.original;

            return (
                <div className="space-x-2">
                    <Button
                        variant="secondary"
                        onClick={() => {
                            console.log(`Edit blog with ID:${blog.id}`);
                            // Add your edit logic here
                        }}
                    >
                        Edit
                    </Button>
                    <Button
                        variant="default"
                        onClick={() => {
                            console.log(`Delete blog with ID: ${blog.id}`);
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
