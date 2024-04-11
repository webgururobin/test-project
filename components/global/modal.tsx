"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { useModal } from '@/hooks/use-modal'


interface ProfileSheetProps {
    children: React.ReactNode
}

const Modal = ({ children }: ProfileSheetProps) => {
    const modal = useModal()
    const onChange = (open: boolean) => {
        if (!open) {
            modal.onClose()
        }
    }

    return (
        <>
            <Dialog open={modal.isOpen} onOpenChange={onChange}>
                <DialogContent className='m-0 p-0 max-w-2xl'>{children}</DialogContent>
            </Dialog>
        </>
    )
}

export default Modal
