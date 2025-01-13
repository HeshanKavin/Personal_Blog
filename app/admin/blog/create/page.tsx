import AddBlog from '@/components/admin/add-blog'
import React from 'react'


const page = () => {
    return (
        <div>
            <AddBlog />
        </div>
    )
}

export default page


// const onSubmit = (data: any) => {
//     console.log("Form Data:", data);
//     alert("Thank you for reaching out! We will get back to you soon.");
//     formMethods.reset(); // Reset form fields
// };