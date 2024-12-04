import { TaskItem } from "./_components/TaskItem";

const TasksPage = () => (
  <main className='container flex min-h-svh justify-center'>
    <div className='w-full max-w-[700px] mt-20 divide-y divide-blue-300'>
      <TaskItem />
      <TaskItem />
      <TaskItem />
      <TaskItem />
      <TaskItem />
    </div>
  </main>
);

export default TasksPage;
