import AcmeLogo from '@/app/ui/acme-logo';
import LoginForm from '@/app/ui/login-form';
import { Suspense } from 'react';
 
export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
          <div className="w-32 text-white md:w-36">
            <AcmeLogo />
          </div>
        </div>
        <Suspense>
          <LoginForm />
        </Suspense>
        <div className="flex w-full items-end rounded-lg bg-blue-500 px-2 py-4 !mt-[40px] justify-center">
          <p className='text-white font-semibold'>
          Test email: user@nextmail.com<br></br>
          Test password: 123456
          </p>
        </div>
      </div>
    </main>
  );
}