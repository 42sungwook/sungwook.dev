'use client'

import { Button, H1 } from '@/ui'
import { FieldValues, useForm } from 'react-hook-form'
import {
  ContactEmailInput,
  ContactMessageInput,
  ContactNameInput
} from './ContactFormInput'

function Contact() {
  const { register, handleSubmit } = useForm()
  const onSubmit = async (data: FieldValues) => {
    console.log(data)
  }

  return (
    <section
      id="ABOUT"
      className="section bg-gradient-to-br from-gray-50 via-gray to-gray-100"
    >
      <div className="section-container">
        <H1 className="mb-20 text-center">CONTACT</H1>
        <form
          className="flex flex-col bg-white shadow-lg rounded-md gap-8 p-16 max-w-[80rem] w-[95%] mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <ContactNameInput register={register} />
          <ContactEmailInput register={register} />
          <ContactMessageInput register={register} />
          <div className="flex justify-end">
            <Button type="submit">SUBMIT</Button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
