import { Blog, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Blog[]> {
    // Fetch data from your API here.
    return [
        {
            id: "728ed52f",
            title: "10",
            category: "pending",
            action: "m@example.com",
        },
        {
            id: "728ed52f",
            title: "110",
            category: "pending",
            action: "m@example.com",
        },
        {
            id: "728ed52f",
            title: "100",
            category: "pending",
            action: "m@example.com",
        },
        {
            id: "728ed52f",
            title: "100",
            category: "pending",
            action: "m@example.com",
        },
        {
            id: "728ed52f",
            title: "100",
            category: "pending",
            action: "m@example.com",
        },
        {
            id: "728ed52f",
            title: "100",
            category: "pending",
            action: "m@example.com",
        },
        {
            id: "728ed52f",
            title: "100",
            category: "pending",
            action: "m@example.com",
        },
        {
            id: "728ed52f",
            title: "100",
            category: "pending",
            action: "m@example.com",
        },
        {
            id: "728ed52f",
            title: "100",
            category: "pending",
            action: "m@example.com",
        },
        {
            id: "728ed52f",
            title: "100",
            category: "pending",
            action: "m@example.com",
        },
        {
            id: "728ed52f",
            title: "100",
            category: "pending",
            action: "m@example.com",
        },
        {
            id: "728ed52f",
            title: "100",
            category: "pending",
            action: "m@example.com",
        },
        // ...
    ]
}

export default async function DemoPage() {
    const data = await getData()

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    )
}
