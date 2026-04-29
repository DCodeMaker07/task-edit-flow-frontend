/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import { useAppDispatch } from "@/redux/hooks";
import { loginSuccess } from "@/redux/slices/authSlice";
import { loginRequest } from "@/lib/auth.api";
import { loginSchema } from "@/lib/validations/auth.schema";

export default function LoginPage() {

    const dispatch = useAppDispatch();
    const router = useRouter();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: loginSchema,

        onSubmit: async (values, { setSubmitting, setStatus }) => {
            try {
                setStatus(null);

                const res = await loginRequest(values);

                dispatch(loginSuccess(res.data));

                router.push('/dashboard');
            } catch (err: any) {
                setStatus(err.response?.data?.message || 'Error al iniciar sesión');
            } finally {
                setSubmitting(false);
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
                            disabled={formik.isSubmitting}
                        >
                            {formik.isSubmitting ? (
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
