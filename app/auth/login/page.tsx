/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import { useAppDispatch } from "@/redux/hooks";
import { loginSchema } from "@/lib/validations/auth.schema";
import { useLoginMutation } from "@/redux/services/auth-api";
import { setUser } from "@/redux/slices/authSlice";
import { toast } from "react-toastify";

export default function LoginPage() {

    const [login, { isLoading }] = useLoginMutation();
    const dispatch = useAppDispatch();
    const router = useRouter();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: loginSchema,
        onSubmit: async (values, { setStatus }) => {
            try {
                const res = await login(values).unwrap();

                localStorage.setItem("token", res.data.access_token);

                dispatch(setUser(res.data));

                router.push("/dashboard");

            } catch (error: any) {
                setStatus(error.data.message || "Something went wrong")
                toast.error(error.data.message);
            }
        },
    });

    return (
        <div className="min-h-dvh h-dvh w-full bg-zinc-100">
            <div className="w-full h-full flex justify-center items-center">
                <form onSubmit={formik.handleSubmit} className="card bg-zinc-50 w-96 shadow-xl p-4 rounded-lg">
                    <div className="flex flex-col gap-y-4">
                        <p className="text-zinc-800 font-semibold text-center">Iniciar Sesión</p>
                        <div className="mb-2">
                            <label className="block text-zinc-700 text-sm font-bold mb-2">
                                Correo
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="email"
                                type="email"
                                placeholder="Correo"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />

                            {formik.touched.email && formik.errors.email && (
                                <p className="text-red-500 text-sm">
                                    {formik.errors.email}
                                </p>
                            )}
                        </div>

                        <div className="mb-2">
                            <label className="block text-zinc-700 text-sm font-bold mb-2">
                                Contraseña
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                placeholder="Contraseña"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                            />
                            {formik.touched.password && formik.errors.password && (
                                <p className="text-red-500 text-sm">
                                    {formik.errors.password}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="btn btn-neutral"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <span className="loading loading-spinner text-primary"></span>
                            ) : 'Iniciar Sesión'}
                        </button>

                        {formik.status && (
                            <p className="text-red-500 text-sm text-center">
                                {formik.status}
                            </p>
                        )}

                    </div>
                </form>
            </div>
        </div>
    )
}
