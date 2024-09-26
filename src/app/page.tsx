import EmailForm from './email-form'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Subscribe to our newsletter
          </h2>
        </div>
        <EmailForm />
      </div>
    </div>
  )
}