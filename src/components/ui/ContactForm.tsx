import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from '../ui/button';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  subject?: string;
  message: string;
};

export function ContactForm() {
  // Initialize useForm from react-hook-form
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  // Type the onSubmit handler
  const onSubmit: SubmitHandler<FormData> = (data) => {
    // Handle form submission
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center bg-[#101010] text-white py-12">
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl w-full">
        {/* Contact Form */}
        <div>
         
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 flex flex-col items-center">
            {/* First Name Field */}
            <div className="w-3/4 max-w-md">
              <label htmlFor="firstName" className="block text-sm font-semibold">First Name*</label>
              <input
                id="firstName"
                {...register('firstName', { required: 'First name is required' })}
                placeholder="First Name"
                className="px-4 py-3 w-full bg-gray-800 text-gray-300 placeholder-gray-500 rounded-md focus:ring-2 focus:ring-gray-500 focus:outline-none"
              />
              {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName.message}</p>}
            </div>

            {/* Last Name Field */}
            <div className="w-3/4 max-w-md">
              <label htmlFor="lastName" className="block text-sm font-semibold">Last Name*</label>
              <input
                id="lastName"
                {...register('lastName', { required: 'Last name is required' })}
                placeholder="Last Name"
                className="px-4 py-3 w-full bg-gray-800 text-gray-300 placeholder-gray-500 rounded-md focus:ring-2 focus:ring-gray-500 focus:outline-none"
              />
              {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName.message}</p>}
            </div>

            {/* Email Field */}
            <div className="w-3/4 max-w-md">
              <label htmlFor="email" className="block text-sm font-semibold">Email*</label>
              <input
                id="email"
                type="email"
                {...register('email', { required: 'Email is required' })}
                placeholder="Email"
                className="px-4 py-3 w-full bg-gray-800 text-gray-300 placeholder-gray-500 rounded-md focus:ring-2 focus:ring-gray-500 focus:outline-none"
              />
              {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
            </div>

            {/* Subject Field */}
            

            {/* Message Field */}
            <div className="w-3/4 max-w-md">
              <label htmlFor="message" className="block text-sm font-semibold">Message*</label>
              <textarea
                id="message"
                {...register('message', { required: 'Message is required' })}
                placeholder="Your message"
                className="px-4 py-3 w-full bg-gray-800 text-gray-300 placeholder-gray-500 rounded-md focus:ring-2 focus:ring-gray-500 focus:outline-none"
              />
              {errors.message && <p className="text-red-500 text-xs">{errors.message.message}</p>}
            </div>

            {/* Submit Button */}
            <Button type="submit" className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-md transition shadow-md w-3/4 max-w-md mt-4">
              Send
            </Button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col justify-center items-start text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Contact</h2>
          <p className="mb-4">
            I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.
          </p>
          <p className="mb-2">info@my-domain.com</p>
          <p>Tel: 1-800-000-0000</p>
        </div>
      </div>
    </div>
  );
}
