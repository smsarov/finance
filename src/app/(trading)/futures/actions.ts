'use server';
import { createClient } from "utils/supabase/server";

const sendForm = async (formData: FormData) => {
  const supabase = createClient();
  const user = (await supabase.auth.getUser()).data.user;
  //create a new position
}


export {sendForm}