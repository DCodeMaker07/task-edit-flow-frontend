import Link from "next/link";

export default function Home() {
  return (
    <div className="h-dvh w-full">
      <div className="w-full h-full flex justify-center items-center">
        <div className="flex flex-col gap-y-2">
          <p className="text-2xl">TaskFlow Pro</p>
          <Link href={'/auth/login'} type="button" className="btn btn-soft rounded-lg">
            Iniciar Sesión
          </Link>
        </div>
      </div>
    </div>
  );
}
