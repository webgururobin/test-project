import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Business from '@/components/global/business'


const page = () => {
    return (
        <div className='max-w-screen-md mx-auto p-4'>
            <h1 className='text-2xl font-semibild mb-4' >Settings</h1>

            <Tabs className='rounded-lg' defaultValue="business">
                <TabsList className='bg-white border-[1px]'>
                    <TabsTrigger value="profile">Profile</TabsTrigger>
                    <TabsTrigger value="business">Business</TabsTrigger>
                    <TabsTrigger value="branches">Branches</TabsTrigger>
                    <TabsTrigger value="onborading">Onboarding</TabsTrigger>
                    <TabsTrigger value="team">Team</TabsTrigger>
                    <TabsTrigger value="notifications">Notifications</TabsTrigger>
                    <TabsTrigger value="security">security</TabsTrigger>
                    <TabsTrigger value="billing">Billing</TabsTrigger>
                </TabsList>
                <TabsContent value="business">
                    <Business />
                </TabsContent>

            </Tabs>


        </div >
    )
}

export default page