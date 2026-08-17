import { demoEvents } from "./demo-data";

export const eventsRepository = {
  list: async () => demoEvents.filter((event) => event.status === "published"),
  getById: async (id: string) => demoEvents.find((event) => event.id === id),
  search: async (query: string) => {
    const normalized = query.toLocaleLowerCase("es-MX");
    return demoEvents.filter((event) => [event.name, event.city, event.state, event.category, ...event.tags].join(" ").toLocaleLowerCase("es-MX").includes(normalized));
  },
};
