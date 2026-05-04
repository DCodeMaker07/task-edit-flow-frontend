"use client";

import { useRef } from "react";
import { useFormik } from "formik";
import {
  useCreateTaskMutation,
  useUpdateTaskMutation,
} from "@/redux/services/task-api";
import { Task } from "@/redux/services/interfaces/tasks/Task-response";
import { format, parse } from "date-fns";
import { useAppSelector } from "@/redux/hooks";

type Props = {
  task?: Task;
  projectId?: string;
  onClose?: () => void;
};

export const TaskFormModal = ({ task, projectId, onClose }: Props) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const user = useAppSelector(state => state.auth.user);
  const [createTask, { isLoading: creating }] = useCreateTaskMutation();
  const [updateTask, { isLoading: updating }] = useUpdateTaskMutation();

  const isEditMode = !!task;

  const formik = useFormik({
    initialValues: {
      title: task?.title || "",
      description: task?.description || "",
      status: task?.status || "TODO",
      priority: task?.priority || "MEDIUM",
      projectId: projectId || task?.projectId || "",
      assignedToId: user?.id || "",
      dueDate: task?.dueDate
        ? format(task.dueDate, "yyyy-MM-dd")
        : "",
    },
    enableReinitialize: true,
    onSubmit: async (values, { resetForm }) => {
      try {
        const basePayload = {
          ...values,
          dueDate: values.dueDate
            ? parse(values.dueDate, "yyyy-MM-dd", new Date()).toISOString()
            : undefined,
        };
        if (isEditMode) {
          const { projectId, ...updatePayload } = basePayload;

          await updateTask({ id: task.id, ...updatePayload }).unwrap();
        } else {
          await createTask(basePayload).unwrap();
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

      <dialog ref={dialogRef} className="modal" id="my_task_form_modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-4">
            {isEditMode ? "Edit Task" : "Create Task"}
          </h3>

          <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">

            <input
              name="title"
              placeholder="Title"
              className="input input-bordered w-full"
              value={formik.values.title}
              onChange={formik.handleChange}
            />

            <textarea
              name="description"
              placeholder="Description"
              className="textarea textarea-bordered w-full"
              value={formik.values.description}
              onChange={formik.handleChange}
            />

            <select
              name="status"
              className="select w-full"
              value={formik.values.status}
              onChange={formik.handleChange}
            >
              <option value="TODO">To Do</option>
              <option value="IN_PROGRESS">In Progress</option>
              <option value="IN_REVIEW">In Review</option>
              <option value="DONE">Done</option>
            </select>

            <select
              name="priority"
              className="select w-full"
              value={formik.values.priority}
              onChange={formik.handleChange}
            >
              <option value="LOW">Low</option>
              <option value="MEDIUM">Medium</option>
              <option value="HIGH">High</option>
              <option value="CRITICAL">Critical</option>
            </select>

            <input
              type="date"
              name="dueDate"
              className="input input-bordered w-full"
              value={formik.values.dueDate}
              onChange={formik.handleChange}
            />

            <div className="flex justify-end gap-2">
              <button
                type="button"
                className="btn"
                onClick={() => {
                  dialogRef.current?.close();
                  onClose?.();
                }}
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