'use client'
import { Mail } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { PhoneInput } from '@/components/ui/phone-input'
import {
    Country,
} from "react-phone-number-input"
import { SingleImageDropzone } from '../ui/single-image-dropzone'
import { Button } from '../ui/button'
import { useState } from 'react'

const Business = () => {
    const [phoneNumber, setPhoneNumber] = useState("")
    const [country, setCountry] = useState<Country>()
    const [file, setFile] = useState<File>()
    return (
        <div className='flex flex-col space-y-6'>
            <section className='mt-4'>
                <div className='flex gap-2 items-center'>
                    <Mail className='h-4 w-' />
                    <h2 className='text-md font-bold'>Business Information</h2>
                </div>
                <p className='text-xs text-foreground/60'>View and edit your business Information</p>
            </section>
            <Separator />

            <div className='flex flex-col space-y-6 mt-4'>
                <div>
                    <div className="grid w-full items-center gap-2">
                        <Label htmlFor="company_name">Registered company name</Label>
                        <Input type="company_name" id="company_name" placeholder=" Company name" />
                    </div>
                </div>
            </div>
            <Separator className='my-4' />

            <div className='flex gap-4 space-y-6 mt-4 items-baseline justify-center'>
                <div className="grid w-full items-center gap-2">
                    <Label htmlFor="company_number">Registered company number</Label>
                    <Input type="company_number" id="company_number" placeholder=" 12345678" />
                </div>
                <div className="grid w-full items-center gap-2">
                    <Label htmlFor="sra_clc_number">Company SRA/CLC number</Label>
                    <Input type="sra_clc_number" id="sra_clc_number" placeholder=" 123456" />
                </div>
            </div>
            <Separator className='my-4' />

            <div className='flex gap-4 space-y-6 mt-4 items-baseline justify-center'>
                <div className="grid w-full items-center gap-2">
                    <Label htmlFor="vat_number">VAT number</Label>
                    <Input type="vat_number" id="vat_number" placeholder="GB11223344" />
                </div>
                <div className="grid w-full items-center gap-2">
                    <Label htmlFor="trading_name">Trading name</Label>
                    <Input type="trading_name" id="trading_name" placeholder="Trading name" />
                </div>
            </div>
            <Separator className='my-4' />

            <div className='flex gap-4 space-y-6 mt-4 items-baseline justify-center'>

                <div className="grid w-full items-center gap-2">
                    <Label htmlFor="website">Website</Label>

                    <div className="relative flex items-center w-full">
                        <span className='absolute left-2 top-1/2  -translate-y-1/2 transform border-r-[1px] h-full border-r-foreground/20 flex items-center pr-2 text-xs'>https://</span>
                        <Input
                            placeholder="email@gmail.com"
                            className="pl-16 w-full"
                        />
                    </div>
                    <span className='text-xs text-foreground/60'>This is a hint text to help user.</span>
                </div>

                <div className="grid w-full items-center gap-2">
                    <Label htmlFor="website">Website</Label>

                    <div className="relative flex items-center w-full">
                        <span className='absolute left-2 top-1/2  -translate-y-1/2 transform border-r-[1px] h-full border-r-foreground/20 flex items-center pr-2 text-xs'>https://</span>
                        <Input
                            placeholder="email@gmail.com"
                            className="pl-16 w-full"
                        />
                    </div>
                    <span className='text-xs text-foreground/60'>This is a hint text to help user.</span>
                </div>
            </div>
            <Separator className='my-4' />

            <div className='flex gap-4 space-y-6 mt-4 items-baseline justify-center'>

                <div className="grid w-full items-center gap-2">
                    <Label htmlFor="website">Website</Label>

                    <PhoneInput value={phoneNumber} onChange={setPhoneNumber} international defaultCountry="US" />


                </div>

                <div className="grid w-full items-center gap-2">

                    <Label htmlFor="email">Email</Label>

                    <div className="relative flex items-center w-full">
                        <Mail className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform" />
                        <Input
                            placeholder="company@gmail.com"
                            className="pl-8 w-full"
                        />

                    </div>
                </div>
            </div>
            <Separator className='my-4' />

            <div className='flex flex-col mt-4'>
                <div>
                    <div className="grid w-full items-center gap-2">
                        <Label htmlFor="company_address">Company Address</Label>
                        <Input type="company_address" id="company_address" placeholder="Start typing your address" />
                    </div>
                </div>

                <div className='flex gap-4 space-y-6 items-baseline justify-center'>
                    <div className="grid w-full items-center gap-2">
                        <Input type="address_line_1" id="address_line_1" placeholder=" Address Line 1" />
                    </div>
                    <div className="grid w-full items-center gap-2">
                        <Input type="address_line_2" id="address_line_2" placeholder=" Address Line 2" />
                    </div>
                </div>

                <div className='flex gap-4 space-y-6 items-baseline justify-center'>
                    <div className="grid w-full items-center gap-2">
                        <Input type="address_line_3" id="address_line_3" placeholder=" Address Line 3" />
                    </div>
                    <div className="grid w-full items-center gap-2">
                        <Input type="postcode" id="postcode" placeholder="Postcode" />
                    </div>
                </div>
            </div>
            <Separator className='my-4' />


            <div className='flex flex-col mt-4 justify-start'>
                <div className='flex gap-4 items-start justify-center'>
                    <div className="grid w-full items-center">
                        <strong>Company logo</strong>
                        <p className='text-sm text-foreground/60'>This will be displayed on your cases</p>

                        <img src={file && URL.createObjectURL(file) || '/logo-placeholder.png'} alt="logo" width={100} height={100} />
                    </div>
                    <div className="grid w-full gap-2">
                        <SingleImageDropzone
                            dropzoneOptions={{ accept: { 'image/*': ['.png', '.jpeg', '.jpg'] } }}
                            onChange={(file) => {
                                setFile(file)
                            }} />
                    </div>
                </div>
            </div>

            <Separator className='my-4' />

            <div>
                <Button className='float-right'>Save</Button>
            </div>
        </div>
    )
}

export default Business