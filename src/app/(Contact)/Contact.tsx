import { Button, H1 } from '@/ui'

function Contact() {
  return (
    <section
      id="ABOUT"
      className="section bg-gradient-to-br from-gray-50 via-gray to-gray-100"
    >
      <div className="section-container">
        <H1 className="mb-20 text-center">CONTACT</H1>
        <div className="flex flex-col bg-white shadow-lg rounded-md gap-8 p-16 max-w-[80rem] w-[95%] mx-auto">
          <div className="bg-gray-200 w-100 h-16 rounded-md"></div>
          <div className="bg-gray-200 w-100 h-16 rounded-md"></div>
          <div className="bg-gray-200 w-100 h-40 rounded-md"></div>
          <div className="flex justify-end">
            <Button>SUBMIT</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
