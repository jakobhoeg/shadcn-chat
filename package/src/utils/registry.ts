import fetch from 'node-fetch';

const REGISTRY_URL = process.env.COMPONENTS_REGISTRY_URL || 'https://shadcn-chat.vercel.app/registry';

async function getRegistryData() {
  console.log(`Fetching registry from: ${REGISTRY_URL}`);
  try {
    const response = await fetch(REGISTRY_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch registry:', error);
    throw error;
  }
}

export async function getRegistryIndex() {
  return getRegistryData();
}

export async function fetchComponent(name: string) {
  const index = await getRegistryIndex();
  const component = index.find((item: any) => item.name === name);

  if (!component) {
    throw new Error(`Component ${name} not found in registry.`);
  }

  return component;
}