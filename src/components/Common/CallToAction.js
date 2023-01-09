import React from 'react'
import Image from 'next/image'
import Button from './Button'
import Input from './Input'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import Toast from './Toast'

const CallToAction = () => {
  const router = useRouter()
  const pathUrl = router.pathname
  const [email, setEmail] = React.useState('')
  const [name, setName] = React.useState('')
  const [dataForm, setDataForm] = React.useState({})
  const [alert, setAlert] = React.useState('')
  const [isLoading, setLoading] = React.useState(false)
  const submitForm = async (e) => {
    e.preventDefault()
    setLoading(true)
    console.log('submit')
    const settings = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([
        {
          name: name,
          email: email,
        },
      ]),
    }
    try {
      const fetchResponse = await fetch(
        'https://api.steinhq.com/v1/storages/63142301bc148508ba8b7253/Sheet1',
        settings
      )
      const data = await fetchResponse.json()
      setAlert('success')
      setLoading(false)
      setName('')
      setEmail('')
      console.log(data)
    } catch (e) {
      setAlert('error')
      setLoading(false)
      console.log(e)
    }
  }
  // set timeout alert message to zero
  React.useEffect(() => {
    setTimeout(() => {
      setAlert(null)
    }, 3000)
  }, [alert])
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-40">
        {alert === 'success' && (
          <Toast
            name="success"
            icon={
              <>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="sr-only">Check icon</span>
              </>
            }
            description="Thank you for contacting us. We will get back to you soon."
            onClick={() => setAlert(null)}
          />
        )}
        {alert === 'error' && (
          <Toast
            name="error"
            icon={
              <>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="sr-only">Error icon</span>
              </>
            }
            description="There is a error"
            onClick={() => setAlert(null)}
          />
        )}
      </div>
      <div
        className={clsx(
          'border text-white p-6 xl:py-[63px] xl:px-[34px] w-auto border-brand-primary bg-brand-quaternary rounded-lg relative  ',
          pathUrl !== '/contact' ? '-mt-[135px]' : 'mt-[270px] mb-[84px]'
        )}
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="flex items-end flex-col xl:flex-row">
          <h3
            className="font-bold text-xl sm:text-[36px] leading-relaxed xl:mr-2 mx-auto xl:mx-0 mb-6 sm:mb-0"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Get informed for our latest update
          </h3>

          <form className="w-full lg:max-w-[100%] xl:max-w-[842px] flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div data-aos="fade-up" data-aos-delay="400">
              <label
                className="block text-white-700 text-base mb-2"
                htmlFor="name"
                id="name"
              >
                Name
              </label>
              <input
                className="shadow border rounded p-4 h-[54px] w-full lg:w-[300px] xl:w-[296px] py-2 px-3 text-gray-700 leading-tight focus:outline-brand-primary focus:shadow-outline placeholder:text-base"
                id="name"
                type="text"
                placeholder="Input your name here..."
                required={true}
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div className="" data-aos="fade-up" data-aos-delay="500">
              <label
                className="text-base block text-white-700 mb-2"
                htmlFor="email"
                id="email"
              >
                E-mail
              </label>
              <input
                className="shadow appearance-none p-4  h-[54px] w-full lg:w-[300px] xl:w-[296px] border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-brand-primary  placeholder:text-base"
                id="email"
                type="email"
                placeholder="Input your e-mail here..."
                required={true}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <Button
              className={
                'sm:max-w-[186px] w-full h-11 sm:h-auto flex items-center justify-center'
              }
              variant="primary"
              data-aos="fade-up"
              data-aos-delay="600"
              onClick={submitForm}
              disabled={isLoading}
              type="submit"
            >
              {isLoading ? (
                <>
                  <svg
                    aria-hidden="true"
                    role="status"
                    class="inline mr-3 w-4 h-4 text-white animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                  Loading...
                </>
              ) : (
                'Send'
              )}
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}

export default CallToAction
