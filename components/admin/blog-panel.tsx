
"use client"
import * as React from "react"
import { DataTable } from "@/components/admin/data-table"
import { blogs, columns } from "@/components/admin/columns"
import { getAllBlogs } from "@/data/blog" // Assume getData fetches the blog data

export default function DemoPage() {
    const [data, setData] = React.useState<blogs[]>([])
    const [loading, setLoading] = React.useState<boolean>(true)

    React.useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const { blog: blogData } = await getAllBlogs()
                setData(blogData || [])
            } catch (error) {
                console.error("Error fetching data:", error)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    )
}

