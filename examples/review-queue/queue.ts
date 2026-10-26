export type Priority = "low" | "normal" | "high"
export type Status = "open" | "in_progress" | "done"

export interface Task {
  id: number
  title: string
  owner: string | null
  priority: Priority
  status: Status
  labels: string[]
  estimate: number
}

export interface QueueFilter {
  owner?: string
  priority?: Priority
  status?: Status
  label?: string
  query?: string
}

export interface QueueSummary {
  total: number
  unassigned: number
  remainingEstimate: number
  byStatus: Record<Status, number>
  byPriority: Record<Priority, number>
}

const priorityOrder: Record<Priority, number> = {
  high: 0,
  normal: 1,
  low: 2,
}

export function filterTasks(tasks: readonly Task[], filter: QueueFilter): Task[] {
  const query = filter.query?.trim().toLowerCase()

  return tasks.filter((task) => {
    if (filter.owner && task.owner !== filter.owner) return false
    if (filter.priority && task.priority !== filter.priority) return false
    if (filter.status && task.status !== filter.status) return false
    if (filter.label && !task.labels.includes(filter.label)) return false
    if (query && !task.title.toLowerCase().includes(query)) return false
    return true
  })
}

export function sortTasks(tasks: readonly Task[]): Task[] {
  return [...tasks].sort((left, right) => {
    const priority = priorityOrder[left.priority] - priorityOrder[right.priority]
    return priority || left.id - right.id
  })
}

export function groupByOwner(tasks: readonly Task[]): Map<string, Task[]> {
  const groups = new Map<string, Task[]>()

  for (const task of tasks) {
    const owner = task.owner ?? "Unassigned"
    const group = groups.get(owner) ?? []
    group.push(task)
    groups.set(owner, group)
  }

  return groups
}

export function summarizeTasks(tasks: readonly Task[]): QueueSummary {
  const summary: QueueSummary = {
    total: tasks.length,
    unassigned: 0,
    remainingEstimate: 0,
    byStatus: { open: 0, in_progress: 0, done: 0 },
    byPriority: { low: 0, normal: 0, high: 0 },
  }

  for (const task of tasks) {
    summary.byStatus[task.status] += 1
    summary.byPriority[task.priority] += 1
    if (task.owner === null) summary.unassigned += 1
    if (task.status !== "done") summary.remainingEstimate += task.estimate
  }

  return summary
}

export function formatTask(task: Task): string {
  const owner = task.owner ?? "unassigned"
  const labels = task.labels.length ? task.labels.join(", ") : "no labels"
  return `#${task.id} ${task.title} — ${task.priority} priority — ${task.status} — owner: ${owner} — estimate: ${task.estimate} — labels: ${labels}`
}

export function paginateTasks(
  tasks: readonly Task[],
  page: number,
  pageSize: number,
): { items: Task[]; hasMore: boolean } {
  if (!Number.isInteger(page) || page < 1) throw new Error("Page must be positive")
  if (!Number.isInteger(pageSize) || pageSize < 1) throw new Error("Page size must be positive")

  const start = (page - 1) * pageSize
  return {
    items: tasks.slice(start, start + pageSize),
    hasMore: start + pageSize < tasks.length,
  }
}
