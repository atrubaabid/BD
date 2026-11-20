import React, { useState } from 'react'
import { Button, Checkbox, Label, Textarea, TextInput } from "flowbite-react";
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";

export default function Enquiry() {
    let [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        msg: "",
    });

    let callingForm = (e) => {
        e.preventDefault()
        alert("j")

    }

    let getValue = (e) => {
        let oldData = { ...formData };
        let inputName = e.target.id;
        let inputValue = e.target.value;
        oldData[inputName] = inputValue;
        console.log(formData);
        
    }
    return (
        <div className='bg-blue-200'>
            <h1 className='text-center font-bold text-4xl py-[4rem]'>USER ENQUIRY FORM</h1>

            <div className=" max-w-330 mx-auto bg-blue-100 flex lg:flex-row flex-col justify-center items-center lg:items-start w-full p-[1.5rem] pt-[3rem] gap-5">

                {/* FORM */}
                <div className="form lg:w-[30%]  w-full bg-blue-200 rounded-2xl  ">
                    <form className="flex w-full flex-col gap-4  p-[35px_20px]" onSubmit={callingForm}>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="name">Your Name</Label>
                            </div>
                            <TextInput id="name" type="text" onChange={getValue} value={formData.name} placeholder="Enter your name" required />
                        </div>

                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email">Your Email</Label>
                            </div>
                            <TextInput id="email" type="email" placeholder="Enter your name" required />
                        </div>

                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="phone">Your Phone</Label>
                            </div>
                            <TextInput id="phone" type="text" placeholder="Enter your phone" required />
                        </div>

                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="msg">Your Message</Label>
                            </div>
                            <Textarea id="msg" type="text" placeholder="Enter your message" row={1} required />
                        </div>

                        <div className="flex items-center gap-2">
                            <Checkbox id="remember" />
                            <Label htmlFor="remember">Remember me</Label>
                        </div>
                        <Button type="submit" className='bg-blue-500'>Submit</Button>
                    </form>
                </div>


                {/* TABLE */}
                <div className="table lg:w-[70%] w-full bg-blue-200 mt-[3rem] lg:m-0 p-[1rem_0.5rem] rounded-2xl ">
                    <h1 className='text-center font-bold text-2xl py-[1rem]'>USER DATA</h1>

                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableHeadCell>Product name</TableHeadCell>
                                <TableHeadCell>Color</TableHeadCell>
                                <TableHeadCell>Category</TableHeadCell>
                                <TableHeadCell>Price</TableHeadCell>
                                <TableHeadCell>
                                    <span className="sr-only">Edit</span>
                                </TableHeadCell>
                            </TableRow>
                        </TableHead>

                        <TableBody className="divide-y">
                            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    Apple MacBook Pro 17"
                                </TableCell>
                                <TableCell>Sliver</TableCell>
                                <TableCell>Laptop</TableCell>
                                <TableCell>$2999</TableCell>
                                <TableCell>
                                    <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                                        Edit
                                    </a>
                                </TableCell>
                            </TableRow>
                            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    Microsoft Surface Pro
                                </TableCell>
                                <TableCell>White</TableCell>
                                <TableCell>Laptop PC</TableCell>
                                <TableCell>$1999</TableCell>
                                <TableCell>
                                    <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                                        Edit
                                    </a>
                                </TableCell>
                            </TableRow>
                            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Magic Mouse 2</TableCell>
                                <TableCell>Black</TableCell>
                                <TableCell>Accessories</TableCell>
                                <TableCell>$99</TableCell>
                                <TableCell>
                                    <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                                        Edit
                                    </a>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>


                </div>
            </div>

        </div>

    )
}
