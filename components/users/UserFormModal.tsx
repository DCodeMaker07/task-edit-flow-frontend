"use client";

import { useRef } from "react";
import { useFormik } from "formik";
import {
  useCreateUserMutation,
  useUpdateUserMutation,
} from "@/redux/services/user-api";
import { User, UserRole } from "@/redux/services/interfaces/users/User-response";
import { userCreateSchema, userUpdateSchema } from "@/lib/validations/user.schema";

type Props = {
  user?: User;
};

export const UserFormModal = ({ user }: Props) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const [createUser, { isLoading: creating }] = useCreateUserMutation();
  const [updateUser, { isLoading: updating }] = useUpdateUserMutation();

  const isEditMode = !!user;

  const formik = useFormik({
    initialValues: {
      email: user?.email || "",
      name: user?.name || "",
      password: "",
      role: user?.role || UserRole.Developer,
    },
    enableReinitialize: true,
    validationSchema: isEditMode ? userUpdateSchema : userCreateSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        if (isEditMode) {
          const { email, password, ...updatePayload } = values;

          await updateUser({ id: user.id, ...updatePayload }).unwrap();
        } else {
          await createUser(values).unwrap();
        }

        resetForm();
        dialogRef.current?.close();
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <>
      <dialog ref={dialogRef} className="modal" id="my_user_form_modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-4">
            {isEditMode ? "Edit User" : "Create User"}
          </h3>

          <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">

            <div>
              <input
                name="email"
                placeholder="Email"
                type="email"
                className="input input-bordered w-full"
                value={formik.values.email}
                onChange={formik.handleChange}
                disabled={isEditMode}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
              )}
            </div>

            <div>
              <input
                name="name"
                placeholder="Name"
                type="text"
                className="input input-bordered w-full"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.name}</p>
              )}
            </div>

            {!isEditMode && (
              <div>
                <input
                  name="password"
                  placeholder="Password"
                  type="password"
                  className="input input-bordered w-full"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
                {formik.touched.password && formik.errors.password && (
                  <p className="text-red-500 text-xs mt-1">{formik.errors.password}</p>
                )}
              </div>
            )}

            <div>
              <select
                name="role"
                className="select select-bordered w-full"
                value={formik.values.role}
                onChange={formik.handleChange}
              >
                <option value={UserRole.Developer}>Developer</option>
                <option value={UserRole.ProjectManager}>Project Manager</option>
                <option value={UserRole.Admin}>Admin</option>
              </select>
              {formik.touched.role && formik.errors.role && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.role}</p>
              )}
            </div>

            <div className="flex justify-end gap-2">
              <button
                type="button"
                className="btn"
                onClick={() => dialogRef.current?.close()}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={creating || updating}
              >
                {creating || updating
                  ? "Saving..."
                  : isEditMode
                    ? "Update"
                    : "Create"}
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};
