import { Mail, UserPlus } from 'lucide-react'
import React from 'react'
import { Separator } from '../ui/separator'
import { Checkbox } from '../ui/checkbox'
import { Label } from '../ui/label'
import { Input } from '../ui/input'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select"
import { Button } from '../ui/button'


const Form = () => {
    return (
        <div className='w-full border-lg bg-white text-black mx-auto rounded-md'>
            <section className='flex gap-4 items-center p-4'>
                <UserPlus className='h-12 w-12 p-3 border-gray-200 border-[1px] rounded-md' />
                <div>
                    <h2 className='text-lg font-bold'>Add team member</h2>
                    <p className='text-sm font-black/50'>Invite a member of your team to use the system</p>
                </div>
            </section>
            <Separator />

            <section className='p-4'>
                <p className='font-base font-semibold mb-4'>Permissions</p>

                <div className='flex gap-4 flex-col md:flex-row'>
                    <div className='flex item-start gap-2'>
                        <Checkbox className='h-4 w-4 mt-1' />
                        <div className='flex flex-col text-sm'>
                            <p className='font-bold '>Organisation admin</p>
                            <span className='font-sm text-foreground/60'>Full edit access to all organisation settings </span>
                        </div>
                    </div>

                    <div className='flex item-start gap-2'>
                        <Checkbox className='h-4 w-4 mt-1 text-sm' />
                        <div className='flex flex-col text-sm'>
                            <p className='font-bold'>Organisation Billing access</p>
                            <span className='font-sm text-foreground/60'>Access to organisational billing only</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className='p-4 flex flex-col space-y-4'>
                <div className="flex gap-4 flex-col md:flex-row">
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="first_name">First Name</Label>
                        <Input type="first_name" id="first_name" placeholder="First name" />
                    </div>

                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="surname">Surname</Label>
                        <Input type="surname" id="surname" placeholder="surname" />
                    </div>
                </div>

                <div className="">
                    <Label htmlFor="email">Email</Label>

                    <div className="relative flex items-center w-full">
                        <Mail className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform" />
                        <Input
                            placeholder="email@gmail.com"
                            className="pl-8 w-full"
                        />
                    </div>
                </div>


                <div className="grid w-full gap-1.5">
                    <Label htmlFor="role">Role</Label>
                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select role" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="option">Option</SelectItem>
                            <SelectItem value="option">Option</SelectItem>
                            <SelectItem value="option">Option</SelectItem>
                            <SelectItem value="option">Option</SelectItem>
                            <SelectItem value="option">Option</SelectItem>
                        </SelectContent>
                    </Select>
                </div>


                <div className="grid w-full gap-1.5">
                    <Label htmlFor="branch">Branch</Label>
                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select branch" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="option">Option</SelectItem>
                            <SelectItem value="option">Option</SelectItem>
                            <SelectItem value="option">Option</SelectItem>
                            <SelectItem value="option">Option</SelectItem>
                            <SelectItem value="option">Option</SelectItem>
                        </SelectContent>
                    </Select>
                    <span className='text-sm text-foreground/60'>Select all that apply</span>
                </div>


                <div className="grid w-full gap-1.5">
                    <Label htmlFor="team-member">Teams</Label>
                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select team members" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="option">Option</SelectItem>
                            <SelectItem value="option">Option</SelectItem>
                            <SelectItem value="option">Option</SelectItem>
                            <SelectItem value="option">Option</SelectItem>
                            <SelectItem value="option">Option</SelectItem>
                        </SelectContent>
                    </Select>
                </div>




            </section>

            <section className='grid grid-cols-2 gap-2 p-4'>
                <Button variant="outline">Cancel</Button>
                <Button>Invite</Button>
            </section>


        </div>
    )
}

export default Form