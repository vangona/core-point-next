import type { PostgrestError } from '@supabase/supabase-js';

export type DbResult<T> = T extends PromiseLike<infer U> ? U : never;
export type DbResultOk<T> = T extends PromiseLike<{ data: infer U }>
  ? Exclude<U, null>
  : never;
export type DbResultErr = PostgrestError;

export enum SupabaseTable {
  STORES = 'stores',
  COST_DETAILS = 'cost_details',
}
