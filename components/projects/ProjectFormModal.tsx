"use client";

import { useRef } from "react";
import { useFormik } from "formik";
import { projectSchema } from "@/lib/validations/project.schema";
import {
  useCreateProjectMutation,
  useUpdateProjectMutation,
} from "@/redux/services/project-api";

import { Project } from "@/redux/services/interfaces/projects/Project-response";

type Props = {
  project?: Project | null;
};

export const ProjectFormModal = ({ project }: Props) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const [createProject, { isLoading: creating }] = useCreateProjectMutation();
  const [updateProject, { isLoading: updating }] = useUpdateProjectMutation();

  const isEditMode = !!project;

  const formik = useFormik({
    initialValues: {
      name: project?.name || "",
      description: project?.description || "",
      status: project?.status || "ACTIVE",
    },
    enableReinitialize: true,
    validationSchema: projectSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        console.log({project})
        if (isEditMode && project) {
          await updateProject({
            id: project.id,
            ...values,
          }).unwrap();
        } else {
          await createProject(values).unwrap();
        }

        resetForm();
        dialogRef.current?.close();
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <>
      <dialog ref={dialogRef} className="modal" id="my_project_form_modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-4">
            {isEditMode ? "Edit Project" : "Create Project"}
          </h3>

          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col gap-4"
          >
            {/* NAME */}
            <div>
              <input
                type="text"
                name="name"
                placeholder="Project name"
                className="input input-bordered w-full"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-red-500 text-sm">{formik.errors.name}</p>
              )}
            </div>

            {/* STATUS */}
            <div>
              <select
                name="status"
                className="select w-full"
                value={formik.values.status}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="ACTIVE">Active</option>
                <option value="ARCHIVED">Archived</option>
              </select>

              {formik.touched.status && formik.errors.status && (
                <p className="text-red-500 text-sm">
                  {formik.errors.status}
                </p>
              )}
            </div>

            {/* DESCRIPTION */}
            <div>
              <textarea
                name="description"
                placeholder="Description"
                className="textarea textarea-bordered w-full"
                value={formik.values.description || ""}
                onChange={formik.handleChange}
              />
            </div>

            {/* ACTIONS */}
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

        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};