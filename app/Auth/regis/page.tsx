import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import { CiLogin } from "react-icons/ci";

export default function Home() {
  return (
    <main className="bg-[#3F7D58] h-screen flex items-center justify-center p-10">
      <div className="grid w-full h-full grid-cols-1 bg-white box-anim md:grid-cols-2">
        <div className="bg-[#EF9651] text-black flex items-center justify-center flex-col">
          <div className="my-4">
            <h1 className="text-3xl font-semibold ">Register</h1>
            <p className="mt-2 text-xs text-slate-100000">
              Register for Babuah
            </p>
          </div>
          <form>

            <Label htmlFor="nama">Nama*</Label>
            <Input
              className="mt-2 mb-4 bg-transparent rounded-full"
              type="nama lengkap"
              id="nama lengkap"
              placeholder="nama lengkap"
            />

            <Label htmlFor="email">Email*</Label>
            <Input
              className="mt-2 mb-4 bg-transparent rounded-full"
              type="email"
              id="email"
              placeholder="Email"
            />
            
            <Label htmlFor="password">Password*</Label>
            <Input
              className="mt-2 mb-1 bg-transparent rounded-full"
              type="password"
              id="password"
              placeholder="password"
            />

            <p className="mt-2 text-xs text-slate-20 justify-center p-10">
                Already have an account ? 
            </p>

            <Button
              className="flex items-center w-full gap-4 px-12 mb-5 bg-transparent rounded-full"
              variant="outline"
            >
              {' '}
              <CiLogin />
              Login Here
            </Button>

            <Button
              type="submit"
              className="w-full mt-6 bg-indigo-600 rounded-full hover:bg-indigo-700"
            >
              Register
            </Button>
          </form>
          <p className="mt-4 text-xs text-slate-200">
            @2023 All rights reserved
          </p>
        </div>
        <div className="relative hidden md:block">
          <Image
            className="object-cover "
            fill={true}
            src="/bg.jpg"
            alt="bg-image"
          />
        </div>
      </div>
    </main>
  );
}