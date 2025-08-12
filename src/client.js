import { createClient } from '@supabase/supabase-js';
const URL = 'https://wcpvfvkskdrewaepnibx.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndjcHZmdmtza2RyZXdhZXBuaWJ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ5MjE2NTMsImV4cCI6MjA3MDQ5NzY1M30.wFMRvn6hgOfZwEnoU72veFD9jMSTLWomC-nKyt8g7MQ';

export const supabase = createClient(URL, API_KEY);