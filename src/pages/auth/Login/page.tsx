import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Login() {
  return (
    <div className="min-h-screen flex justify-center bg-slate-200">
      <div className="hidden md:w-1/2 md:flex bg-emerald-900 text-white p-12 flex flex-col justify-between">
        <div>
          <h1 className="text-4xl font-bold mt-2">ALS</h1>
        </div>
        <div>
          <p className="text-lg italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
             nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in.
          </p>
          <p className="text-md font-semibold mt-4">Alternative learning system</p>
        </div>
      </div>
      <div className="md:w-1/2  bg-slate-200 p-12 flex flex-col justify-center">
        <div className="text-right">
          <Link href="#" className="text-sm  font-medium text-gray-600" prefetch={false}>
            Register
          </Link>
        </div>
        <div className="mt-12 bg-white py-8 px-6 shadow rounded-lg sm:px-10">
          <h2 className="text-3xl font-bold mb-4">HI!</h2>
          <p className="text-gray-600 mb-8">Login your account here.</p>
          <Input placeholder="name@example.com" className="mb-4" />
          <Input placeholder="password" className="mb-4" />
          <Button className="bg-emerald-900 text-white w-full mb-4">Log in</Button>
          <div className="flex items-center mb-4">
            <div className="flex-grow h-px bg-gray-300" />
            <span className="mx-4 text-sm text-gray-500">OR CONTINUE WITH</span>
            <div className="flex-grow h-px bg-gray-300" />
          </div>
          <Button variant="outline" className="flex items-center justify-center w-full mb-4">
            Google
          </Button>
          <p className="text-xs text-gray-500 mt-4">
            By clicking continue, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  )
}

