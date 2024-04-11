'use client'

import Form from '@/components/global/form'
import Modal from '@/components/global/modal'
import { Button } from '@/components/ui/button'
import { useModal } from '@/hooks/use-modal'
import React from 'react'

const Homepage = () => {
  const { isOpen, onOpen, onClose } = useModal()

  return (
    <div className='bg-black min-h-screen'>
      <Button onClick={() => onOpen()}>Open Modal</Button>

      <Modal><Form /></Modal>


    </div>
  )
}

export default Homepage