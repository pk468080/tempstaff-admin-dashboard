
import { supabase } from './supabase'

export async function adminAction<T = unknown>(
  functionName: string,
  params: Record<string, unknown> = {},
): Promise<T> {
  const { data, error } = await supabase.rpc(
    functionName,
    params,
  )

  if (error) {
    throw error
  }

  return data as T
}
