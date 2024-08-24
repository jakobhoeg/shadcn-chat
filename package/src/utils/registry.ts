import fetch from 'node-fetch';

const REGISTRY_URL = 'https://shadcn-chat.vercel.app/registry';

export async function getRegistryIndex() {
  try {
    const response = await fetch(REGISTRY_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch registry:', error);
    throw error;
  }
}

export async function fetchComponent(name: string) {
  const index = await getRegistryIndex();
  const component = index.find((item: any) => item.name === name);

  if (!component) {
    throw new Error(`Component ${name} not found in registry.`);
  }

  return component;
}