import { z } from "zod";

const taskSchema = z.object({
  isDone: z.boolean().describe("always false"),
  task: z.string().describe("task description"),
  priority: z
    .enum(["low", "medium", "high"])
    .describe("task priority")
    .nullable(),
  dueDate: z
    .string()
    .describe("task due date")
    .nullable()
    .transform((val) => (val ? new Date(val) : null)),
  subTasks: z
    .array(
      z.object({
        isDone: z.boolean().describe("always false"),
        task: z.string().describe("task description"),
        priority: z
          .enum(["low", "medium", "high"])
          .describe("task priority")
          .nullable(),
        dueDate: z
          .string()
          .describe("task due date")
          .nullable()
          .transform((val) => (val ? new Date(val) : null)),
      })
    )
    .describe("subtasks")
    .nullable(),
});

export { taskSchema };
