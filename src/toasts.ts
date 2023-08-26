import { writable } from "svelte/store";

export type toast_variant = "info" | "success" | "error";
export type toast_position = "top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right";

export type toast = {
  id: string;
  title: string;
  description: string;
  variant: toast_variant;
  duration: number;
};

export const default_toast = {
  title: "",
  description: "",
  variant: "info",
  duration: 3000,
} as const;

export let toast_items = writable<toast[]>([]);

export function send_toast(toast: Partial<toast>): void {
  const id = Math.random().toString(36).slice(2);
  const _toast: toast = {
    ...default_toast,
    ...toast,
    id,
  };

  toast_items.update((items) => [...items, _toast]);

  setTimeout(() => {
    delete_toast(_toast);
  }, _toast.duration);
}

export function delete_toast(toast: toast) {
  toast_items.update((items) => items.filter((t) => t.id != toast.id));
}