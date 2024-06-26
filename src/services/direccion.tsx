import supabase from "../util/supabase"
import { Direction } from "../models/direccion";

export const getDireccion = async (): Promise<Direction[]> => {
    const { data , error} = await supabase.from("direccion").select();
    if (error) throw error;
    else{
        console.log ("Direction:", data);
    }
   return data || []; 
}

export const createDireccion = async (direccion: Direction): Promise<void> => {
    const { error} = await supabase.from("direccion").insert(direccion);
    if (error) throw error;
  }