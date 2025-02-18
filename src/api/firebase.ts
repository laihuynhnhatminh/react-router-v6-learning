import { Van } from "../models/van";

export async function getVans(): Promise<Van[]> {
  const response = await fetch("/api/vans");
  const data = await response.json();
  return data.vans;
}

export async function getVanById(id: string): Promise<Van | null> {
  const response = await fetch(`/api/vans/${id}`);
  if (response.ok) {
    const data = await response.json();
    return data.vans;
  } else {
    return null;
  }
}
