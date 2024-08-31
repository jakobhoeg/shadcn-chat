import fetch from "node-fetch";

const REGISTRY_URL =
  process.env.COMPONENTS_REGISTRY_URL ||
  "https://shadcn-chat.vercel.app/registry";

async function getRegistryData() {
  try {
    const response = await fetch(REGISTRY_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch registry:", error);
    throw error;
  }
}

export async function getRegistryIndex() {
  const data = await getRegistryData();
  return data.components;
}

async function getHiddenComponent(name: string) {
  const data = await getRegistryData();
  return data.hiddenComponents.find((item: any) => item.name === name);
}

export async function fetchComponent(
  name: string,
  fetchedComponents = new Set(),
) {
  const index = await getRegistryIndex();
  let component = index.find((item: any) => item.name === name);

  if (!component) {
    component = await getHiddenComponent(name);
  }

  if (!component) {
    throw new Error(`Component ${name} not found in registry.`);
  }

  fetchedComponents.add(component);

  if (component.dependencies && Array.isArray(component.dependencies)) {
    for (const depName of component.dependencies) {
      if (!fetchedComponents.has(depName)) {
        await fetchComponent(depName, fetchedComponents);
      }
    }
  }

  return Array.from(fetchedComponents);
}
