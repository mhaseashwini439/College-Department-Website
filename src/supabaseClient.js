import { createClient } from '@supabase/supabase-js'

// .env.local मधून URL आणि Key मिळवणे
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Supabase क्लायंट तयार करणे
export const supabase = createClient(supabaseUrl, supabaseAnonKey)