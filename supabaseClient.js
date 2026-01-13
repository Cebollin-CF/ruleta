import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://txxkpxryfecljdlawvga.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_gPghPDYqqcjxh4Sjdi-LYA_l5JFvOIG';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
