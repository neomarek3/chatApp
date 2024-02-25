import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://zqwjowzzcvrlpwbqzvpd.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpxd2pvd3p6Y3ZybHB3YnF6dnBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg3OTE2MDUsImV4cCI6MjAyNDM2NzYwNX0.kxiRPneGNZdxofVwXvYTDuZ6gPAZ9Hhr7H3wB1SOVB8",
);
